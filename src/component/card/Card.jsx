import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BG from "../bg/bg";
import "./Card.css";
import tick from '../../assets/tick.png';
import cross from '../../assets/cross.png';
import amongus from "../../assets/cha.png"; 
import tower from '../../assets/signal.png';
import battery from '../../assets/batter.png';
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import four from '../../assets/4.png'
import five from '../../assets/5.png'
import six from '../../assets/6.png'
import seven from '../../assets/7.png'
import eight from '../../assets/8.png'
import nine from '../../assets/9.png'


const eventDetails = [
  { image: one, title: "Event 1" },
  { image: two, title: "Event 2" },
  { image: three, title: "Event 3" },
  { image: four, title: "Event 4" },
  { image: five, title: "Event 5" },
  { image: six, title: "Event 6" },
  { image: seven, title: "Event 7" },
  { image: eight, title: "Event 8" },
  { image: nine, title: "Event 9" },
];

const Card = () => {
  const [hoveredCard, setHoveredCard] = useState(null); 
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(route); 
  };

  const handleCrossClick = () => {
    navigate("/#event"); 
  };

  return (
    <>
      <BG />
      <section id="event">
        <div className="book-content">
          <h2 className="topic">Technical Events</h2>
          <div className="vote-bg">
            <p></p>
            <div className="phone-front">
              <p></p>
              <div className="button">.</div>
              <div className="phone-screen">
                <img src={tower} alt="Phone signal tower" className="signal" />
                <img src={battery} alt="Phone Battery" className="ph-top" />
                <h1 className="word">Who Is The Imposter?</h1>
                <h4 className="vote">Voting Begins In : 5s</h4>
                <div className="card flex">
                  {eventDetails.map((event, index) => {
                    const cardClass = `cards white 0${index + 1}`;
                    const route = `/${index + 1}`; 
                    return (
                      <div
                        key={index}
                        className={cardClass}
                        onMouseEnter={() => setHoveredCard(index + 1)}
                        onMouseLeave={() => setHoveredCard(null)} 
                      >
                        <img 
                          src={event.image} 
                          alt={`Event ${index + 1}`} 
                          style={{ height: "48px", marginTop: '15px'}} 
                          className="ca"
                        />
                        <h3 className="title">{event.title}</h3>
                        
                        {hoveredCard === index + 1 && (
                          <div className="hover-images" >
                            <img
                              src={tick}
                              alt="Tick Mark"
                              className="tick-mark"
                              onClick={() => handleCardClick(route)} 
                            />
                            <img
                              src={cross}
                              alt="Cross Mark"
                              className="cross-mark"
                              onClick={handleCrossClick} 
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
