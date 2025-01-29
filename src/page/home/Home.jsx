import React from 'react';
import BG from '../../component/bg/bg';
import './Home.css';
import bg from '../../assets/bg.png';

const Home = () => {
  return (
    <>
      <BG />
      <div className="home-content w-full h-screen flex flex-col justify-center items-center text-white p-5">
        <div className="content text-center">
          <h1 className="heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-wide">INTELLEXA</h1>
          <h4 className="intro text-lg md:text-2xl lg:text-3xl mt-4">A Party Has Been Reported!</h4>
          
          <div className="menu flex flex-row gap-5 mt-6 md:mt-10 text-xl md:text-2xl">
            <a href="#about" className="text-red-500 hover:text-red-700">ABOUT</a>
            <a href="#event" className="text-red-500 hover:text-red-700 font-bold">EVENTS</a>
            <a href="#contact" className="text-red-500 hover:text-red-700">CONTACT</a>
          </div>

          <img className="amoungus w-64 md:w-96 lg:w-[600px] mx-auto mt-10" src={bg} alt="image" />

          <p className="desc text-sm md:text-lg lg:text-xl text-center mt-6 px-4">
            Join your crewmates to tackle challenges before the Impostor sabotages the event. <br />
            Register for the event or risk being 'voted off'!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
