import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark" id="top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {/* <img src={Logo} className="img-fluid" alt="logo.png" /> */}
          <h1>LOGO</h1>
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Que recherchez-vous" />
          <div className="icons">
            <a href="#ee" className="mr-2">
              <i className="fas fa-search" />
            </a>
          </div>
        </div>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon" />
        </button>
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
              <NavLink to="/postanad" className="nav-link">
                Post an ad
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                className="nav-link"
                activeclassname="active"
              >
                Log in
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                href="https://m.facebook.com/myprincess.ch"
                className="nav-link"
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
