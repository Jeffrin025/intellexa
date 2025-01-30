import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const AboutCard = ({ data }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          className="rounded-full object-cover"
          src={data?.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
    >

      <div className="text-7xl sm:text-3xl md:text-5xl font-semibold text-white sm:text-xl font-bazingaItalic text-center tracking-wide">
        {data?.title}
      </div>

  
      <div className="text-2xl sm:text-base md:text-lg font-light text-[#FFFFFF] text-justify sm:text-base">
        {data?.passage}
      </div>
    </VerticalTimelineElement>
  );
};

export default AboutCard;
