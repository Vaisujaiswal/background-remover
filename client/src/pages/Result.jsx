import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Result = () => {

  const {resultImage, image} = useContext(AppContext)

  return (
    <div className='mx-4 my-3 lg:mx-40 mt-14 min-h-[75vh]'>

      <div className='bg-[#1a1a1a] px-8 py-6 rounded-lg drop-shadow-sm'>
        {/* Image container  */}
        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
          <div>
            <p className='font-semibold text-gray-500 mb-2'>Original Image</p>
            <img className='rounded-md border' src={image ? URL.createObjectURL(image) : ''} />
          </div>

          <div className='flex flex-col'>
            <p className='font-semibold text-gray-500 mb-2'>BackGround Removed Image</p>
            <div  className='rounded-md  h-96 relative bg-layer overflow-hidden' >
              <img src={resultImage ? resultImage : ""} className='h-96' />
              {!resultImage && image && <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
                <div className='border-4 border-purple-600 rounded-full w-12 h-12 border-t-transparent animate-spin'>
                </div>
              </div> }
              
            </div>
          </div>
        </div>
        {/* Buttons for actions */}

        {resultImage && <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>

          {/* <button className='px-7 py-3 text-violet-400 text-sm border border-violet-700 rounded-full hover:scale-105 transition-all duration-700'>Try another image</button> */}

          <a href={resultImage} download className='inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-pink-400 text-white px-7 py-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-700'>Downloads image</a>
        </div>}

      </div>
    </div>
  )
}

export default Result