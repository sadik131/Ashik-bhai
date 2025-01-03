import Image from 'next/image'
import React from 'react'

function TeamMember() {
    return (
        <div className='bg-slate-300 sm:py-10 lg:py-20'>
            {/* heading */}
            <div className="text-center">
                <h1 className="sm:text-3xl lg:text-4xl font-bold text-blue-500">Our Team</h1>
                <p className='text-slate-700'>Meet with all our members</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:mt-5 mt-10">
                {/* team members */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-52">
                        <Image
                            src="/shimu.jpg"
                            alt="Brent Grundy"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="bg-blue-500 p-4 text-center">
                        <h3 className="text-white text-lg font-semibold">Brent Grundy</h3>
                        <p className="text-white text-sm">Founder</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMember