import Image from "next/image";
import React from "react";
const images = [
  "html5",
  "css",
  "javascript",
  "react",
  "tailwindcss",
  "nodejs",
  "nextjs",
  "expressjs",
  "mongodb",
];
const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image) => {
            return (
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src={`/assets/skills/${image}.png`}
                      alt="/"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center uppercase">
                    <h3>{image}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
