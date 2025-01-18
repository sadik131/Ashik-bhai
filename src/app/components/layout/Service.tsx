import React from 'react'
import ServiceCard from '../service/ServiceCard'

function Service() {
  return (
    <>
    <div className='mx-auto max-w-7xl padding'>
      {/* heading  */}
    <div className='py-10'>
      <h1 className='text-4xl font-bold mb-4'>Popular Courses</h1>
      <h3>Discover what people are learning</h3>
    </div>
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <ServiceCard
        id="1"
        imgSrc="/ai.jpg"
        title="Lorem, ipsum dolor." 
        rating={4} 
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in."
        />
{/*         
        <ServiceCard 
        id="2"
        imgSrc="/ai.jpg"
        title="Lorem, ipsum dolor."
        rating={4} 
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in."
        />
        <ServiceCard 
        id="3"
        imgSrc="/ai.jpg"
        title="Lorem, ipsum dolor."
        rating={4} 
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in."
        /> */}
    </div>
    </div>
    </>
  )
}

export default Service