import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../styles/navbar.css';
import Logo from '../../img/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="top">
      <input
        type="text"
        name=""
        id="search-text"
        placeholder="Que recherchez-vous"
      />
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={Logo} className="img-fluid" alt="logo.png" />
        </Link>
        <div className="search-bar mr-5">
          <input type="text" placeholder="Que recherchez-vous" />
          <div className="icons">
            <Link to="/search" className="big-size mr-2">
              <i className="fas fa-search" />
            </Link>
            <a href="#!" className="small-size">
              <i className="fas fa-search" />
            </a>
          </div>
        </div>
        <div className="button-collapse">
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/faq" className="nav-link" activeClassName="active">
                FAQ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                activeclassname="active"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/postanad" className="nav-link rose-border">
                Post an ad
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                className="nav-link"
                activeclassname="active"
              >
                Sing in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/register"
                className="nav-link"
                activeclassname="active"
              >
                Sing Up
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                href="https://m.facebook.com/myprincess.ch"
                className="nav-link rose-border"
                activeclassname="active"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* {this.props.children} */}
    </nav>
  );
};

export default Navbar;
