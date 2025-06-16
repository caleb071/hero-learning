
import React, { useState } from 'react';
import './Register.css';
import logo from './assets/heros.png'; 
import girlImage from './assets/girl.png';


const Register = () => {
  const [role, setRole] = useState('school');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={girlImage} alt="Girl smiling" />
      </div>
      <div className="login-right">
        <img src={logo} alt="Hero Learning Logo" className="logo" />
        <h1>Login</h1>
        <p>Login with the data you entered during your registration.</p>

        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="school"
              checked={role === 'school'}
              onChange={() => setRole('school')}
            />
            School
          </label>
          <label>
            <input
              type="radio"
              value="parent"
              checked={role === 'parent'}
              onChange={() => setRole('parent')}
            />
            Parent
          </label>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>

        {role === 'parent' && (
          <div className="form-group">
            <label>School Code</label>
            <input type="text" placeholder="Enter School Code" />
          </div>
        )}

        <div className="form-group">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
            />
          
          </div>
        </div>

        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>

        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Register;
