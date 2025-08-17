// ProjectItem.jsx
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({ title, backgroundImg, info, projectUrl }) => {
  return (
    <div className="card group relative w-[600px] h-[450px] flex justify-center items-center m-6">
      <span className="highlight"></span>

      {/* Inner card container */}
      <div className="relative z-10 h-[300px] w-[500px] rounded-lg overflow-hidden shadow-lg">
        
        {/* Image (default state) */}
        <Image
          src={backgroundImg}
          alt={title}
          fill
          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
        />

        {/* Text overlay (hidden by default, appears on hover) */}
        <div className="absolute inset-0 flex flex-col justify-center items-center 
          text-center text-white p-6 bg-black/40 backdrop-blur-sm opacity-0 
          transition-opacity duration-500 group-hover:opacity-100">
          
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-m mb-3">{info}</p>

          <Link
  href={projectUrl}
  className="px-5 py-2  
             bg-gradient-to-r from-blue-900 to-blue-500 
             text-white font-medium 
             shadow-lg shadow-blue-500 
             transition transform hover:scale-105 hover:shadow-white"
>
  View Project
</Link>

        </div>
      </div>
    </div>
  )
}

export default ProjectItem
