import React from 'react'

const Cta = () => {
  return (
    <div className='container bg-[#059a75] mx-auto flex flex-col gap-5 text-white items-center justify-center py-20'>
            <p className=' text-xl md:text-2xl lg:text-4xl font-medium text-center'>Get the springboard into your growth journey.</p>
            <p className='text-base sm:text-lg lg:text-2xl font-medium text-center'>Start pursuing your big dreams with clarity.</p>
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 items-center mt-5">
                <input type="text" className='px-5 py-5 rounded-full w-72 lg:w-96 outline-none bg-[#f8fafe]' placeholder='Subscribe to our newsletter' />
                <button className='btn btn-sm lg:btn-lg bg-[#0c442a] btn-lg rounded-full border-none'>Subscribe</button>
            </div>
    </div>
  )
}

export default Cta