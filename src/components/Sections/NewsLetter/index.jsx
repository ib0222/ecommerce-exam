import React from 'react'

const NewsLetter = () => {
  return (
    <div className='mt-20 h-full bg-[#f2f2f2] flex flex-col justify-around text-center py-8 lg:flex-row items-center lg:text-start gap-4'>
      <div>
        <div className='text-2xl'>Newsletter</div>
        <div className='text-sm text-[#51545f] mt-2'>Subscribe to our newsletter and get 20% off your first purchase</div>
      </div>
      <div className='flex items-center'>
        <div><input type="text" className='border p-2' placeholder='Your Email'/></div>
        <button className='uppercase bg-red-500 text-white px-4 py-2 hover:bg-red-300 ease-in-out duration-300'>subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter