import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';
import './styles/Nav.css';
import planetImage from '../assets/planet_M.png';

const Nav = () => {
  const dispatch = useDispatch();

  const handleMissions = () => {
    dispatch(fetchMissions());
  };
  return (
    <>
      <nav className="navbar">
        <header className="navbar-header">
          <img src={planetImage} alt="Logo" />
          <h1 className="nav-heading">Space Travelers Hub</h1>
        </header>
        <ul className="nav-ul">
          <li className="nav-li">
            <NavLink
              to="/rockets"
            >
              Rockets
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              to="/missions"
              onClick={handleMissions}
            >
              Missions
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              to="/profile"
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
