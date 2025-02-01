"use client";
import Rating from '@/app/components/layout/rating/Rating';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { FaFacebookF, FaTimes, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaDollarSign, FaCalendarAlt, FaLayerGroup, FaClock, FaBook, FaCheckCircle } from 'react-icons/fa';

function Page() {
    const { id } = useParams();

    return (
        <div className="bg-gray-50 p-8">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Content Section */}
                <div className="relative w-full lg:w-3/4 flex flex-col gap-4">
                    <div className="px-4 py-2">
                        {/* name */}
                        <h1 className="text-2xl font-bold mb-4">
                            IK Gujral Punjab Technical University
                        </h1>
                        {/* author name */}
                        <div className='flex'>
                            <p className="pr-4 border-r border-r-gray-800">By Keny</p>
                            <p className="px-4"> WhiteIn-Person workshop, Edinburgh</p>
                        </div>
                    </div>
                    {/* Course Image */}
                    <div className="relative w-full h-64 lg:h-[400px] rounded-lg shadow-md overflow-hidden">
                        <Image
                            src="/course-offline-01.webp"
                            fill
                            alt="Course Image"
                            className="object-cover"
                        />
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The Computer Science and Engineering (CSE) program is a dynamic and evolving discipline that blends theoretical knowledge and practical skills to solve real-world technological challenges. It forms the backbone of modern innovation, empowering students to design, develop, and maintain cutting-edge software and hardware systems.

                            This course equips students with a deep understanding of algorithms, programming languages, database management, and emerging technologies such as artificial intelligence, machine learning, and cloud computing. With a strong emphasis on analytical thinking, problem-solving, and innovation, students gain the expertise required to thrive in a rapidly advancing digital world.

                            Through a balanced curriculum that includes rigorous theoretical classes, hands-on lab sessions, and collaborative projects, the CSE program nurtures future engineers and leaders capable of shaping the next generation of technology. Whether aspiring to become software developers, data scientists, AI specialists, or entrepreneurs, students will be well-prepared for a wide array of career opportunities across industries.

                            This course not only hones technical skills but also encourages creativity, teamwork, and critical thinking — essential traits in an era where technology drives global progress
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Master Adobe Photoshop CC 2024 without any previous knowledge. Learn the newest AI tricks to get fast results like a
                            pro.
                        </p>
                    </div>

                    {/* What You'll Learn Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                        <ul className="space-y-3">
                            {[
                                'Automate tasks on their computer by writing simple Python programs.',
                                'Programmatically generate and update Excel spreadsheets.',
                                'Crawl web sites and pull information from online sources.',
                                'Use Python’s debugging tools to quickly figure out bugs in your code.',
                                'Write programs that can do text pattern recognition with "regular expressions"',
                                'Parse PDFs and Word documents.',
                                'Write programs that send out email notifications.',
                                'Programmatically control the mouse and keyboard to click and type for you.',
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-green-500 mt-1" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8">
                        <h2 className="text-2xl font-bold mb-4">Instructor</h2>
                        <div className="flex gap-6 items-center">
                            {/* Instructor Image */}
                            <div className="w-32 h-32 relative rounded-full overflow-hidden shadow-lg">
                                <Image
                                    src="/user.webp"
                                    alt="Instructor Keny White"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Instructor Details */}
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold">Keny White</h3>
                                <div className="flex gap-4 text-gray-600 text-sm my-2">
                                    <span>840 Students</span>
                                    <span className="border-l border-gray-300 px-2">20 Courses</span>
                                </div>
                                <p className="text-gray-700">Web Designer & Best-Selling Instructor</p>
                                <div className="flex gap-4 mt-4">
                                    <a
                                        href="#"
                                        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                                        aria-label="Facebook"
                                    >
                                        <FaFacebookF />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-gray-400 text-white p-2 rounded-full hover:bg-gray-500"
                                        aria-label="Times"
                                    >
                                        <FaTimes />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
                                        aria-label="YouTube"
                                    >
                                        <FaYoutube />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800"
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                            </div>


                        </div>
                        {/* rating section */}
                        <Rating />
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="bg-white p-6 w-full lg:w-1/4 h-fit border rounded-md shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Course Details</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 font-medium flex items-center gap-2">
                                <FaDollarSign className="text-orange-500" />
                                Price
                            </span>
                            <span className="text-red-500 font-semibold">$100.00 pw</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 font-medium flex items-center gap-2">
                                <FaLayerGroup className="text-blue-500" />
                                Delivery Type
                            </span>
                            <span>Private 1-1</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 font-medium flex items-center gap-2">
                                <FaLayerGroup className="text-green-500" />
                                Capacity
                            </span>
                            <span>Unlimited</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 font-medium flex items-center gap-2">
                                <FaCalendarAlt className="text-yellow-500" />
                                Level
                            </span>
                            <span>All Levels</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 font-medium flex items-center gap-2">
                                <FaClock className="text-purple-500" />
                                Duration
                            </span>
                            <span>10 Weeks</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 font-medium flex items-center gap-2">
                                <FaBook className="text-pink-500" />
                                Lessons
                            </span>
                            <span>20</span>
                        </div>
                    </div>

                    <button className="mt-6 w-full bg-yellow-500 text-white font-semibold py-3 rounded-md hover:bg-yellow-600">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Page;
