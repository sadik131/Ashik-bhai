import Image from 'next/image';
import React from 'react';

function Experience() {
    const data = [
        {
            subject: "Engineering Studies",
            percentage: 90,
            color:"bg-pink-500"
        },
        {
            subject: "Business Studies",
            percentage: 70,
            color:"bg-yellow-500"
        },
        {
            subject: "English Studies",
            percentage: 80,
            color:"bg-blue-500"
        },
        {
            subject: "Science Studies",
            percentage: 60,
            color:"bg-green-500"
        },
    ];

    return (
        <>
            <div
                className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-white"
                style={{
                    backgroundImage: "url('/exBanner.webp')",
                }}
            >
                <div className="absolute inset-0 bg-blue-700 bg-opacity-90"></div>
                <div className="relative text-center px-4">
                    <p className="text-sm font-medium uppercase mb-4 tracking-wider">
                        Best Education University
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mb-6">
                        Education Is The Backbone <br />
                        Of a Nation Expansion Of Idea
                    </h1>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="#"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition shadow-md"
                        >
                            Join With Us →
                        </a>
                        <a
                            href="#"
                            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-lg transition shadow-md"
                        >
                            Read More →
                        </a>
                    </div>
                </div>
            </div>

                {/* Experience section */}
            <div className="-mt-24 pb-16 relative">
            <div className="flex flex-col items-center justify-center space-y-4 max-w-7xl mx-auto">
                <div className="flex w-full">
                    {/* Image container */}
                    <div className="h-[455px] w-[600px] relative">
                        <Image
                            className=''
                            src="/AboutBanner.webp"
                            alt="Experience Image"
                            fill
                        />
                    </div>

                    {/* Progress bars container */}
                    <div className="flex flex-col w-[53%] items-center justify-center px-10 space-y-4 bg-indigo-950">
                        {data.map((item) => (
                            <div key={item.subject}
                                className="text-center text-white gap-8 justify-between w-full">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-lg font-medium whitespace-nowrap">{item.subject}</span>
                                    <span className="text-lg font-medium">{item.percentage}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className={`${item.color} h-2 rounded-full`}
                                        style={{ width: `${item.percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Experience;