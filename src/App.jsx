import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './page/main/main';
import { Register } from './page/register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
