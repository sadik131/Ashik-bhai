"use client";

import { useState } from "react";
import AdminLayout from "../page";

interface TeamMemberProp {
  _id: string;
  img: string;
  name: string;
  role: string;
}

const TeamMember = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMemberProp[]>([
    { _id: "1", img: "/shimu.jpg", name: "Brent Grundy", role: "Founder" },
    { _id: "2", img: "/shimu.jpg", name: "Alice Johnson", role: "Member" },
    { _id: "3", img: "/shimu.jpg", name: "Michael Lee", role: "Member" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentMember, setCurrentMember] = useState<TeamMemberProp>({
    _id: "",
    img: "",
    name: "",
    role: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setCurrentMember({ ...currentMember, [name]: value });
  };

  const handleOpenCreateModal = () => {
    setIsEditMode(false);
    setCurrentMember({ _id: "", img: "", name: "", role: "" });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (member: TeamMemberProp) => {
    setIsEditMode(true);
    setCurrentMember(member);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setTeamMembers((prev) => prev.filter((member) => member._id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditMode) {
      setTeamMembers((prev) =>
        prev.map((member) =>
          member._id === currentMember._id ? currentMember : member
        )
      );
    } else {
      setTeamMembers((prev) => [
        ...prev,
        { ...currentMember, _id: String(Date.now()) },
      ]);
    }
    setIsModalOpen(false);
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-4">Team Members</h1>
      <button
        onClick={handleOpenCreateModal}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create New Member
      </button>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((member) => (
            <tr key={member._id} className="border-b">
              <td className="px-4 py-2">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </td>
              <td className="px-4 py-2">{member.name}</td>
              <td className="px-4 py-2">{member.role}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleOpenEditModal(member)}
                  className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(member._id)}
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
              {isEditMode ? "Edit Team Member" : "Create Team Member"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                  name="name"
                  value={currentMember.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Image URL</label>
                <input
                  name="img"
                  value={currentMember.img}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Role</label>
                <input
                  name="role"
                  value={currentMember.role}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
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

export default TeamMember;
