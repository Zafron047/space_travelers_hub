import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div className="main">
      <Nav />
      <Routes>
        <Route className="navbar-link" path="/rockets" />
        <Route className="navbar-link" path="/missions" />
        <Route className="navbar-link" path="/profile" />
      </Routes>
    </div>
  );
}

export default App;
