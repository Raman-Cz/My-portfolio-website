import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import RealtimeChatImg from '../public/assets/projectImages/RealtimeChatImg.png';
import SpotifyCloneImg from '../public/assets/projectImages/SpotifyCloneImg.png';
import AdminDashboardImg from '../public/assets/projectImages/AdminDashboardImg.png';
import AdvancedAuthImg from '../public/assets/projectImages/AdvancedAuthImg.png';
import ExpenseTrackerImg from '../public/assets/projectImages/ExpenseTrackerImg.png';
import XCloneImg from '../public/assets/projectImages/XCloneImg.png';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Online Chat Application'
            backgroundImg={RealtimeChatImg}
            projectUrl='https://chatty-for-chatting.onrender.com'
            tech='MERN tailwindcss Socket-Io'
          />
          <ProjectItem
            title='Spotify Clone'
            backgroundImg={SpotifyCloneImg}
            projectUrl='https://spotify-clone-z0hi.onrender.com'
            tech='MERN tailwindcss shadcn clerk'

          />
          <ProjectItem
            title='Admin Dashboard'
            backgroundImg={AdminDashboardImg}
            projectUrl='https://admin-dashboard-lilac-two-83.vercel.app/'
            tech='React Lucide-react framer-motion'

          />
          <ProjectItem
            title='Expense Tracker'
            backgroundImg={ExpenseTrackerImg}
            projectUrl='https://expense-tracker-frontend-sage.vercel.app/'
            tech='MERN CSS '

          />
          <ProjectItem
            title='Advanced Authentication System'
            backgroundImg={XCloneImg}
            projectUrl='https://x-clone-b8bm.onrender.com'
            tech='MERN tailwindcss DaisyUi'

          />
          <ProjectItem
            title='Advanced Authentication System'
            backgroundImg={AdvancedAuthImg}
            projectUrl='https://advanced-authentication-53j9.onrender.com/'
            tech='MERN tailwindcss Mailtrap'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;