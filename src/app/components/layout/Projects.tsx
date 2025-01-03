"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function Projects() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Observe if the section is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const AnimatedNumber = ({ targetNumber }: { targetNumber: number }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let start = 0;
      const duration = 2000; // Animation duration in ms
      const stepTime = Math.abs(Math.floor(duration / targetNumber));
      const interval = setInterval(() => {
        start += 1;
        setCurrentNumber((prev) => (prev < targetNumber ? start : targetNumber));
        if (start >= targetNumber) {
          clearInterval(interval);
        }
      }, stepTime);

      return () => clearInterval(interval);
    }, [isInView, targetNumber]);

    return <h1 className="text-4xl">{currentNumber}</h1>;
  };

  return (
    <div ref={sectionRef} className="relative w-full h-[520px] lg:h-96 py-20">
      {/* Background Image */}
      <Image
        src="/image_3.jpg.webp"
        fill
        alt="banner"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        {/* Centered Content */}
        <div className="w-full gap-10 lg:px-20 flex lg:flex-row flex-col items-center text-center text-white justify-between">
          {/* 1st */}
          <div>
            <AnimatedNumber targetNumber={52} />
            <h3 className="uppercase text-2xl">Projects</h3>
          </div>
          {/* 2nd */}
          <div>
            <AnimatedNumber targetNumber={100} />
            <h3 className="uppercase text-2xl">Reviews</h3>
          </div>
          {/* 3rd */}
          <div>
            <AnimatedNumber targetNumber={52} />
            <h3 className="uppercase text-2xl">Clients</h3>
          </div>
          {/* 4th */}
          <div>
            <AnimatedNumber targetNumber={52} />
            <h3 className="uppercase text-2xl">Ideas</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
