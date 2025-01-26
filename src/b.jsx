import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import BG from './component/bg/bg';

import './b.css';

const B = () => {
  const { id } = useParams(); 

  return (
    <>
      <BG />
      <div className="b-content">
        <h1>Event {id}</h1>
        <p>Details for event {id}</p>
      </div>
    </>
  );
};

export default B;
