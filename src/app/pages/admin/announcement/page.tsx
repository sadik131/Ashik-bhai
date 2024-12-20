"use client"

import React, { useState } from 'react';
import AdminLayout from '../page';
import { AnnouncementData } from '@/app';
import { createAnnouncementAsync, deleteAnnouncementAsync, updateAnnouncementAsyncAsync } from '@/app/redux/announcement/announcementSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import Loading from '@/app/components/loading';

const Announcements = () => {
    const dispatch = useDispatch<AppDispatch>()
    const data = useSelector<RootState, AnnouncementData[]>(state => state.announcement.announcements)
    const status = useSelector<RootState>(state => state.announcement.status)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentAnnouncement, setCurrentAnnouncement] = useState({ id: "", title: '', description: '' });

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCurrentAnnouncement({
            ...currentAnnouncement,
            [e.target.name]: e.target.value,
        });
    };

    // 

    // Open modal for creating a new announcement
    const handleOpenCreateModal = () => {
        setIsEditMode(false);
        setCurrentAnnouncement({ id: "", title: '', description: '' });
        setIsModalOpen(true);
    };

    // Open modal for editing an existing announcement
    const handleOpenEditModal = (announcement: AnnouncementData) => {
        setIsEditMode(true);
        setCurrentAnnouncement({
            id: announcement.id ?? "",
            title: announcement.title,
            description: announcement.description,
        });
        setIsModalOpen(true);
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditMode) {
            // Update existing announcement
            dispatch(updateAnnouncementAsyncAsync({ update: currentAnnouncement, id: currentAnnouncement.id }))
        } else {
            // Add new announcement
            dispatch(createAnnouncementAsync(currentAnnouncement))
        }
        setIsModalOpen(false);
    };

    // Delete an announcement
    const handleDelete = (id: string) => {
        dispatch(deleteAnnouncementAsync({ id }))
    };

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-4">Announcements</h1>
            <button onClick={handleOpenCreateModal} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">
                Create New Announcement
            </button>
            {status === "loading" ? <Loading
      spin="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
      section="flex items-center justify-center min-h-screen"
      />:
            <table className="min-w-full bg-white border">
                <thead>
                    <tr className="w-full bg-gray-200">
                        <th className="px-4 py-2 text-left">ID</th>
                        <th className="px-4 py-2 text-left">Title</th>
                        <th className="px-4 py-2 text-left">Description</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((announcement) => (
                        <tr key={announcement.id} className="border-b">
                            <td className="px-4 py-2">{announcement.id}</td>
                            <td className="px-4 py-2">{announcement.title}</td>
                            <td className="px-4 py-2">{announcement.description}</td>
                            <td className="px-4 py-2">
                                <button onClick={() => handleOpenEditModal(announcement)} className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded">
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(announcement.id!)} className="bg-red-500 text-white px-2 py-1 rounded">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
}
            {/* Modal for creating/editing an announcement */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-md shadow-md">
                        <h2 className="text-xl font-bold mb-4">
                            {isEditMode ? 'Edit Announcement' : 'Create New Announcement'}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block mb-1">Title</label>
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    value={currentAnnouncement.title}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block mb-1">Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={currentAnnouncement.description} // Ensure the value is controlled
                                    onChange={handleChange} // Corrected the onChange function
                                    className="w-full px-3 py-2 border rounded"
                                    rows={4}
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button onClick={() => setIsModalOpen(false)} className="mr-4 bg-gray-300 text-gray-800 px-4 py-2 rounded">
                                    Cancel
                                </button>
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

export default Announcements;
