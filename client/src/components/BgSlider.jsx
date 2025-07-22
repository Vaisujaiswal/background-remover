import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets';

const BgSlider = () => {

  const [sliderimages, setSliderImages] = useState(20);

  const handleSliderChange = (e) => {
    setSliderImages(e.target.value);
    // console.log(e.target.value);
  }

  return (
    <div className='pb-10 md:py-20 mx-8'>

      <h1 className='mb-16 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold  bg-gradient-to-r from-violet-600 to-pink-400 bg-clip-text text-transparent pb-1'>Image With And Without Background</h1>

      <div className='relative w-full max-w-4xl overflow-hidden m-auto rounded-xl'>
        <img src={assets.with_bg_img} style={{clipPath: `inset(0 ${100.2 - sliderimages}% 0 0)`}}  />

        <img className='absolute top-0 left-0 w-full h-full' src={assets.without_bg_img} style={{clipPath: `inset(0 0 0 ${sliderimages}%)`}}  />

        {/* Slider input */}
        <input 
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider'
          type="range" 
          min={0}
          max= {100} 
          value={sliderimages} 
          onChange={handleSliderChange} />

      </div>

    </div>
  )
}

export default BgSlider