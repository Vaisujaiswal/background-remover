import React from 'react'
import { BsUpload } from "react-icons/bs";
import { assets } from '../assets/assets';

const Upload = () => {
    return (
        <div className='pb-16'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-slate-950 to-slate-300 bg-clip-text text-transparent py-16 md:py-16'>Upload Image And See the Magic</h1>

            <div className='text-center'>
                <input type="file" name='' id='upload2' hidden />
                <label htmlFor="upload2" className='inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-pink-400 text-white px-7 py-4 rounded-full cursor-pointer hover:scale-105 transition-all duration-700'>
                    <BsUpload />
                    <p>Upload Image</p>
                </label>
            </div>

        </div>
    )
}

export default Upload