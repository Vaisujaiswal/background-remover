import React, { useContext } from 'react';
import { BsUpload } from "react-icons/bs";
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Header = () => {
  const { removeBg } = useContext(AppContext);

  return (
    <div className='w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4 sm:px-8 md:px-16 lg:px-24 py-12 lg:py-20 overflow-x-hidden'>

      {/* Left Side Content */}
      <div className='text-center lg:text-left max-w-2xl'>
        <h1 className='text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight bg-gradient-to-r from-[#333333] to-[#888888] bg-clip-text text-transparent pb-4'>
          Remove the <br className='hidden md:block' />
          <span className='bg-gradient-to-r from-violet-600 to-pink-400 bg-clip-text text-transparent'>Background</span> of the <br className='hidden md:block' />
          image for free
        </h1>
        <p className='my-5 text-sm sm:text-base text-gray-400 max-w-md mx-auto lg:mx-0'>
          Upload your image and remove the background in seconds. Fast, accurate, and completely free!
        </p>

        {/* Upload Button */}
        <div>
          <input
            onChange={e => removeBg(e.target.files[0])}
            type="file"
            accept='image/*'
            id='upload1'
            hidden
          />
          <label
            htmlFor="upload1"
            className='inline-flex items-center justify-center gap-3 bg-gradient-to-r from-violet-600 to-pink-400 text-white px-6 sm:px-7 py-3 sm:py-4 rounded-full cursor-pointer hover:scale-105 transition-all duration-700 text-sm sm:text-base'
          >
            <BsUpload />
            <p>Upload Image</p>
          </label>
        </div>
      </div>

      {/* Right Side Image */}
      <div className='w-full max-w-[500px] sm:max-w-[550px]'>
        <img
          src={assets.header}
          alt="Hero"
          className='w-full h-auto rounded-[40px] mx-auto lg:mx-0'
        />
      </div>
    </div>
  );
};

export default Header;
