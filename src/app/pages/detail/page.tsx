import Review from '@/app/components/Review'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
      <div className='container flex items-center justify-center gap-5'>
        {/* course banner */}
        <div className='relative w-1/2 h-60'>
          <Image src="/ai.jpg" alt='course' className='object-cover rounded-md' fill />
        </div>
        {/* course detail */}
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-bold'>Artificial intelligence Masterclass
          </h1>
          <p><span className='font-bold'>Language:</span> English</p>
          <p><span className='font-bold'>Instructors:</span> Philip Beddit</p>
          <p className='text-xl'><del className='font-bold'>3000</del> 50% off</p>
          <div className='flex items-center justify-between'>
          <p className='text-4xl text-cyan-500 font-bold'>1500</p>
          <Link className='btn inline-block' href={"/pages/course/1"}>Course</Link>
          </div>
        </div>
      </div>
      {/* <div className='h-screen flex bg-slate-200 w-full container '>
        <h5 className='text-xs '>Why this course?</h5>

      </div> */}
     <Review></Review>
    </>
  )
}

export default page