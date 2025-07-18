import React from 'react'
import { assets } from '../assets/assets';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {

  const {openSignIn} = useClerk();
  const {isSignedIn, user} = useUser();

  return (
    <div className='flex justify-between items-center p-4 mx-5 lg:mx-20'>
      <Link to="/">
        <div className='flex items-center gap-3'>
          <img className='w-14 sm:w-8' src={assets.logo} alt="Logo" />
          <span className='font-semibold'>Background Remover</span>
        </div>
      </Link>

      {
        isSignedIn ? <div>
          <UserButton />
        </div>
        : <button onClick={() => openSignIn({})} className=' text-violet-400 text-sm border border-violet-700 flex items-center gap-4 px-4 py-3 rounded-full sm:px-8 sm:py-3 hover:scale-105 transition-all duration-700 '>Get Start <FaLongArrowAltRight /></button>
      }

      
    </div>
  )
}

export default Navbar