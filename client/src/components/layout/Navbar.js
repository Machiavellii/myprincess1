import React, { Fragment, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../styles/navbar.css';
import Logo from '../../img/logo.png';

import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { filterFunc } from '../../actions/profile';

const Navbar = ({
  auth: { isAuthenticated, loading, user },
  logout,
  filterFunc
}) => {
  let [showHide, setShow] = useState(false);
  let [showInput] = useState('');
  const [filter, setFilter] = useState('');

  showInput = () => {
    setShow((showHide = !showHide));
  };

  const onChange = e => {
    setFilter(e.target.value);
    filterFunc(filter);
  };

  return (
    <Fragment>
      {window.innerWidth > 993 ? (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="top">
          {!loading && (
            <Fragment>
              {showHide ? (
                <div className="search-input-small">
                  <input
                    type="text"
                    value={filter}
                    className="form-control form-control-lg"
                    placeholder="Que recherchez-vous"
                    onChange={onChange}
                  />
                  <i className="fas fa-times"></i>
                </div>
              ) : null}
              <div className="container">
                <Link to="/" className="navbar-brand">
                  <img src={Logo} className="img-fluid" alt="logo.png" />
                </Link>
                <div className="search-bar mr-5">
                  <input
                    type="text"
                    placeholder="Que recherchez-vous"
                    value={filter}
                    onChange={onChange}
                  />
                  <div className="icons">
                    <Link to="/search" className="big-size mr-2">
                      <i className="fas fa-search" />
                    </Link>
                    <a href="#!" className="small-size" onClick={showInput}>
                      <i
                        className={`fas fa-search ${showHide ? 'opct' : ''}`}
                      />
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
                    {isAuthenticated ? (
                      <Fragment>
                        <div className="dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="fas fa-user"></i>
                          </a>

                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <li className="nav-item">
                              <Link to="/dashboard" className="nav-link">
                                Dashboard
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                to="/"
                                onClick={logout}
                                className="nav-link"
                              >
                                Logout
                              </Link>
                            </li>
                          </div>
                        </div>
                        {/* <li className="nav-item">
                          <NavLink
                            to="/postanad"
                            className="nav-link rose-border"
                          >
                            Post an ad
                          </NavLink>
                        </li> */}
                        <div className="dropdown">
                          <a
                            className="nav-link"
                            href="#"
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="far fa-bell"></i>
                            <span className="counter counter-lg">3</span>
                          </a>

                          <div
                            className="dropdown-menu notification-dropdown"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <li className="nav-item notification-item">
                              <div className="alert alert-info">
                                <strong>Agency</strong> sent you an invitation
                                <div className="btn-group">
                                  <button className="btn btn-success notification-button">
                                    Accepte
                                  </button>
                                  <button className="btn btn-danger notification-button">
                                    Reject
                                  </button>
                                </div>
                              </div>
                              <div className="alert alert-danger">
                                <strong>Agency2</strong> rejected your join
                                request
                              </div>
                              <div className="alert alert-success">
                                <strong>Agency3</strong> accepted your join
                                request
                              </div>
                            </li>
                          </div>
                        </div>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <li className="nav-item">
                          <NavLink
                            to="/auth"
                            className="nav-link"
                            activeclassname="active"
                          >
                            <i class="fas fa-user"></i>
                          </NavLink>
                        </li>
                      </Fragment>
                    )}

                    {/* <li className='nav-item'>
                    <a
                      href='https://m.facebook.com/Xanibis.ch'
                      className='nav-link rose-border'
                      activeclassname='active'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Facebook
                    </a>
                  </li> */}
                  </ul>
                </div>
              </div>
            </Fragment>
          )}
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="top">
          {!loading && (
            <Fragment>
              {showHide ? (
                <div className="search-input-small">
                  <input
                    type="text"
                    value={filter}
                    className="form-control form-control-lg"
                    placeholder="Que recherchez-vous"
                    onChange={onChange}
                  />
                  <i className="fas fa-times"></i>
                </div>
              ) : null}
              <div className="container">
                <Link to="/" className="navbar-brand">
                  <img src={Logo} className="img-fluid" alt="logo.png" />
                </Link>
                <div className="search-bar mr-5">
                  <div className="icons">
                    <Link to="/search" className="small-size">
                      <i className={`fas fa-search`} />
                    </Link>
                  </div>
                </div>
              </div>
            </Fragment>
          )}
        </nav>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout, filterFunc })(Navbar);
