import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Profile from './components/Profile';

function App() {
  return (
    <div className="main">
      <Nav />
      <Routes>
        <Route className="navbar-link" path="/missions" element={<Missions />} />
        <Route className="navbar-link" path="/" element={<Rockets />} />
        <Route className="navbar-link" path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
