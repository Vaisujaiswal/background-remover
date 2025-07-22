import React from 'react'
import { FaUpload } from "react-icons/fa";
import { SiConvertio } from "react-icons/si";
import { FaDownload } from "react-icons/fa";

const Steps = () => {
    return (
        <div className="mx-4 lg:mx-44 xl:py-40 mt-12">
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-[#333333] to-[#888888] bg-clip-text text-transparent pb-2'>Steps to remove background <br /> of the image in seconds.</h1>
            <div className='flex items-start flex-wrap gap-10 justify-center mt-10 xl:mt-20'>

                <div className='flex items-start gap-4 border border-[#333333] bg-[#111111] drop-shadow-md p-10 pb-9 rounded-md hover:scale-105 transition-all duration-300 ease-in-out shadow-[0_4px_20px_rgba(138,138,138,0.3)] hover:shadow-[0_6px_25px_rgba(138,138,138,0.5)]'>
                    <FaUpload className='text-lg text-[#999999] mt-1' />
                    <div>
                        <p className='text-xl text-[#999999] font-medium' >Upload Image</p>
                        <p className='text-sm mt-1.5 max-w-48 text-[#555555]'> Choose any image from your device. You want to remove background. </p>
                    </div>
                </div>

                <div className='flex items-start gap-4 border border-[#333333] bg-[#111111] drop-shadow-md p-10 pb-9 rounded-md hover:scale-105 transition-all duration-300 ease-in-out shadow-[0_4px_20px_rgba(138,138,138,0.3)] hover:shadow-[0_6px_25px_rgba(138,138,138,0.5)]'>
                    <SiConvertio  className='text-lg text-[#999999] mt-1' />
                    <div>
                        <p className='text-xl text-[#999999] font-medium' >AI Work</p>
                        <p className='text-sm mt-1.5 max-w-48 text-[#555555]'> Our AI instantly removes the background within seconds.</p>
                    </div>
                </div>

                <div className='flex items-start gap-4 border border-[#333333] bg-[#111111] drop-shadow-md p-10 pb-9 rounded-md hover:scale-105 transition-all duration-300 ease-in-out shadow-[0_4px_20px_rgba(138,138,138,0.3)] hover:shadow-[0_6px_25px_rgba(138,138,138,0.5)]'>
                    <FaDownload className='text-lg text-[#999999] mt-1' />
                    <div>
                        <p className='text-xl text-[#999999] font-medium' >Downlode Image</p>
                        <p className='text-sm mt-1.5 max-w-48 text-[#555555]'> Download your new image with a transparent background in one click. </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Steps