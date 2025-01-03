import React from 'react'
import ServiceCard from '../service/ServiceCard'

function Service() {
  return (
    <div className='mx-auto max-w-[1200px] px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 padding'>
        <ServiceCard
        id="1"
        imgSrc="/ai.jpg"
        title="Lorem, ipsum dolor." 
        rating={4} 
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut reiciendis, illum praesentium consequuntur in."
        />
        
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
        />
    </div>
  )
}

export default Service