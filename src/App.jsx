import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './page/home/Home';
import Event from './page/event/Event';
import About from './page/about/about';
import Main from './page/main/main';
import B from './b'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Main />} />
        <Route path="/b" element={<B />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
