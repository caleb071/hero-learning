import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
   
        <div className="footer">
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div className="subscribe">
            <p>Subscribe to stay tuned for new web design and latest updates. Let's do it!</p>
            <form>
              <input type="email" placeholder="Enter Your Email Address" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          <hr />
          <div className="social-icons">
            <a href="www.facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="www.twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="www.instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <p>© 2024 All Rights Reserved</p>
        </div>
      
  );
};

export default Footer;
