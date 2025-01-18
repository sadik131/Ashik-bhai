import Image from 'next/image'
import React from 'react'

function MotiveBanner() {
  return (
    <div className='bg-slate-200 flex items-center justify-center'>
      {/* left side */}
      <div className='w-1/2 text-center'>
        <h1 className='text-3xl font-bold '>Limitless learning, more possibilities</h1>
        <h1 className='text-xl py-5 font-bold '>Answer a few questions for your top picks</h1>
        <button className='block mx-auto py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white'>JOIN FOR FREE</button>
      </div>
      {/* left side */}
      <div className='h-96 w-1/2 relative'>
        <Image src={"/motive.webp"} className='' fill alt='hero' />
      </div>
    </div>
  )
}

export default MotiveBanner