import Head from "next/head";
import Main from "@/components/Main";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <Head>
        <title>Raman Singh — Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Raman Singh — Full-Stack Developer & ML Enthusiast building scalable web applications and AI systems."
        />
        <meta name="theme-color" content="#FDFBF7" />
      </Head>
      <Main />
      <Timeline />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}