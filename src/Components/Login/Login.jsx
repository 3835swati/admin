import React from 'react';
import './Login.css';



import user_icon from './person.png';
import password_icon from './password.png';
import img from './img2.png';
import inn4 from './inn-4-smart-logo.png';
import welcome from './welcome.png';


const Login = () => {
  return (
    <div className="container">
      <div className="left-section">
        <img src={img} alt="Company Logo" />
      </div>
      <div className="right-section">
        <div className="header">
          <img src={inn4} alt="inn4 Logo" className="inn4-logo" />
          <img src={welcome} alt='welcome-logo' className='welcome-logo'/>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input
  type="text"
  id="phone"
  name="phone"
  pattern="[0-9]{10}"
  title="Please enter a 10-digit phone number with no alphabets"
  placeholder='Username'
/>

          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password"
            placeholder='Password' />
          </div>
        </div>
        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>
        <div className="submit-container">
          <a href='http://localhost:5173/home'>
          <div className="submit">Sign In</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;