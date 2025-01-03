import Projects from "./components/layout/Projects";
import Service from "./components/layout/Service";
import Slider from "./components/layout/Slider";
import Teams from "./components/layout/Team";

export default function page() {

  return (
    <>
      <Slider />
      <Service />
      <Teams />
      <Projects />
    </>
  );
}
