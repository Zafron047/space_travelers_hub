import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import Nav from './components/Nav';
import Missions from './components/Missions';
// import { fetchRockets } from './redux/rockets/rocketSlice';
import Rockets from './components/Rockets';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchRockets());
  // }, [dispatch]);

  return (
    <div className="main">
      <Nav />
      <Routes>
        <Route className="navbar-link" path="/missions" element={<Missions />} />
        <Route className="navbar-link" path="/" element={<Rockets />} />
        <Route className="navbar-link" path="/profile" />
      </Routes>
    </div>
  );
}

export default App;
