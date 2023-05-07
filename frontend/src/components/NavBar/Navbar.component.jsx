import React from 'react';
import LogoHeader from '../../assets/img/logo-header.png';
import { Link } from 'react-router-dom';
import * as Nav from './navbar.styled';

function NavBar() {
  return (
    <Nav.Header>
      <Link to={'/'}>
        <img className="logo" src={LogoHeader} alt="Hive logo" />
      </Link>

      <Nav.MainNav>
        <ul className="main-nav-list">
          <li>
            <a href="#home" className="main-nav-link home-btn">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="main-nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#testimonial" className="main-nav-link">
              Testimonials
            </a>
          </li>
          <li className="main-nav-line"></li>

          <li>
            <button className="btn-login">
              <a href='{% url "logout" %}'>Logout</a>
            </button>
          </li>
          <>
            <li>
              <button className="btn-login">
                <a href='{% url "login" %}'>Login</a>
              </button>
            </li>

            <li>
              <button className="btn-login">
                <a href='{% url "register" %}'>Sign Up</a>
              </button>
            </li>
          </>
        </ul>
      </Nav.MainNav>
    </Nav.Header>
  );
}

export default NavBar;
