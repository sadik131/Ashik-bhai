"use client";

import { useEffect, useState } from "react";
import AdminLayout from "../page";
import { TestimonialProp } from "@/app";
import { FaStar } from "react-icons/fa";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { createTestimonialsAsync, fetchTestimonialstAsync } from "@/app/redux/testimonial/testimonialSlice";

const Testimonial = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [testimonials, setTestimonials] = useState<TestimonialProp[]>([
        {
            _id: "1",
            image: "/01.png",
            name: "Nattasha Mith",
            role: "Senior Developer",
            text: "“One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager.”",
            rating: 5,
        },
        {
            _id: "2",
            image: "/02.png",
            name: "Mike Davis",
            rating: 5,
            role: "Senior Developer",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur corporis itaque error.",
        },
        {
            _id: "3",
            image: "/03.png",
            name: "Olivia Wilson",
            rating: 4,
            role: "Senior Developer",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur corporis itaque error.",
        },
    ]);
    const data = useSelector<RootState>(state=>state.testimonial.Testimonials)
    console.log("data:",data)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [hover, setHover] = useState(0);
    const [currentTestimonial, setCurrentTestimonial] = useState<TestimonialProp>({
        _id: "",
        name: "",
        image: "",
        rating: 0,
        role: "",
        text: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setCurrentTestimonial({
            ...currentTestimonial,
            [name]: value,
        });
    };

    const handleRatingChange = (ratingValue: number) => {
        setCurrentTestimonial((prev) => ({
            ...prev,
            rating: ratingValue,
        }));
    };

    const handleOpenCreateModal = () => {
        setIsEditMode(false);
        setCurrentTestimonial({
            _id: "",
            name: "",
            image: "",
            rating: 0,
            role: "",
            text: "",
        });
        setIsModalOpen(true);
    };

    // open modal
    const handleOpenEditModal = (testimonial: TestimonialProp) => {
        setIsEditMode(true);
        setCurrentTestimonial(testimonial);
        setIsModalOpen(true);
    };

    // handle submit form
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditMode) {
            setTestimonials((prev) =>
                prev.map((t) =>
                    t._id === currentTestimonial._id ? currentTestimonial : t
                )
            );
        } else {
            console.log(currentTestimonial)
            dispatch(createTestimonialsAsync(currentTestimonial))
            // setTestimonials((prev) => [
            //     ...prev,
            //     { ...currentTestimonial, _id: String(Date.now()) },
            // ]);
        }
        setIsModalOpen(false);
    };

    // handle delete
    const handleDelete = (id: string) => {
        setTestimonials((prev) => prev.filter((t) => t._id !== id));
    };

    useEffect(() => {
        dispatch(fetchTestimonialstAsync())
    }, []);

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-4">Testimonials</h1>
            <button
                onClick={handleOpenCreateModal}
                className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Create New Testimonial
            </button>
            <table className="min-w-full bg-white border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Message</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {testimonials.map((testimonial) => (
                        <tr key={testimonial._id} className="border-b">
                            <td className="px-4 py-2">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                            </td>
                            <td className="px-4 py-2">{testimonial.name}</td>
                            <td className="px-4 py-2">{testimonial.text}</td>
                            <td className="px-4 py-2">
                                <button
                                    onClick={() => handleOpenEditModal(testimonial)}
                                    className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(testimonial._id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">
                            {isEditMode ? "Edit Testimonial" : "Create Testimonial"}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block mb-1">Name</label>
                                <input
                                    name="name"
                                    value={currentTestimonial.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <CldUploadWidget uploadPreset="gudsky" onSuccess={(result: any) => {
                  const imageUrl = result?.info?.secure_url;
                  setCurrentTestimonial((prev) => ({ ...prev, image: imageUrl }));
                }}>
                  {({ open }) => {
                    return (
                      <div onClick={() => open()} className='flex cursor-pointer items-center gap-2'>
                        <Image src="/user.png" alt="image" height={100} width={100} />
                        <span>Add Photo</span>
                      </div>
                    );
                  }}
                </CldUploadWidget>
                            <div className="mb-4">
                                <label className="block mb-1">Role</label>
                                <input
                                    name="role"
                                    value={currentTestimonial.role}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Message</label>
                                <textarea
                                    name="text"
                                    value={currentTestimonial.text}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <label key={index}>
                                            <input
                                                type="radio"
                                                name="rating"
                                                value={ratingValue}
                                                className="hidden"
                                                onChange={() =>
                                                    handleRatingChange(ratingValue)
                                                }
                                            />
                                            <FaStar
                                                className={`cursor-pointer transition-colors duration-200 ${
                                                    ratingValue <=
                                                    (hover || currentTestimonial.rating)
                                                        ? "text-yellow-500"
                                                        : "text-gray-400"
                                                }`}
                                                size={40}
                                                onMouseEnter={() =>
                                                    setHover(ratingValue)
                                                }
                                                onMouseLeave={() => setHover(0)}
                                            />
                                        </label>
                                    );
                                })}
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="mr-4 bg-gray-300 text-gray-800 px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    {isEditMode ? "Update" : "Create"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};

export default Testimonial;
