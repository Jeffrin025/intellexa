import React from 'react';

import BG from '../../component/bg/bg'
import '../home/Home.css'
import shh from '../../assets/shh.png';
import bg from '../../assets/bg.png';


const Home = () => {
  return (
    <>
      <BG />
      <div className="home-content">
            <div className="content">
          <h1 className='heading'>INTELLEXA</h1>
          <h4 className='intro'>
          A party Has Been Reported!
          </h4>
          <div className="menu">
  <a href="#about">ABOUT</a>
  <a className="active" href="#event">EVENTS</a>
  <a href="#">CONTACT</a>
</div>

          <img className='amoungus' src={bg} alt="image" />
        
          <p className='desc'>
          Join your crewmates to tackle challenges before the Impostor sabotages the event. <br></br>Register for the event or risk being 'voted off'!"
          
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;