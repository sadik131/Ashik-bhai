
// Define the type for a single slider item
type SliderItem = {
  image: string;
  heading: string;
  description: string;
};

export interface CreateTestimonial {
  image: string;
  name: string;
  role: string;
  text: string;
  rating: number;
};

export interface TestimonialProp extends CreateTestimonial {
  _id: string
}

export interface CreateServiceData {
  imgSrc: string,
  title: string
  rating?: number,
  text: string
}

export interface ServiceData extends CreateServiceData {
  _id: string
}

// Define the props for the Slider component
export type SliderProps = {
  slider?: SliderItem[];
  perView: number;
  testimonial?: TestimonialProp[]
};

export interface ServiceProp {
  id: string;
  title: string;
  rating?: number;
  text: string;
  imgSrc: string
}

export interface UserData {
  id: string;
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

// export interface AnnouncementData {
//   id?: string
//   title: string
//   description: string
// }
