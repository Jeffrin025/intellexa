import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BG from './component/bg/bg';
import './details.css';
import exit from './assets/exit.png';
import crew from './assets/crew1.png';

import reg from './assets/reg.png';

const eventData = [
  {
    id: '1',
    title: 'Event 1 Title',
    description: [
      "The event will focus on the latest technological advancements, offering participants a unique",
      "Attendees will have access to exclusive workshops and seminars designed to deepen their",
      "Networking opportunities will be abundant, allowing participants to connect with professionals",
      "The event will feature exciting competitions and challenges that will test the"
    ],
    time: "12.00 PM",
    location: "INDOOR AUDITORIUM",
    venue: "RAJALAKSHMI ENGINEERING COLLEGE",
  },
  {
    id: '2',
    title: 'Event 2 Title',
    description: [
      "Event 2 will introduce new innovations in AI and machine learning.",
      "Participants can expect hands-on demonstrations and real-world applications.",
      "Experts in the field will be present to share insights and research findings.",
      "Collaborative problem-solving sessions will encourage creativity and teamwork."
    ],
    time: "1.30 PM",
    location: "OUTDOOR STADIUM",
    venue: "XYZ UNIVERSITY",
  },
  {
    id: '3',
    title: 'Event 3 Title',
    description: [
      "Event 3 will introduce new innovations in AI and machine learning.",
      "Participants can expect hands-on demonstrations and real-world applications.",
      "Experts in the field will be present to share insights and research findings.",
      "Collaborative problem-solving sessions will encourage creativity and teamwork."
    ],
    time: "1.30 PM",
    location: "OUTDOOR STADIUM",
    venue: "XYZ UNIVERSITY",
  },
  ////so on 
];

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  
  const event = eventData.find(event => event.id === id);
  
 
  if (!event) {
    navigate("/#event");
    return null;
  }

  const handleCrossClick = () => {
    navigate("/#event");
  };

  return (
    <>
      <BG />
      <div className="b-content">
        <img
          src={exit}
          alt="exit"
          className="exit"
          onClick={handleCrossClick} 
        />
        <h1 className='head'>{event.title}</h1>
        <img src={crew} className='crew'/>
        <h1 className='attention'> Attention Crewmates!</h1>

        <div className="button-container">
          <button className="transparent-button1">{event.location}</button>
          <button className="transparent-button2">{event.time}</button> 
        </div>
        <button className="transparent-button3">{event.venue}</button>

        <div className="event-details">
          <h1 className='box-title'>EVENT DETAILS</h1>
          <ul className="custom-list" style={{fontSize: '1.1rem', marginLeft: '320px', textAlign: 'initial', marginTop: '-20px'}}>
            {event.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
          <img src={reg} className='regs-btn'/>
          <h3 className='key'> CLICK TO REGISTER ==&gt;&gt; </h3>
          <div className='event'>
            <div>
              {/* <img src={kill} className='kill' /> */}
              <h1>event poster </h1>
            </div>
          </div>
          <h2 className='regs-now'>REGISTER NOW!</h2>
        </div>
      </div>
    </>
  );
};

export default Details;
