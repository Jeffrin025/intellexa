import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import one from '../../assets/icon.png'

import AboutCard from "../../component/aboutuscard";
import EarthCanvas from "../../component/canvas/Earth";

const data = [
  {
    id: 0,
    title: "TITLE 1",
    img: one,
    passage: "We are a team of passionate individuals committed to delivering innovative solutions. Our journey has been one of growth, learning, and collaboration, and we continue to strive towards making a positive impact in the tech world.",
  },
  {
    id: 1,
    title: "TITLE 2",
    img: one,
    passage: "We are a team of passionate individuals committed to delivering innovative solutions. Our journey has been one of growth, learning, and collaboration, and we continue to strive towards making a positive impact in the tech world.",
  },
  {
    id: 2,
    title: "TITLE 3",
    img: one,
    passage: "We are a team of passionate individuals committed to delivering innovative solutions. Our journey has been one of growth, learning, and collaboration, and we continue to strive towards making a positive impact in the tech world.",
  },
  {
    id: 3,
    title: "TITLE 4",
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
