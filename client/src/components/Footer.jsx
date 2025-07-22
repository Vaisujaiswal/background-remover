import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="px-2 py-3 lg:px-40">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className="w-24 object-contain" src={assets.logo} alt="Logo" />
        </Link>

        {/* Copyright Text */}
        <p className="text-center md:text-left text-sm text-gray-500">
          © {new Date().getFullYear()} Vaishnavi. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-3 text-xl text-gray-400">
          <a
            href="https://www.linkedin.com/in/vaishnavi-rajesh-jaiswal-991322314/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/Vaisujaiswal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
