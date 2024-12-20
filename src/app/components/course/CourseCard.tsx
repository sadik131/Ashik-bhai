import React from 'react'
import { CourseProp } from '../..'
import Image from 'next/image'
import Link from 'next/link'

function CourseCard({ imgSrc, title, rating, bookType, price, detail, enrol }: CourseProp) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-white">
      <div className='relative h-60 w-full'>
        <Image
          className="rounded-t-lg"
          objectFit="cover"
          fill
          src={imgSrc}
          alt={title}
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>

        <div className="flex items-center mb-2">
          {Array(rating).fill('').map((_, i) => (
            <svg
              key={i}
              className="h-5 w-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        <p className="text-gray-700  text-base mb-2">
          Type: <span className='font-bold'>{bookType}</span>
        </p>

        <div className='flex items-center justify-between'>
          <p className="text-green-500 text-xl font-semibold">
            ₹{price}
          </p>
          {enrol && <Link className='btn' href="/pages/enroll">Enroll Now</Link>}
          {detail && <Link className='btn' href="/pages/detail">detail</Link>}
        </div>
      </div>
    </div>
  )
}

export default CourseCard