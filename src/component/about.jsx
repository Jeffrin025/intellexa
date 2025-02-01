import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import one from "../assets/7.png"

import AboutCard from "./aboutuscard";
import EarthCanvas from "./canvas/Earth";

const data = [
  {
    id: 0,
    title: "Enlightenment",
    img: one,
    passage: "We are dedicated to providing platforms for knowledge sharing. Our events feature expert speakers, insightful panels, and interactive sessions that offer valuable industry insights, covering everything from emerging trends to advanced concepts.",
  },
  {
    id: 1,
    title: "Synergy",
    img: one,
    passage: "We understand the power of networking. Our events provide opportunities to meet like-minded individuals, exchange ideas, and form lasting professional relationships that can lead to collaborations and new ventures.",
  },
  {
    id: 2,
    title: "Skillcraft",
    img: one,
    passage: "We host specialized workshops and hands-on sessions focused on practical learning. Whether you're looking to upgrade your skills or explore new areas, our carefully curated workshops cater to diverse fields, ensuring growth and expertise.",
  },
  {
    id: 3,
    title: "Innovation",
    img: one,
    passage: "We are a space where innovation and creativity thrive. By bringing together thought leaders and visionaries, we inspire fresh ideas and solutions that challenge the status quo and drive progress in various industries.",
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
