import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './page/main/main';
import Event from './page/event/Event';
import Register from './page/register/Register';

function App() {
  return (
    <Router>
      <Routes>
  
        <Route path="/" element={<Main />} />
        <Route path="/event/:eventName" element={<Event />} />
        <Route path='/register/:slug' element = {<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
