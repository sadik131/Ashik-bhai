import CourseCurriculum from "@/app/components/video/CourseCurriculum";
import Sidebar from "@/app/components/video/sidebar";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-1 flex-col md:flex-row">
        <Sidebar />
        <CourseCurriculum />
      </main>
    </div>
  );
};

export default page;
