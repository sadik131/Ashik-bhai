import CourseCard from '@/app/components/course/CourseCard'
import React from 'react'

function page() {
  return (
    <div className='px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-8'>
        <CourseCard
        imgSrc="/ai.jpg"
        title="Book Title"
        rating={4} 
        bookType="Ai"
        price={399}
        enrol={true}
        />
        <CourseCard 
        imgSrc="/ai.jpg"
        title="Book Title"
        rating={4} 
        bookType="Ai"
        price={399}
        detail={true}
        />
        <CourseCard 
        imgSrc="/ai.jpg"
        title="Book Title"
        rating={4} 
        bookType="Ai"
        price={399}
        />
    </div>
  )
}

export default page