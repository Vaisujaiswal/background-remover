import React from 'react'
import { FaUpload } from "react-icons/fa";

const Steps = () => {
    return (
        <div className="mx-4 lg:mx-44 xl:py-40">
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-slate-950 to-slate-300 bg-clip-text text-transparent'>Steps to remove background <br /> of the image in seconds.</h1>
            <div className='flex items-start flex-wrap gap-4 justify-center mt-10 xl:mt-20'>

                <div className='flex items-start gap-4 bg-black border drop-shadow-md p-7 pb-9 rounded-md hover:scale-105 transition-all duration-300 ease-in-out'>
                    <FaUpload className='text-lg mt-4' />
                    <div>
                        <p className='text-xl font-medium' >upload image</p>
                        <p className='text-sm text-neutral-500'>Lorem ipsum dolor sit ab <br /> voluptas architecto sunt.</p>
                    </div>
                </div>

                <div className='flex items-start gap-4 bg-black border drop-shadow-md p-7 pb-9 rounded-md hover:scale-105 transition-all duration-300 ease-in-out'>
                    <FaUpload className='text-lg mt-4' />
                    <div>
                        <p className='text-xl font-medium' >upload image</p>
                        <p className='text-sm text-neutral-500'>Lorem ipsum dolor sit ab <br /> voluptas architecto sunt.</p>
                    </div>
                </div>

                <div className='flex items-start gap-4 bg-black border drop-shadow-md p-7 pb-9 rounded-md hover:scale-105 transition-all duration-300 ease-in-out'>
                    <FaUpload className='text-lg mt-4' />
                    <div>
                        <p className='text-xl font-medium' >upload image</p>
                        <p className='text-sm text-neutral-500'>Lorem ipsum dolor sit ab <br /> voluptas architecto sunt.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Steps