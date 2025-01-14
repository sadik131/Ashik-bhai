
// Define the type for a single slider item
type SliderItem = {
  image: string;
  heading: string;
  description: string;
};

// testimonial

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

// our service 
export interface ServiceData extends CreateServiceData {
  _id: string
}

export interface CreateServiceData {
  imgSrc: string,
  title: string
  rating?: number,
  text: string
}

// Define the props for the Slider component
export type SliderProps = {
  slider?: SliderItem[];
  perView: number;
  testimonial?: TestimonialProp[]
};

// use data
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


export interface CreateTeamMemberProp {
  img: string;
  name: string;
  role: string;
}

// Our team member
export interface TeamMemberProp extends CreateTeamMemberProp {
  id: string;
}