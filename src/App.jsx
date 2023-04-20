import React from 'react'

export default function App() {
  return (
    <section>
      <div className='flex justify-between items-center px-16 bg-black py-5 text-white'>
        <div className='text-[40px] cursor-pointer'>Logo.</div>
        <div className='flex gap-x-10 text-[20px] items-center'>
          <span className='cursor-pointer hover:scale-110 transition-all duration-500'>Home</span>
          <span className='cursor-pointer hover:scale-110 transition-all duration-500'>About</span>
          <span className='cursor-pointer hover:scale-110 transition-all duration-500'>Contact</span>
          <span className='cursor-pointer hover:scale-110 transition-all duration-500'>Services</span>
        </div>
      </div>
      <div className='flex justify-center  mt-10'>
        <div className='w-[30rem] h-[30rem] m-auto shadow-2xl p-5'>
          <h1 className='text-[20px] font-bold text-center underline'>Train Info</h1>
          <div className='flex flex-col gap-y-10 pt-10'>
            <div className="train-number">
              <h1>Train Number:</h1>
            </div>
            <div className="train-name">
              <h1>Train Name:</h1>
            </div>
            <div className="train-time">
              <h1>Train Time:</h1>
            </div>
            <div className="train-seats">
              <h1>Train Seats Left:</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
