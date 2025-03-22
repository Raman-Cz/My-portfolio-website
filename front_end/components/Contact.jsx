import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/contact.jpg"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Raman</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I'm actively looking for exciting opportunities in Software
                  Development, Full-Stack Engineering, and AI-driven projects.
                  Whether you’re a recruiter, a fellow developer, or someone
                  with an amazing idea—I'd love to connect!
                </p>
              </div>
              <div>
              <p className="uppercase pt-8">Connect With Me</p>
              <div className="flex items-center justify-between py-4">
                <div className=" rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn size={25} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub size={25} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail size={25} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill size={25} />
                </div>
              </div>
            </div>
            </div>
            
          </div>

          {/*right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone Number </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Email </label>
                <input
                      type="email"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                </div>
                <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Subject </label>
                <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                </div>
                <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Message </label>
               <textarea className="border-2 rounded-lg p-3 border-gray-300" rows={10} >

               </textarea>
                </div>
                <button className=" p-4 w-full mt-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
            <Link href='/'>
                <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                    <HiOutlineChevronDoubleUp className="m-auto text-[#5651e5]" size={30} />
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
