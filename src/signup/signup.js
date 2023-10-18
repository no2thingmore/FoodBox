import React from 'react';
import "./signup.css";

const Signup = () => {
  return (
    <form className="signup-form">
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
      </div>

      <div>
        <div><button type="submit" className="btn-signup">
          Sign Up
        </button></div>
        <div><button type="submit" className="btn-kakao">
          KaKao Login
        </button></div>
        <div><button type="submit" className="btn-google">
          GoogleLogin
        </button></div>
      </div>
      <p>
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  )
}

export default Signup;
