import { ChangeEvent, FormEvent } from "react"

export interface CourseProp {
  imgSrc: string
  title: string
  rating: number
  bookType: string
  price: number
  enrol?: boolean
  detail?: boolean
}

export interface Course {
  id: string;
  title: string;
  description: string;
  language: string;
  instructor?: string;
  instructorId: string;
  price: number;
  discount: number
  originalPrice: number
}

export interface ModalProp {
  title: string;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formData: UserData;
}


export interface InputProp {
  type: string;
  name: string;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  lable: string
}

export interface UserData {
  id:string;
  name: string;
  email: string;
  role: string;
  age?: number;
  gender?: string;
  location?: {
    city?: string;
    state?: string;
    country?: string;
    postcode?: string;
  };
  profileImage?: string;
}

export interface CreateCourse {
  title: string;
  description: string;
  language: string;
  instructor?: string;
  instructorId: string;
  price: number;
  discount: number;
  originalPrice: number;
}

export interface AnnouncementData {
  id?: string
  title: string
  description: string
}
