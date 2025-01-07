import OurPartners from "./components/layout/about/OurPartners";
import Projects from "./components/layout/Projects";
import Service from "./components/layout/Service";
import Slider from "./components/layout/Slider";
import SubscriptionSection from "./components/layout/Subscrib";
import Teams from "./components/layout/Team";
import TestimonialSection from "./components/layout/Testimonials";

export default function page() {

  return (
    <>
      <Slider />
      <Service />
      <Teams />
      <Projects />
      <TestimonialSection />
      <OurPartners />
      <SubscriptionSection />
    </>
  );
}
