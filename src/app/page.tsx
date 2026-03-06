import Image from "next/image";
import Hero from "@/components/customComponents/landingPage/Hero";
import About from "@/components/customComponents/landingPage/About";
import CoreFeature from "@/components/customComponents/landingPage/CoreFeature";
import PopularTopic from "@/components/customComponents/landingPage/PopularTopic";
import BlogSection from "@/components/customComponents/landingPage/Blog";
import Testimonials from "@/components/customComponents/landingPage/Testimonials";
import Subscribe from "@/components/customComponents/landingPage/SubscribeNewsLatter";
import CoursesComponent from "@/components/customComponents/landingPage/Courses";
import FactsAndFigure from "@/components/customComponents/landingPage/FactAndFigure";
import SupportContact from "@/components/customComponents/landingPage/SupportContact";

import Navbar from "@/components/customComponents/Navbar/Navbar";

import CallToAction from "@/components/customComponents/CallToAction/CallToAction";
// import { courseInfo } from "../../data/ExampleCard2/ExampleCard2";
import { courseInfo } from "../../data/courses/courses";
import QueryForm from "@/components/customComponents/coursesComponents/courseDetails/ContactAndSupport";

import DiscordCommunity from "@/components/customComponents/landingPage/Discord/DiscordCommunity";
export default function Home() {
  return (
<>
<Navbar />
<Hero></Hero>
<About></About>

<FactsAndFigure></FactsAndFigure>
<CoreFeature></CoreFeature>
<CoursesComponent  />
<Subscribe></Subscribe>
<PopularTopic></PopularTopic>
<Testimonials></Testimonials> 
{/* <BlogSection></BlogSection> */}
<DiscordCommunity></DiscordCommunity>
<QueryForm />
<SupportContact></SupportContact>
<CallToAction></CallToAction>
</>
  );
}
