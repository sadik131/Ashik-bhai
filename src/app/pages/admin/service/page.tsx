"use client";

import React, { useEffect, useState } from "react";
import AdminLayout from "../page";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import Loading from "@/app/components/loading";
import { ServiceData } from "@/app";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { createServicesAsync, deleteServicesAsync, fetchServicestAsync, updateServicesAsync } from "@/app/redux/service/servicesSlice";

const Services = () => {
    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector<RootState>((state) => state.services.Services) as ServiceData[]
    const status = useSelector<RootState>((state) => state.services.status) 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentService, setCurrentService] = useState<ServiceData>({
        id: "",
        imgSrc: "",
        title: "",
        rating: 0,
        text: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCurrentService({
            ...currentService,
            [e.target.name]: e.target.value,
        });
    };

    const handleOpenCreateModal = () => {
        setIsEditMode(false);
        setCurrentService({ id: "", imgSrc: "", title: "", rating: 0, text: "" });
        setIsModalOpen(true);
    };

    const handleOpenEditModal = (service: ServiceData) => {
        setIsEditMode(true);
        console.log(service)
        setCurrentService({
            id: service.id ?? "",
            imgSrc: service.imgSrc,
            title: service.title,
            rating: service.rating,
            text: service.text,
        });
        setIsModalOpen(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditMode) {
            dispatch(updateServicesAsync({ update: currentService }));
        } else {
            dispatch(createServicesAsync(currentService));
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id: string) => {
        dispatch(deleteServicesAsync({ id }));
    };
    
    // fetch all data
    useEffect(()=>{
        dispatch(fetchServicestAsync())
    },[dispatch])

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-4">Services</h1>
            <button onClick={handleOpenCreateModal} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">
                Add New Service
            </button>
            {status === "loading" ? (
                <Loading
                    spin="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                    section="flex items-center justify-center min-h-screen"
                />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((service) => (
                        <div key={service.id} className="bg-white shadow-md rounded-md overflow-hidden">
                            <div className="relative h-48 w-full">
                                <Image src={service.imgSrc} alt={service.title} fill className="object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold">{service.title}</h3>
                                <div className="flex items-center my-2">
                                    {/* {"★".repeat(service.rating).padEnd(5, "☆")} */}
                                </div>
                                <p className="text-gray-600">{service.text}</p>
                                <div className="mt-4 flex justify-between">
                                    <button
                                        onClick={() => handleOpenEditModal(service)}
                                        className="bg-yellow-500 text-white px-2 py-1 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(service.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="w-1/2 bg-white p-8 rounded-md shadow-md">
                        <h2 className="text-xl font-bold mb-4">{isEditMode ? "Edit Service" : "Create New Service"}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block mb-1">Title</label>
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    value={currentService.title}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <CldUploadWidget uploadPreset="gudsky" onSuccess={(result: any) => {
                                    const imageUrl = result?.info?.secure_url;
                                    console.log(imageUrl, "url")
                                    setCurrentService((prev) => ({ ...prev, imgSrc: imageUrl }));
                                }}>
                                    {({ open }) => {
                                        return (
                                            <div onClick={() => open()} className='flex cursor-pointer items-center gap-2'>
                                                <Image src={currentService ? currentService.imgSrc : "/user.png"} alt="image" height={100} width={100} />
                                                <span>Add Photo</span>
                                            </div>
                                        );
                                    }}
                                </CldUploadWidget>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="rating" className="block mb-1">Rating</label>
                                <input
                                    id="rating"
                                    name="rating"
                                    type="number"
                                    value={currentService.rating}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded"
                                    min="0"
                                    max="5"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="text" className="block mb-1">Description</label>
                                <textarea
                                    id="text"
                                    name="text"
                                    value={currentService.text}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded"
                                    rows={4}
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="mr-4 bg-gray-300 text-gray-800 px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
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

export default Services;
