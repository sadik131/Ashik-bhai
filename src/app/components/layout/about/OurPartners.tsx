"use client";

import React from "react";

const OurPartners = () => {
  return (
    <section className="our-partners py-16 bg-gray-100">
      <div className="container mx-auto text-center px-6">
        {/* Title and Description */}
        <h2 className="text-3xl lg:text-4xl text-blue-500 font-bold mb-4">Our Partners</h2>
        <p className="text-lg text-gray-600 mb-8">
          We are proud to collaborate with these amazing brands and companies.
        </p>

        {/* Marquee Section */}
        <div className="relative overflow-hidden">
          <div className="marquee flex items-center gap-16 animate-marquee">
            {/* Logos */}
            <img
              src="/brands/01.svg"
              alt="Partner 1"
              className="h-20 w-auto object-contain"
            />
            <img
              src="/brands/02.svg"
              alt="Partner 2"
              className="h-20 w-auto object-contain"
            />
            <img
              src="/brands/03.svg"
              alt="Partner 3"
              className="h-20 w-auto object-contain"
            />
            <img
              src="/brands/01.svg"
              alt="Partner 1"
              className="h-20 w-auto object-contain"
            />
            <img
              src="/brands/02.svg"
              alt="Partner 2"
              className="h-20 w-auto object-contain"
            />
            <img
              src="/brands/03.svg"
              alt="Partner 3"
              className="h-20 w-auto object-contain"
            />
            <img
              src="/brands/01.svg"
              alt="Partner 1"
              className="h-20 w-auto object-contain"
            />
            <img
              src="/brands/02.svg"
              alt="Partner 2"
              className="h-20 w-auto object-contain"
            />
            <img
              src="/brands/03.svg"
              alt="Partner 3"
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
