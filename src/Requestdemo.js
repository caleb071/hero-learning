import './Requestdemo.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Requestdemo = () => {
  const [dateTime, setDateTime] = useState('');

  return (
    <>
      <Navbar />  

      <div className="section1">
        <h3>Request a Demo</h3>
        <p>
          We're proud to partner with schools to provide students equitable access to
          academic support, preparing them for success in 
          school and beyond. If you'd like to explore a partnership with Hero Learning, 
          please get in touch with us via the form below.
        </p> 
      </div> 

      <div className="section2">
        <div className="card">
          <h4>Hero Learning System drives CBC learning positive academic outcomes</h4>  
          <ul>
            <li><i className="fa-solid fa-circle-check"></i> Implement CBC academic planning and prepare 
              students for higher education or a career</li>
            <li><i className="fa-solid fa-circle-check"></i> Enhance teachers' capacity to offer personalized 
              learning experiences.</li>
            <li><i className="fa-solid fa-circle-check"></i> Track and measure student progress</li>
          </ul>
        </div>

        <form className="form">
        
            <input type="text" placeholder="First Name*" /><br></br>
            <input type="text" placeholder="Last Name*" /> <br></br>      
            <input type="email" placeholder="Email Address *" /><br></br>
            <input type="text" placeholder="School Name *" /><br></br>      

            <select>
              <option>Select County</option>
              <option>Nairobi</option>
            </select><br></br>       

            <select>
              <option>Select Subcounty</option>
            </select><br></br>

            <input type="number" placeholder="Town*" /><br></br>
            <input type="number" placeholder="Phone*" /><br></br>

            <select>
              <option>Role</option>
              <option>Headteacher</option>
              <option>Director</option>
              <option>Teacher</option>
            </select> <br></br>

            <textarea placeholder="Comment: Let us know how we can help you"></textarea><br></br>      

            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="p-2 border rounded"
            /><br></br>
           
            <p>
              Hero Learning needs the contact information you provide to us to contact you about our products and services.
            </p>

            <div className="form-checkbox">
              <label>
                <input type="checkbox" /> You agree to our friendly <a href="#">privacy policy</a> and <a href="#">Terms of Use</a>
              </label>
            </div>

            <button>Submit <i className="fa-solid fa-arrow-right"></i></button>
        
        </form>
      </div>  

      <div className="section30">
         <h1>Already a Hero Learning Partner?</h1><br></br>
        <p>If you need help from our customer care team, you can reach us at support@herolearning.com.</p><br></br>
        <button>TALK TO US</button>   <br></br>  
        
        
        
        </div>    

      <Footer />
    </>
  );
};

export default Requestdemo;
