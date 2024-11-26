import AboutUs from "../components/home/AboutUs";
import Hero from "../components/home/Hero";
import OurCourses from "../components/home/OurCourses";
import OurService from "../components/home/OurService";
import OurTeam from "../components/home/OurTeam";
import ProjectLifeCycle from "../components/home/ProjectLifeCycle";
import WhyChooseUs from "../components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
        <Hero />
        <OurService />
        {/* <AllCourses /> */}
        <AboutUs />
        <OurCourses />
        <OurTeam />
        <WhyChooseUs />
        {/* <ClientsAreSaying /> */}
        <ProjectLifeCycle />
    </>
  );
}
