import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BG from './component/bg/bg';
import './b.css';
import exit from './assets/exit.png'
import eme from './assets/eme2.png'
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
        <h1 className='reg'> Attention Crewmates!</h1>

        <div className="button-container">
          <button className="transparent-button1">LOCAL</button>
          <button className="transparent-button2">ONLINE</button> 
        </div>
        <button className="transparent-button3">HOW TO PLAY</button>

     
        <div className="event-details">
        <h1 className='res'>EVENT DETAILS</h1>
        <ul class="custom-list">
  <li> The event will focus on the latest technological advancements, offering participants a unique </li>
  <li> Attendees will have access to exclusive workshops and seminars designed to deepen their</li>
  <li> Networking opportunities will be abundant, allowing participants to connect with professionals, </li>
  <li>The event will feature exciting competitions and challenges that will test the</li>
</ul>
<img src={reg} className='regs'/>
<h3 className='key'> CLICK TO REGISTER ==&gt;&gt; </h3>
         <div className='event'>
          <div>
          <img src={kill} className='kill' /></div>
   
  
         </div>
      
         <h2 className='re'>REGISTER NOW !</h2>
         
        </div>
     

      </div>
    </>
  );
};

export default B;
