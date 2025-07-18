import React from 'react'
import { plans } from '../assets/assets'

const BuyCredit = () => {
  return (
    <div className='min-h-[75vh] text-center pt-14 mb-10'>

      <button  className='text-neutral-400 border  px-5 py-3 rounded-full hover:scale-105 transition-all duration-300 ease-in-out' >Our plans</button>

      <h1 className='bg-gradient-to-r from-slate-950 to-slate-300 bg-clip-text text-transparent font-semibold mt-5 mb-5 text-2xl'>choose the plan that's right for you</h1>

      <div className='flex flex-wrap items-center justify-center gap-6 text-left'>

        {/* Map through plans and display them here */}

        {plans.map((item, index) => (
          <div className=' bg-black border  text-neutral-400 py-12 px-8 drop-shadow-md rounded-md hover:scale-105 transition-all duration-300 ease-in-out' key={index}>
            <div className='font-semibold mt-3'>{item.id}</div>
            <div className='text-sm'>{item.desribtion}</div>
            <p className='mt-5'>
              <span className='text-3xl font-medium'>₹{item.price}</span> / {item.credit} credits
            </p>
            <button className='w-full bg-neutral-500 text-white text-sm rounded-md min-w-52 py-3 mt-8'>Purchase</button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default BuyCredit