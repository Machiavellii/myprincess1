import React from 'react';

const Register = () => {
  return (
    <div className="container">
      <form className="p-5">
        <div className="form-group">
          <label htmlFor="email">Nickname *</label>
          <input
            type="text"
            className="form-control"
            name="nickname"
            placeholder="Enter Nickname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="text"
            className="form-control"
            name="password"
            minLength="6"
            placeholder="Enter Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password *</label>
          <input
            type="text"
            className="form-control"
            name="password2"
            minLength="6"
            placeholder="Confirm Password"
          />
        </div>
        <button type="submit" className="btn btn-form">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
