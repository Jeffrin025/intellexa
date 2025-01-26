import React from 'react';

import BG from '../../component/bg/bg'

import './about.css'
import amoung from '../../assets/cha.png'
import ch2 from '../../assets/ch2.png'
import ch3 from '../../assets/ch3.png'
import ch1 from '../../assets/ch1.png'
import space from '../../assets/space.png'

const About = () => {
  return (
   
    <>
    <BG/>
        <div className="about-content">
            < img className='space' src={space}/>
            <div className='border'>
                
                <div className='border2'>
                <div className="about-title">
              <h1 className='topic'>ABOUT US</h1>
            </div>
                    <div >  
                    <h2 className='hed' >MISSION 01</h2> 
                        <img src={ch1} className='cha' />
                    <h2 className='dec' >Assemble your crew and join our tech-savvy mission!</h2>
                    </div>
                    <div >  <h2 className='hed' >MISSION 02</h2>   <img src={ch2} className='cha'/>
                    <h2 className='dec'>Complete tasks and level up your skills in workshops.</h2>
                    </div>
                    <div>   <h2 className='hed' >MISSION 03</h2>  <img src={ch3} className='cha'/>
                    <h2  className='dec'>Discover new hacks and innovate like a pro!</h2>
                    </div>
                    <div >  <h2 className='hed' >MISSION 04</h2>   <img src={amoung}className='cha' />
                    <h2 className='dec' >Call emergency meetings to share ideas and grow together.</h2>
                    </div>
                    <div >   <h2 className='hed' >MISSION 05</h2>  <img src={amoung}className='cha' />
                    <h2 className='dec'>Stick with the crew for endless learning and fun!</h2>
                    </div>

                </div>
           

            </div>
        
        </div>
        </>
  );
};

export default About;
