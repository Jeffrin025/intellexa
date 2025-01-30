import React from 'react';
import BG from '../../component/bg/bg'
import './about.css'
import ch2 from '../../assets/ch2.png'
import ch3 from '../../assets/ch3.png'
import ch1 from '../../assets/ch1.png'
import space from '../../assets/space.png'
import ch5 from '../../assets/ch5.png'
import ch4 from '../../assets/ch4.png'


const About = () => {
  return (
   
    <>
    <BG />
    
    <section id='about'>
   
        <div className="about-content">
        
            <img className='space' src={space} alt='spaceship'/>
            <div className='border'>
                
                <div className='border2'>
                <div className="about-title">
              <h1 className='topics'>ABOUT US</h1>
              
            </div>
                    <div className='miss'>  
                    <h2 className='hed' >MISSION 01</h2> 
                        <img src={ch1} className='character' />
                    <h2 className='dec' >Assemble your crew and join our tech-savvy mission!</h2>
                    </div>
                    <div className='mission'>  <h2 className='hed' >MISSION 02</h2>   <img src={ch2} className='character'/>
                    <h2 className='dec'>Complete tasks and level up your skills in workshops.</h2>
                    </div>
                    <div className='mission'>   <h2 className='hed' >MISSION 03</h2>  <img src={ch3} className="character" style={{ width: '120px' }}  />
                    <h2  className='dec'>Discover new hacks and innovate like a pro!</h2>
                    </div>
                    
                    <div className='mission'>  <h2 className='hed' >MISSION 04</h2>   <img src={ch4}className='character' />
                    <h2 className='dec' >Call emergency meetings to share ideas and grow together.</h2>
                    </div>
                    
                    <div className='mission'>   <h2 className='hed' >MISSION 05</h2>  <img src={ch5}className='character'   />
                    <h2 className='dec'>Stick with the crew for endless learning and fun!</h2>
                    </div>

                </div>
           

            </div>
        
        </div>
        </section>
        </>
  );
};

export default About;
