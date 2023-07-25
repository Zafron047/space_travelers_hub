import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Missions from './components/Missions';

function App() {
  return (
    <div className="main">
      <Nav />
      <Routes>
        <Route className="navbar-link" path="/rockets" />
        <Route className="navbar-link" path="/missions" element={<Missions />} />
        <Route className="navbar-link" path="/profile" />
      </Routes>
    </div>
  );
}

export default App;
