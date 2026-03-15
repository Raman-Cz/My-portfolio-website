// pages/api/leetcode.js
// Server-side proxy to fetch LeetCode stats via their public GraphQL API.
// This avoids CORS issues and keeps the fetch server-side.

const LEETCODE_API = "https://leetcode.com/graphql";
const USERNAME = "raman04";

const QUERY_SOLVED = `
  query getUserProfile($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      username
      profile {
        ranking
        reputation
        starRating
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
  }
`;

const QUERY_CONTEST = `
  query userContestRankingInfo($username: String!) {
    userContestRanking(username: $username) {
      attendedContestsCount
      rating
      globalRanking
      topPercentage
    }
    userContestRankingHistory(username: $username) {
      attended
      rating
      ranking
      contest {
        title
        startTime
      }
    }
  }
`;

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const [solvedRes, contestRes] = await Promise.all([
      fetch(LEETCODE_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Referer": "https://leetcode.com",
          "Origin": "https://leetcode.com",
        },
        body: JSON.stringify({
          query: QUERY_SOLVED,
          variables: { username: USERNAME },
        }),
      }),
      fetch(LEETCODE_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Referer": "https://leetcode.com",
          "Origin": "https://leetcode.com",
        },
        body: JSON.stringify({
          query: QUERY_CONTEST,
          variables: { username: USERNAME },
        }),
      }),
    ]);

    const solvedData = await solvedRes.json();
    const contestData = await contestRes.json();

    const user = solvedData?.data?.matchedUser;
    const totalQuestions = solvedData?.data?.allQuestionsCount;
    const contest = contestData?.data?.userContestRanking;
    const contestHistory = contestData?.data?.userContestRankingHistory;

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const acStats = user.submitStatsGlobal.acSubmissionNum;
    const easy = acStats.find((s) => s.difficulty === "Easy")?.count || 0;
    const medium = acStats.find((s) => s.difficulty === "Medium")?.count || 0;
    const hard = acStats.find((s) => s.difficulty === "Hard")?.count || 0;
    const total = acStats.find((s) => s.difficulty === "All")?.count || 0;

    const totalEasy = totalQuestions?.find((q) => q.difficulty === "Easy")?.count || 0;
    const totalMedium = totalQuestions?.find((q) => q.difficulty === "Medium")?.count || 0;
    const totalHard = totalQuestions?.find((q) => q.difficulty === "Hard")?.count || 0;

    // Get recent contests (last 5 attended)
    const attendedContests = (contestHistory || []).filter((c) => c.attended);
    const recentContests = attendedContests.slice(-5).reverse();

    // Compute highest rating ever
    const highestRating = attendedContests.length > 0
      ? Math.round(Math.max(...attendedContests.map((c) => c.rating)))
      : null;

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=7200");
    res.status(200).json({
      username: USERNAME,
      ranking: user.profile.ranking,
      solved: { total, easy, medium, hard },
      totalQuestions: { easy: totalEasy, medium: totalMedium, hard: totalHard },
      contest: contest
        ? {
            rating: Math.round(contest.rating),
            highestRating,
            attended: contest.attendedContestsCount,
            globalRanking: contest.globalRanking,
            topPercentage: contest.topPercentage?.toFixed(1),
          }
        : null,
      recentContests: recentContests.map((c) => ({
        title: c.contest.title,
        rating: Math.round(c.rating),
        ranking: c.ranking,
      })),
    });
  } catch (error) {
    console.error("LeetCode API error:", error);
    res.status(500).json({ error: "Failed to fetch LeetCode data" });
  }
}
