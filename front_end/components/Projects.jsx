import React from 'react';
import RealtimeChatImg from '../public/assets/projectImages/RealtimeChatImg.png';
import SpotifyCloneImg from '../public/assets/projectImages/SpotifyCloneImg.png';
import AdminDashboardImg from '../public/assets/projectImages/AdminDashboardImg.png';
import AdvancedAuthImg from '../public/assets/projectImages/AdvancedAuthImg.png';
import ExpenseTrackerImg from '../public/assets/projectImages/ExpenseTrackerImg.png';
import XCloneImg from '../public/assets/projectImages/XCloneImg.png';
import NyxiaImg from '../public/assets/projectImages/NyxiaImg.png';
import IntervueImg from '../public/assets/projectImages/IntervueImg.png';
import ProjectItem from './ProjectItem';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div id="projects" className="w-full p-4 min-h-screen">
      <motion.div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#3131b8]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>

        {/* FIXED GRID */}
        <div className="p-2 m-2 grid md:grid-cols-2 gap-8 justify-items-center">
          <ProjectItem
            title="Nyxia-My Social Media App"
            backgroundImg={NyxiaImg}
            projectUrl="https://nyxia-two.vercel.app/"
            info="A social media application built with Next.js that supports user authentication, profile management, post creation (text & images), and real-time interactions through likes and comments. Features a responsive modern UI and notifications system."
          />
          <ProjectItem
            title="Intervue - A Video Call interview platform"
            backgroundImg={IntervueImg}
            projectUrl="https://interview-platform-1vqs.vercel.app/"
            info="A virtual coding interview platform built with Next.js featuring video/audio calls, screen sharing, and a multi-language code editor. Supports real-time collaboration, authentication (Google), scheduling, recordings, and feedback, with a responsive light/dark mode UI."
          />
          <ProjectItem
            title="Online Chat Application"
            backgroundImg={RealtimeChatImg}
            projectUrl="https://chatty-for-chatting.onrender.com"
            info="A full-stack real-time chat app built with React, Socket.io, and Tailwind CSS. Features authentication, instant text/image messaging, online/offline status, theme selection, and a modern responsive UI."
          />
          <ProjectItem
            title="Admin Dashboard"
            backgroundImg={AdminDashboardImg}
            projectUrl="https://admin-dashboard-lilac-two-83.vercel.app/"
            info="A React-based admin dashboard with responsive pages for products, users, sales, and analytics. Includes interactive charts, data tables, CRUD operations, and real-time updates, styled with Tailwind CSS."
          />
          <ProjectItem
            title="Expense Tracker"
            backgroundImg={ExpenseTrackerImg}
            projectUrl="https://expense-tracker-frontend-sage.vercel.app/"
            info="A full-stack expense tracker built with React, MongoDB, and SCSS. It allows users to log incomes and expenses, visualize transactions with interactive charts, and track financial history in real time. The dashboard features dynamic insights, authentication, and a modern responsive UI for efficient personal finance management."
          />
          <ProjectItem
            title="Advanced Authentication System"
            backgroundImg={AdvancedAuthImg}
            projectUrl="https://advanced-authentication-53j9.onrender.com/"
            info="Built a secure authentication system using React, Node.js, Express, and MongoDB. Features include user sign-up/login, email verification, password reset, and JWT-based session management. Integrated email notifications via Mailtrap and styled with Tailwind CSS for a seamless user experience."
          />
          <ProjectItem
            title="X Clone"
            backgroundImg={XCloneImg}
            projectUrl="https://x-clone-b8bm.onrender.com"
            info="Built a responsive X (Twitter) clone using React, WebSockets, and Redux. Implemented user authentication, real-time posts, notifications, and dynamic content updates. Styled with Tailwind CSS for a clean and modern interface."
          />
          <ProjectItem
            title="Spotify Clone"
            backgroundImg={SpotifyCloneImg}
            projectUrl="https://spotify-clone-z0hi.onrender.com"
            info="Built a responsive Spotify clone with integrated real-time chat using React, Node.js, Express, and MongoDB. Features include user authentication, playlist creation, real-time online status, custom playback controls, album queuing, and dynamic listening updates. Includes an admin dashboard for managing songs, albums, artists, and users. Styled with Tailwind CSS for a modern interface."
          />
          
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
