import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Nav.css';
import planetImage from '../assets/planet_M.png';

const Nav = () => (
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

export default Nav;
