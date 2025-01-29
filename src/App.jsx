import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './page/main/main';
import Details from './details'


function App() {
  

  return (
    <Router>
      <Routes>
  
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Details />} />
      
      </Routes>
    </Router>
  );
}

export default App;
