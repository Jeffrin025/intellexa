import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BG from './component/bg/bg';
import './b.css';
import exit from './assets/exit.png'
import crew from './assets/crew1.png'
import kill from './assets/kill.png'
import reg from './assets/reg.png'
const B = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 

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
        {/* <img src={eme} className='eme'/> */}
        <h1 className='head'>EVENT TITLE</h1>
        <img src={crew} className='crew'/>
        <h1 className='attention'> Attention Crewmates!</h1>

        <div className="button-container">
          <button className="transparent-button1">INDOOR AUDITORIUM  </button>
          <button className="transparent-button2">12.00 PM</button> 
        </div>
        <button className="transparent-button3">RAJALAKSHMI ENGINEERING COLLEGE</button>

     
        <div className="event-details">
        <h1 className='box-title'>EVENT DETAILS</h1>
        <ul className="custom-list" style={{fontSize:'1.1rem',marginLeft:'320px',textAlign:'initial',marginTop:'-20px'}}>
  <li> The event will focus on the latest technological advancements, offering participants a unique </li>
  <li> Attendees will have access to exclusive workshops and seminars designed to deepen their</li>
  <li> Networking opportunities will be abundant, allowing participants to connect with professionals, </li>
  <li>The event will feature exciting competitions and challenges that will test the</li>
</ul>
<img src={reg} className='regs-btn'/>
<h3 className='key'> CLICK TO REGISTER ==&gt;&gt; </h3>
         <div className='event'>
          <div>
          <img src={kill} className='kill' /></div>
   
  
         </div>
      
         <h2 className='regs-now'>REGISTER NOW !</h2>
         
        </div>
     

      </div>
    </>
  );
};

export default B;
