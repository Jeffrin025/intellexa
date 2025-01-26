import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BG from "../bg/bg";
import "./Card.css";
import amongus from "../../assets/cha.png"; 


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
          <div className="vote-bg">
            <p></p>
            <div className="phone-front">
              <p></p>
              <div className="button">.</div>
              <div className="phone-screen">
                <div className="card flex">
                  {Array.from({ length: 9 }, (_, index) => {
                    const cardClass = `cards r1 white 0${index + 1}`;
                    const route = `/${index + 1}`; 
                    return (
                      <div
                        key={index}
                        className={cardClass}
                        onMouseEnter={() => setHoveredCard(index + 1)}
                        onMouseLeave={() => setHoveredCard(null)} 
                      >
                        <img src={amongus} alt="" style={{ height: "70px" }} />
                        <h3>Event {index + 1}</h3>
                        {hoveredCard === index + 1 && (
                          <div className="hover-images">
                            <img
                              src={amongus}
                              alt="Tick Mark"
                              className="tick-mark"
                              onClick={() => handleCardClick(route)} 
                            />
                            <img
                              src={amongus}
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
