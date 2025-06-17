import React from 'react';
import './GetQuote.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


const GetQuote = () => {
  return (
    <>
      <Navbar />      

   <div className="section1">
<h3>Get A Quote</h3>
<h6>Subscription types grant access to all of Hero Learning's platform features, including:</h6>
<div className="section2">

    <div className="card1">
    <i className="fa-solid fa-circle-check"></i>
    <h3>Analytics & Data</h3>
    <p>To monitor student progress in learning.</p>
    </div>

 <div className="card1">
    <i className="fa-solid fa-circle-check"></i>
    <h3>Unlimited Teacher Accounts</h3>
    <p>For seamless collaboration and resource sharing.</p>
    </div>

 <div className="card1">
    <i className="fa-solid fa-circle-check"></i>
    <h3>Dedicated Account Manager</h3>
    <p>For consistent support and guidance.</p>
    </div>


</div>

   </div>
      <form className="register-form">
        <h2>Personal Information:</h2>
        <div className="form-row">
          <input type="text" placeholder="First Name*" />
          <input type="text" placeholder="Last Name*" />
        </div>
        <div className="form-row">
          <input type="email" placeholder="Email Address *" />
          <input type="text" placeholder="Phone Number *" />
        </div>
        <div className="form-row">
          <input type="password" placeholder="Password*" />
          <input type="password" placeholder="Confirm Password*" />
        </div>

        <h3>School Information:</h3>
        <div className="form-row">
          <input type="text" placeholder="School Name" />
          <select>
            <option>Select County</option>
          </select>
        </div>
        <div className="form-row">
          <select>
            <option>Select Subcounty</option>
          </select>
          <input type="number" placeholder="Number Of Learners*" />
        </div>
        <div className="form-row">
          <select>
            <option>Choose A period *</option>
          </select>
        </div>

        <div className="form-checkbox">
          <label>
            <input type="checkbox" /> You agree to our friendly <a href="#">privacy policy</a> and <a href="#">Terms of Use</a>
          </label>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <Footer />
    </>
  );
};

export default GetQuote;

