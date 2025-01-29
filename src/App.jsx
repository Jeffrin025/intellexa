import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './page/main/main';
import B from './b'


function App() {
  

  return (
    <Router>
      <Routes>
  
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<B />} />
      
      </Routes>
    </Router>
  );
}

export default App;
