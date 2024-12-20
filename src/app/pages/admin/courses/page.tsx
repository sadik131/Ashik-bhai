"use client";

import { useEffect, useState } from 'react';
import AdminLayout from '../page';
import { Course } from '@/app';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/redux/store';
import { createCourseAsync, fetchCourseByIdAsync, fetchCoursetAsync } from '@/app/redux/course/courseSlice';



const Courses = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [courses, setCourses] = useState<Course[]>([
        {
            id: "d6f48e57-3e02-4f3a-8c78-2a3745db1a36",
            title: "Introduction to TypeScript",
            description: "Learn the basics of TypeScript, a typed superset of JavaScript.",
            language: "English",
            instructor: "John Doe", // Example instructor name or this could be a User object if you're linking models
            instructorId: "a12345b6-c7d8-9e10-11g1-1234h5678ijk",
            price: 49.99,
            discount: 10.0, // 10% discount
            originalPrice: 55.55,
           
        },
        {
            id: "d6f48e57-3e02-4f3a-8c78-2a3745db1a36",
            title: "Introduction to TypeScript",
            description: "Learn the basics of TypeScript, a typed superset of JavaScript.",
            language: "English",
            instructor: "John Doe", // Example instructor name or this could be a User object if you're linking models
            instructorId: "a12345b6-c7d8-9e10-11g1-1234h5678ijk",
            price: 49.99,
            discount: 10.0, // 10% discount
            originalPrice: 55.55,
            
        },
        {
            id: "d6f48e57-3e02-4f3a-8c78-2a3745db1a36",
            title: "Introduction to TypeScript",
            description: "Learn the basics of TypeScript, a typed superset of JavaScript.",
            language: "English",
            instructor: "John Doe", // Example instructor name or this could be a User object if you're linking models
            instructorId: "a12345b6-c7d8-9e10-11g1-1234h5678ijk",
            price: 49.99,
            discount: 10.0, // 10% discount
            originalPrice: 55.55,
            
        },
        
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentCourse, setCurrentCourse] = useState<Course>({
        id: '',
        title: '',
        description: '',
        language: '',
        instructor: '', 
        instructorId: '',
        price: 0,
        discount: 0,
        originalPrice: 0,
    });
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCurrentCourse({
            ...currentCourse,
            [name]: name === 'price' || name === 'discount' || name === 'originalPrice' ? parseFloat(value) : value,
        });
    };

    const handleOpenCreateModal = () => {
        setIsEditMode(false);
        setCurrentCourse({
            id: '',
            title: '',
            description: '',
            language: '',
            instructor: '',
            instructorId: '',
            price: 0,
            discount: 0,
            originalPrice: 0
        });
        setIsModalOpen(true);
    };

    const handleOpenEditModal = (course: Course) => {
        setIsEditMode(true);
        setCurrentCourse(course);
        setIsModalOpen(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditMode) {
            setCourses(courses.map(c => (c.id === currentCourse.id ? currentCourse : c)));
        } else {
           dispatch(createCourseAsync(currentCourse))
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id: string) => {
        setCourses(courses.filter(course => course.id !== id));
    };

    useEffect(()=>{
        dispatch(fetchCoursetAsync())
    },[])

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-4">Courses</h1>
            <button onClick={handleOpenCreateModal} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">
                Create New Course
            </button>
            <table className="min-w-full bg-white border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Instructor</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id} className="border-b">
                            <td className="px-4 py-2">{course.id}</td>
                            <td className="px-4 py-2">{course.title}</td>
                            <td className="px-4 py-2">{course.instructor}</td>
                            <td className="px-4 py-2">{course.price}</td>
                            <td className="px-4 py-2">
                                <button onClick={() => handleOpenEditModal(course)} className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded">
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(course.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal for creating/editing a course */}
            {isModalOpen && (
                <div className="fixed pt-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto">
                    <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md mx-4 my-8">
                        <h2 className="text-xl font-bold mb-4">
                            {isEditMode ? 'Edit Course' : 'Create New Course'}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block mb-1">Title</label>
                                <input name="title" value={currentCourse.title} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Description</label>
                                <textarea name="description" value={currentCourse.description} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Language</label>
                                <input name="language" value={currentCourse.language} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Instructor</label>
                                <input name="instructor" value={currentCourse.instructor} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Price</label>
                                <input name="price" type="number" value={currentCourse.price} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Discount</label>
                                <input name="discount" type="number" value={currentCourse.discount || ''} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
                            </div>
                            <div className="flex justify-end">
                                <button onClick={() => setIsModalOpen(false)} className="mr-4 bg-gray-300 text-gray-800 px-4 py-2 rounded">Cancel</button>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                    {isEditMode ? 'Update' : 'Create'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </AdminLayout>
    );
};

export default Courses;
