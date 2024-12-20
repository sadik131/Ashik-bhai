import React from "react";

const CourseCurriculum = () => {
  return (
    <section className="w-full md:w-3/4 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Course Curriculum</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          Start next lesson
        </button>
      </header>

      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-lg font-bold mb-4">Day-1 | Introduction to Data Science & Studies</h2>
        <ul>
          <li className="flex items-center justify-between border-b py-3">
            <span className="flex items-center gap-2">
              <input type="checkbox" checked readOnly className="accent-red-500" />
              Concept of Data Science <span className="text-sm text-gray-500">(52:42)</span>
            </span>
          </li>
          <li className="flex items-center justify-between border-b py-3">
            <span className="flex items-center gap-2">
              <input type="checkbox" checked readOnly className="accent-red-500" />
              Attachments
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-md mt-6">
        <h2 className="text-lg font-bold mb-4">Day-2 | Computer Vision</h2>
        <ul>
          <li className="flex items-center justify-between border-b py-3">
            <span className="flex items-center gap-2">
              <input type="checkbox" checked readOnly className="accent-red-500" />
              Basics of Computer Vision <span className="text-sm text-gray-500">(49:31)</span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CourseCurriculum;
