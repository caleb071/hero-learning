// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import heros from './assets/heros.png'; 
import kid from './assets/kid.png';
import img1 from './assets/image.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import person1 from './assets/person1.jpg';
import person2 from './assets/person2.png';
import person3 from './assets/person3.png';
import person4 from './assets/person4.png';
import school from './assets/school.png';
import parent from './assets/parent.png';
import facilitators from './assets/facilitators.png';

function Home() {
  return (
    <div className="App">
      {/* Your homepage content goes here (from App.js) */}
      <div className="hero-section">
         <Link to="/register">
          <button>Login</button>
        </Link>
      </div>

      <div className="hero-section2">
        <img src={heros} alt="Hero Logo" />
        <i className="fa-solid fa-bars"></i>
      </div>

          <div className="section3">
        <div className="description">
          <span>
            Empowering Competency<br />
            Based Curriculum<br />
            Education In Kenya
          </span>
          Empowering schools with a simplified CBC assessment tool for<br />
          accurate learner evaluation and providing parents real-time access to<br />
          their child's progress, performance & personalized feedback.
        </div>
        <img src={kid} alt="Kid" />
      </div>

      <div className="banner">
        With Hero Learning, you are not just keeping up with Education - <span>you're Leading it</span>
      </div>

      <div className="section4">
        <a href="#">About Us</a>
      </div>

      <div className="section5">
        <h1>Transforming Dreams into Reality</h1>
        <p className="text">
          Hero Learning is committed to advancing education by aligning with the goals in Kenya's Competency-Based Curriculum (CBC).
          It focuses on providing tools, resources, and support that schools need to navigate the challenges of modern education.
          The approach empowers facilitators and learners, ensuring every step taken leads to the realization of
          learners' full potential.
        </p>
        <hr />
        <h2>Vision</h2>
        <p className="vision">
          To empower every learner's talent with the skills and knowledge to build a successful future.
        </p>
        <hr />
        <h2>Mission</h2>
        <p className="mission">
          At Hero Learning, we pride ourselves in building an inclusive and robust learning environment that promotes critical thinking,
          creativity, communication, collaboration, and lifelong learning.
        </p>
        <hr />
      </div>

      <div className="section6">
        <div className="h3">Our Values</div>

        <div className="cards-container">
          <div className="card">
            <img src={img1} alt="Excellence Icon" />
            <h2>Excellence</h2>
            <hr />
            <p>We are dedicated to providing high-quality solutions that guarantee accurate, reliable, and CBC-compliant content and assessments, empowering schools to achieve exceptional educational outcomes.</p>
          </div>

          <div className="card">
            <img src={img2} alt="Inclusivity Icon" />
            <h2>Inclusivity</h2>
            <hr />
            <p>We foster an inclusive environment where every school, facilitator, parent, and learner can thrive through accessible educational tools.</p>
          </div>

          <div className="card">
            <img src={img3} alt="Community Icon" />
            <h2>Community</h2>
            <hr />
            <p>We build strong partnerships with schools, facilitators, parents, and learners to create a collaborative and connected educational ecosystem where everyone works together to support learner success.</p>
          </div>

          <div className="card">
            <img src={img4} alt="Innovation Icon" />
            <h2>Innovation</h2>
            <hr />
            <p>We harness the power of technology to deliver smarter, data-driven solutions that enhance learning, streamline assessments, and create more effective educational experiences.</p>
          </div>
        </div>
      </div>

      <div className="section7">
        <div className="h2">Why Choose Hero Learning?</div>
        <div className="text">
          At Hero Learning, we offer a unique approach to education that is tailored to the needs of the<br />
          Competency-Based Curriculum (CBC) in Kenya.
          Our solutions empower facilitators and learners to thrive in a rapidly evolving educational landscape.
          By choosing us, you gain access to:
        </div>

        <div className="cards-section7">
          <div className="card">
            <img src={person1} alt="Customized Tools" />
            <h2>Customized Tools & Resources</h2>
            <p>Aligned with CBC objectives, designed to simplify assessment, enhance learning experiences, and foster learners' growth.</p>
          </div>

          <div className="card">
            <img src={person2} alt="Innovative Solution" />
            <h2>Innovative Solution</h2>
            <p>Cutting-edge technology that streamlines education processes, helping schools stay ahead of the curve.</p>
          </div>

          <div className="card">
            <img src={person3} alt="Commitment to Learners Success" />
            <h2>Commitment to Learners Success</h2>
            <p>Our focus is on ensuring every learner achieves their full potential, preparing them for the challenges of tomorrow.</p>
          </div>

          <div className="card">
            <img src={person4} alt="Expert Support" />
            <h2>Expert Support</h2>
            <p>Ongoing training and consultation from seasoned professionals who understand the intricacies of the CBC system.</p>
          </div>
        </div>
      </div>

      <div className="section8">
        <div className="h3">CBC Made Easy</div>
        <div className="text">
          Designed for schools, facilitators, and parents, our platform streamlines processes,<br />
          enhances teaching, and fosters learner success through innovative, CBC-compliant<br />
          solutions.
        </div>

        <div className="benefits-container">
          <div className="benefit-card">
            <img src={school} alt="Schools Icon" />
            <h2>Schools</h2>
            <p>Hero Learning enhances school efficiency by streamlining administration and improving teaching effectiveness. With automated tools for assessments, reporting, lesson planning, and record-keeping, schools save time and resources while ensuring high-quality education.</p>
            <p>CBC-compliant and aligned with Ministry guidelines, Hero Learning provides accurate assessments, error-free reporting, and real-time analytics to address learning gaps and boost outcomes.</p>
          </div>

          <div className="benefit-card">
            <img src={parent} alt="Parents Icon" />
            <h2>Parents</h2>
            <p>Hero Learning keeps parents actively involved in their child's education by providing real-time updates on performance, continuous assessment results, and progress reports.</p>
            <p>With clear insights and transparent communication, parents can confidently support their child's academic journey and ensure they excel in the CBC curriculum.</p>
          </div>

          <div className="benefit-card">
            <img src={facilitators} alt="Facilitators Icon" />
            <h2>Facilitators</h2>
            <p>Hero Learning streamlines workflows, saving teachers 10+ hours weekly by automating tasks like assessments, reporting, schemes of work, lesson planning, and record of work covered.</p>
            <p>This efficiency reduces administrative burdens, enhances teaching, and allows facilitators to focus on personalized instruction and learner success.</p>
          </div>

          <div className="benefit-card" style={{ backgroundColor: '#fff', boxShadow: 'none' }}></div>
        </div>
      </div>

      <div className="section9">
        <div className="h2">Pricing plan</div>
        <div className="text">Choose the perfect plan for your needs</div>
      </div>

      <div className="section10">
        <div className="card">
          <div className="h3">EVIDENCE OF LEARNING</div>
          <div className="text">
            Refers to the tangible demonstrations of learner's progress, understanding and mastery of specific
            competencies. They include portfolios of work, performance tasks, rubrics and checklists, projects and assignment, peer and
            self-assessment and teachers observations to evaluate practical skills and understanding. Evidence of learning ensures learners
            acquire the skills, values and attitudes effectively.
          </div>
          <a href="#">Get a Quote</a>
          <ul>
            <li><i className="fa-solid fa-circle-check"></i> Pre-school</li>
            <li><i className="fa-solid fa-circle-check"></i> Lower primary</li>
            <li><i className="fa-solid fa-circle-check"></i> Upper primary</li>
            <li><i className="fa-solid fa-circle-check"></i> Junior secondary</li>
            <li><i className="fa-solid fa-circle-check"></i> Senior Secondary</li>
          </ul>
        </div>

        <div className="card2">
          <div className="h2">PREMIUM PLAN</div>
          <div className="button"><a href="#">Get a Quote</a></div>
          <hr />
          <ul>
            <li><i className="fa-solid fa-circle-check"></i> Standard Summative Assessment</li>
            <li><i className="fa-solid fa-circle-check"></i> Custom Summative Assessment</li>
            <li><i className="fa-solid fa-circle-check"></i> Formative Assessment</li>
            <li><i className="fa-solid fa-circle-check"></i> Learner Report</li>
            <li><i className="fa-solid fa-circle-check"></i> Learner Promotion</li>
            <li><i className="fa-solid fa-circle-check"></i> Learner Transfers</li>
          </ul>
          <div className="text" style={{ fontWeight: 'bold' }}>See all features</div>
        </div>
      </div>

      <div className="section11">
        <div className="demo-section">
          <h1>Get started with our demo</h1>
          <p>Get started with our demo and see the Hero Learning system in action!</p>
          <button className="btn">Request A Demo</button>
        </div>

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
      </div>
     
    </div>
    
  );
}

export default Home;
