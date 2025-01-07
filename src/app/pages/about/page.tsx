import Experience from '@/app/components/layout/about/Experience'
import Hero from '@/app/components/layout/about/Hero'
import OurPrograms from '@/app/components/layout/about/OurPrograms'
import React from 'react'

function page() {
  return (
    <div>
        <Hero />
        <OurPrograms />
        <Experience />
    </div>
  )
}

export default page