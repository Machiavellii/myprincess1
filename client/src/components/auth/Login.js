import React from 'react';

const Login = () => {
  return (
    <div className="container">
      <form className="p-5">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            name="password"
            placeholder="Enter Password"
          />
        </div>
        <button type="submit" class="btn btn-form">
          To log in
        </button>
      </form>
    </div>
  );
};

export default Login;
