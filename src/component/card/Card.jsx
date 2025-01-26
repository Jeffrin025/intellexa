import React from 'react'
import BG from '../bg/bg'
import './Card.css'
import amongus from '../../assets/cha.png'
const Card = () => {
  return (
    <>
        <BG/>
        <section id='event'>
        <div className="book-content">
        <div className='vote-bg'> <p></p>
            <div className='phone-front'><p></p>
            <div className='button'>.</div>
                <div className='phone-screen'>
                <div className='card flex'>
                  <div className='cards r1 white 01'>
                    <img src={amongus} alt='' style={{height:'70px'}}/>
                    <h3>Event 1</h3>
                  </div>
                  <div className='cards r1 white 02'>
                    <img src={amongus} alt='' style={{height:'70px'}}/>
                    <h3>Event 2</h3>
                  </div>
                  <div className='cards r1 white 03'>
                    <img src={amongus} alt='' style={{height:'70px'}}/>
                    <h3>Event 3</h3>
                  </div>
                  <div className='cards white 04'>
                    <img src={amongus} alt='' style={{height:'70px'}}/>
                    <h3>Event 4</h3>
                  </div>
                  <div className='cards white 05 '>
                    <img src={amongus} alt='' style={{height:'70px'}}/>
                    <h3>Event 5</h3>
                  </div>
                  <div className='cards white 05 '>
                    <img src={amongus} alt='' style={{height:'70px'}}/>
                    <h3>Event 6</h3>
                  </div>
                  <div className='cards white 06'>
                    <img src={amongus} alt='' style={{height:'70px'}}/>
                    <h3>Event 7</h3>
                  </div>
                  <div className='cards white 07'>
                    <img src={amongus} alt='' style={{height:'70px'}}/>
                    <h3>Event 8</h3>
                  </div>
                  <div className='cards white 08'>
                    <img src={amongus} alt='' style={{height:'70px'}}/>
                    <h3>Event 9</h3>
                  </div>
                  </div>
                </div>
            </div>
        </div>
        </div>
        </section>
    </>
  )
}

export default Card;