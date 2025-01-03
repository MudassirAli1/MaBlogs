import React from 'react'
import Image from 'next/image'
import Logo from '/public/assets/logo.png'
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white p-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image src={Logo} alt="Logo" height={190} width={100} className="w-24 h-auto" />
            <span className="text-2xl md:text-4xl">MA BLOGS</span>
          </div>

          <div className="text-center mt-4">
            <p className="text-xs md:text-sm">© MA BLOGS | All rights reserved.</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-4 md:mt-0">
            <a href="/" target="Linkedin" className="hover:text-blue-500 transition duration-300">
              <FaLinkedin size={25} />
            </a>
            <a href="/" target="Github" className="hover:text-gray-400 transition duration-300">
              <FaGithub size={25} />
            </a>
            <a href="/" target="Facebook" className="hover:text-blue-600 transition duration-300">
              <FaFacebookF size={25} />
            </a>
            <a href="/" target="_blank" className="hover:text-blue-400 transition duration-300">
              <FaTwitter size={25} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer