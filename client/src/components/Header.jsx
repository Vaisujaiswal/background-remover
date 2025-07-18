import React from 'react'
import { BsUpload } from "react-icons/bs";
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='flex justify-between items-center max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
        {/* Left side header content */}
        <div>
            <h1 className='text-4xl xl:text-5xl 2xl:text-6xl text-neutral-700 font-bold leading-tight'>
                Revome the <br className='max-md:hidden'/> <span className='bg-gradient-to-r from-violet-600 to-pink-400 bg-clip-text text-transparent'>BackGround</span> of the <br className='max-md:hidden' /> image for free
            </h1>
            <p className='my-5 text-[15px] text-gray-500'>Upload your image and remove the background in seconds <br className='max-md:hidden' /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit<br className='max-md:hidden' /> voluptatibus i ffkermf,sd Consectetur excepturi laudantium nulla in,<br className='max-md:hidden' />  eveniet perferendis cupiditate vero tempore.</p>
            <div>
                <input type="file" name='' id='upload1' hidden />
                <label htmlFor="upload1" className='inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-pink-400 text-white px-7 py-4 rounded-full cursor-pointer hover:scale-105 transition-all duration-700'>
                    <BsUpload />
                    <p>Upload Image</p>
                </label>
            </div>
        </div>

        {/* Right side header content */}
        <div>
            <img className='w-full max-w-md' src={assets.hero} alt="Hero" />
        </div>
    </div>
  )
}

export default Header