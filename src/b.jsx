import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BG from './component/bg/bg';
import './b.css';

const B = () => {
  const { id } = useParams();

  return (
    <>
      <BG />
      <div className="b-content">
        <h1>Event {id}</h1>
        <div className="outter">
          <div className="inner">
            <div className="navbar">Navbar Section</div>
            <div className="contents">
              <div className="left-pane">Left Pane</div>
              <div className="main-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br /><br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default B;
