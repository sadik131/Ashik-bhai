import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-full md:w-1/4 bg-white shadow-md p-4">
      <div className="text-center">
        <img
          src="/ai.jpg"
          alt="Deep Learning"
          className="rounded-lg mb-4"
        />
        <h3 className="font-bold text-lg">Internship on Deep Learning (30 Days)</h3>
        <div className="mt-4">
          <p className="text-sm">100% COMPLETE</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div className="bg-red-500 h-2.5 rounded-full w-full"></div>
          </div>
        </div>
      </div>

      <nav className="mt-8">
        <ul>
          <li className="py-2 hover:text-red-500 cursor-pointer">Course Curriculum</li>
          <li className="py-2 hover:text-red-500 cursor-pointer">Your Instructor</li>
          <li className="py-2 hover:text-red-500 cursor-pointer">Certificate</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
