import React from 'react'
import ServiceCard from '../service/ServiceCard'
import Link from 'next/link'

function Service({ bg, title, note }: { bg?: string, title: string, note: string }) {
  return (
    <>
      <div className={`${bg}`}>
        {/* container */}
        <div className='max-w-6xl mx-auto container'>
          {/* heading  */}
          <div className='pb-10 pt-5'>
            <h1 className='text-4xl text-heading font-semibold mb-4'>{title}</h1>
            <p className='text-color '>{note}</p>
          </div>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Link href='/pages/service/1'>
              <ServiceCard
                id="1"
                imgSrc="/ai.jpg"
                title="Lorem, ipsum dolor."
                rating={4}
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in."
              />
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service