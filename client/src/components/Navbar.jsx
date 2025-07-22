import React, { useContext, useEffect } from 'react';
import { assets } from '../assets/assets';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../context/AppContext.jsx';
import { TbCoinRupee } from "react-icons/tb";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);

  return (
    <div className='flex flex-row sm:flex-row justify-between items-center px-4 py-4 sm:px-6 md:px-10 lg:px-20 gap-4 sm:gap-0'>

      {/* Logo */}
      <Link to="/" className='flex items-center'>
        <img className='w-24 sm:w-28' src={assets.logo} alt="Logo" />
      </Link>

      {/* Right Section */}
      {
        isSignedIn ? (
          <div className='flex flex-row sm:flex-row items-center gap-4 sm:gap-8'>
            <button
              onClick={() => navigate('/buy-credit')}
              className='text-[#888888] border border-[#333333] bg-[#1a1a1a] flex px-4 py-2 rounded-full gap-2 items-center transition-all duration-500 hover:scale-105 shadow-[0_4px_20px_rgba(138,138,138,0.3)] hover:shadow-[0_6px_25px_rgba(138,138,138,0.5)] text-sm sm:text-base'
            >
              <TbCoinRupee className='text-xl text-[#ffcc00]' />
              <p>Credits: {credit}</p>
            </button>
         
              {/* <p className='text-[#888888] text-sm sm:text-base'>
                Hi, {user.firstName}
              </p> */}

              <UserButton />
      
          </div>
        ) : (
          <button
            onClick={() => openSignIn({})}
            className='text-[#888888] bg-[#1a1a1a] text-sm border border-[#333333] flex items-center gap-2 sm:gap-4 px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'
          >
            Get Started <FaLongArrowAltRight />
          </button>
        )
      }
    </div>
  );
};

export default Navbar;
