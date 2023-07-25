import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Nav from './components/Nav';
import { fetchRockets } from './redux/rockets/rocketSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div className="main">
      <Nav />
      <Routes>
        <Route className="navbar-link" path="/" />
        <Route className="navbar-link" path="/missions" />
        <Route className="navbar-link" path="/profile" />
      </Routes>
    </div>
  );
}

export default App;
