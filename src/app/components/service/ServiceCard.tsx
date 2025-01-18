"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ServiceData } from '@/app';

function ServiceCard({ id, imgSrc, title, rating, text }: ServiceData) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* <div
        className="max-w-sm rounded overflow-hidden shadow-2xl bg-white cursor-pointer"
        onClick={openModal}
      >
        <div className="relative h-60 w-full">
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
            {Array(rating)
              .fill('')
              .map((_, i) => (
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

          <p className="text-gray-700 text-base mb-2">{text}</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md shadow-md w-1/2 max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="relative h-60 w-full mb-4">
              <Image
                className="rounded-lg"
                objectFit="cover"
                fill
                src={imgSrc}
                alt={title}
              />
            </div>
            <div className="flex items-center mb-2">
              {Array(rating)
                .fill('')
                .map((_, i) => (
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
            <p className="text-gray-700 text-base mb-4">{text}</p>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )} */}
      <div className="w-72 bg-white border rounded-lg shadow-lg overflow-hidden">
      {/* Banner Section */}
      <div className="relative">
        <img
          src={"/service1.webp"}
          alt="Course Banner"
          className="w-full h-36 object-cover"
        />
        {/* User Avatar */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <img
            src={"/user.webp"}
            alt="User Avatar"
            className="w-16 h-16 rounded-full border-4 border-white"
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 pt-8 text-center">
        {/* User Name */}
        <h4 className="text-sm font-medium text-gray-700">Keny White</h4>
        {/* Course Title */}
        <h3 className="text-lg font-semibold text-gray-800 mt-1">
          How To Sell In-Person Course With LearnPress
        </h3>
        {/* Icons and Price Section */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-4 text-gray-500 text-sm">
            {/* Icons Section */}
            <div className="flex items-center">
              <span className="material-icons">person</span> {/* Example Icon */}
              <span className="ml-1">10</span>
            </div>
            <div className="flex items-center">
              <span className="material-icons">comment</span> {/* Example Icon */}
              <span className="ml-1">0</span>
            </div>
          </div>
          {/* Price Section */}
          <div className="text-right">
            <p className="text-red-500 font-semibold">$80.00</p>
            <p className="text-xs text-gray-500">incl. tax</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ServiceCard;
