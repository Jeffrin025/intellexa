import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import one from "../assets/7.png"

import AboutCard from "./aboutuscard";
import EarthCanvas from "./canvas/Earth";

const data = [
  {
    id: 0,
    title: "Mission",
    img: one,
    passage: "Our mission is to foster a collaborative environment where students can explore and innovate in the field of technology. We strive to provide opportunities for hands-on learning, skill development, and professional growth.",
  },
  {
    id: 1,
    title: "Projects",
    img: one,
    passage: "Our club is proud to lead several innovative projects such as our annual coding bootcamp, a community-driven open-source software initiative, and partnerships with local tech firms for real-world problem-solving.",
  },
  {
    id: 2,
    title: "Opportunities",
    img: one,
    passage: "We offer numerous opportunities for members to get involved, from leading special projects and joining committees to participating in mentorship programs. Engaging with these opportunities not only helps you develop valuable skills but also enhances your networking and professional growth within the tech community.",
  },
  {
    id: 3,
    title: "Team",
    img: one,
    passage: "We are a team of passionate individuals committed to delivering innovative solutions. Our journey has been one of growth, learning, and collaboration, and we continue to strive towards making a positive impact in the tech world.",
  },
];


const About = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center relative z-10 mt-20">
      <div className="relative flex flex-col items-center justify-between w-full max-w-[1100px] gap-3 sm:flex-col">
      <div className="text-4xl font-semibold text-center mt-5 text-white sm:text-2xl sm:mt-3 md:text-8xl font-bazingaItalic tracking-wide">
      ABOUT US 
      </div>

        <VerticalTimeline>
          {data.map((item, index) => (
            <AboutCard key={`data-${index}`} data={item} />
          ))}
        </VerticalTimeline>
        <EarthCanvas />
      </div>
    </div>
  );
};

export default About;
