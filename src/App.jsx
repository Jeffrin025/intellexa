import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './page/main/main';
import { Register } from './page/register/Register';
import Event from './page/event/Event';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/event/:eventName" element={<Event />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
