"use client";

import { useEffect, useState } from "react";
import AdminLayout from "../page";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { TeamMemberProp } from "@/app";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { createTeamMemberAsync, deleteTeamMemberAsync, fetchTeamMemberAsync, updateTeamMemberAsync } from "@/app/redux/member/memberSlice";



const TeamMember = () => {
  const dispatch = useDispatch<AppDispatch>()
  const teamMembers = useSelector((state: RootState) => state.member.members) as TeamMemberProp[]
console.log(teamMembers)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [img, setImg] = useState("")
  const [currentMember, setCurrentMember] = useState<TeamMemberProp>({
    id: "",
    img: "",
    name: "",
    role: "",
  });
  useEffect(() => {
    dispatch(fetchTeamMemberAsync())
  }, [dispatch])

  // input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setCurrentMember({ ...currentMember, [name]: value });
  };

  // handle open modle
  const handleOpenCreateModal = () => {
    setIsEditMode(false);
    setCurrentMember({ id: "", img: "", name: "", role: "" });
    setIsModalOpen(true);
  };

  // andle edit modle
  const handleOpenEditModal = (member: TeamMemberProp) => {
    setIsEditMode(true);
    console.log(member)
    setCurrentMember(member);
    setIsModalOpen(true);
  };

  // handle delete modle
  const handleDelete = (id: string) => {
    dispatch(deleteTeamMemberAsync({ id }))
  };

  // submit modle
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(currentMember, "team data")
    if (isEditMode) {
      // update state
      console.log(currentMember.id,":id")
      dispatch(updateTeamMemberAsync({ update: currentMember}))
    } else {
      // create a team member
      dispatch(createTeamMemberAsync(currentMember))
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
          {teamMembers && teamMembers.map((member) => (
            <tr key={member.id} className="border-b">
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
                  onClick={() => handleDelete(member.id)}
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
                <CldUploadWidget uploadPreset="gudsky" onSuccess={(result: any) => {
                  const imageUrl = result?.info?.secure_url;
                  setImg(imageUrl)
                  setCurrentMember((prev) => ({ ...prev, img: imageUrl }));
                }}>
                  {({ open }) => {
                    return (
                      <div onClick={() => open()} className='flex cursor-pointer items-center gap-2'>
                        <Image src={img ? img : "/user.png"} alt="image" height={100} width={100} />
                        <span>Add Photo</span>
                      </div>
                    );
                  }}
                </CldUploadWidget>
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
