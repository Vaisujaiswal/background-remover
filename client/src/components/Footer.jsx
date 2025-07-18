import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='flex items-center justify-between gap-4 px-4 lg:px-40 py-3'>
            <Link to="/">
                <div className='flex items-center gap-3'>
                    <img className='w-14 sm:w-8' src={assets.logo} alt="Logo" />
                    <span className='font-semibold'>Background Remover</span>
                </div>
            </Link>
            <p className='flex-1 border-l border-gray-500 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @vaishnavi | All right reserved.</p>
            <div className='flex gap-2 text-xl text-gray-400'>
                <BsLinkedin />
                <FaGithubSquare />
                <BsDiscord />
            </div>
        </div>
    )
}

export default Footer