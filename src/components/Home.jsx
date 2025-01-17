import React, { useEffect, useState } from 'react';
import './home.css'; // Import the updated CSS file
import exprt1 from "../../src/images/exprt1.jpg"
import exprt2 from "../../src/images/exprt2.png"
import exprt3 from "../../src/images/exprt3.png"
import exprt4 from "../../src/images/exprt4.png"

const HomePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('http://localhost:1000/contacts');
        if (response.ok) {
          const data = await response.json();
          setComments(data.slice(-5).reverse()); // Get the last 5 comments in reverse order
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    fetchComments();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch('http://localhost:1000/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to send the message.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('There was an error submitting your message.');
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className='hdng'>Boost Your Academic Performance</h1>
          <p className="hero-subtext">Expert help in assignments across law, business, and technology fields.</p>
          <a href="#contact" className="cta-button">Get Started</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Law Assignments</h3>
            <p>Comprehensive support for legal essays, case studies, and law projects.</p>
          </div>
          <div className="service-card">
            <h3>Business Management</h3>
            <p>Expert assistance with business plans, strategic management, and market analysis.</p>
          </div>
          <div className="service-card">
            <h3>Technical Projects</h3>
            <p>Professional support in software engineering, programming, and technical writing.</p>
          </div>
          <div className="service-card">
            <h3>Custom Research Papers</h3>
            <p>Receive high-quality custom research papers across various disciplines.</p>
          </div>
          <div className="service-card">
            <h3>Nursing & Healthcare</h3>
            <p>Specialized assistance with nursing care plans, case studies, and healthcare research.</p>
          </div>
          <div className="service-card">
            <h3>Finance & Accounting</h3>
            <p>Help with financial analysis, accounting principles, and budgeting projects.</p>
          </div>
          <div className="service-card">
            <h3>Human Resource Management</h3>
            <p>Guidance on HR topics like recruitment, workforce planning, and employee relations.</p>
          </div>
          <div className="service-card">
            <h3>Psychology</h3>
            <p>Support in psychological research, case analysis, and theoretical essays.</p>
          </div>
          <div className="service-card">
            <h3>Environmental Science</h3>
            <p>Expert help with projects on environmental studies, sustainability, and ecology.</p>
          </div>
          <div className="service-card">
            <h3>Mathematics & Statistics</h3>
            <p>Assistance with statistical analysis, mathematical modeling, and complex problem-solving.</p>
          </div>
          <div className="service-card">
            <h3>Literature Reviews</h3>
            <p>In-depth literature reviews and critical analyses across various subjects.</p>
          </div>
          <div className="service-card">
            <h3>History & Social Sciences</h3>
            <p>Help with historical research, social theory, and critical analysis essays.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About the Company</h2>
        <p>
          At DreamAssignment, we strive to be the go-to source for comprehensive academic support, helping students achieve academic excellence through quality, customized assistance. Founded with a mission to empower students, we provide expert support across disciplines like law, business, engineering, science, and humanities. With a commitment to excellence, integrity, and customer satisfaction, we take pride in delivering high-quality, plagiarism-free work tailored to each student's unique requirements.
        </p>

        {/* Mission Statement */}
        <h3>Our Mission</h3>
        <p>
          Our mission is to support students in achieving their academic goals through expert assistance and guidance. We aim to offer resources and solutions that enhance learning, foster creativity, and lead to academic success.
        </p>

        {/* Core Services Table */}
        <h3>Our Services</h3>
        <table className="services-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Description</th>
              <th>Subjects Covered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Essay Writing</td>
              <td>Custom-written essays tailored to your assignment requirements.</td>
              <td>Literature, History, Law, Business</td>
            </tr>
            <tr>
              <td>Research Papers</td>
              <td>In-depth research papers with accurate citations and data analysis.</td>
              <td>Science, Engineering, Medicine, Sociology</td>
            </tr>
            <tr>
              <td>Case Studies</td>
              <td>Detailed case studies with insights and practical applications.</td>
              <td>Business, Law, Psychology, Marketing</td>
            </tr>
            <tr>
              <td>Technical Assignments</td>
              <td>Technical assignments with programming, data analysis, and report writing.</td>
              <td>Computer Science, Engineering, Statistics</td>
            </tr>
            <tr>
              <td>Exam Preparation</td>
              <td>Customized study plans and revision materials for exam success.</td>
              <td>All subjects</td>
            </tr>
          </tbody>
        </table>

        {/* Core Values Section */}
        <h3>Our Core Values</h3>
        <ul className="core-values">
          <li>Quality: We maintain the highest standards in our work, ensuring accuracy, clarity, and thorough research in every assignment.</li>
          <li>Integrity: We guarantee 100% original, plagiarism-free content, with a strict commitment to academic ethics and integrity.</li>
          <li>Customer Focus: Our success depends on your satisfaction, and we work closely with you to meet your specific needs.</li>
          <li>Confidentiality: We value your privacy, keeping all information secure and confidential.</li>
          <li>Excellence: We aim to exceed expectations, consistently delivering beyond what is required.</li>
        </ul>
      </section>

      {/* Why Choose Us Section */}

      {/* New Section: Meet Our Experts */}
      <section id="meet-our-experts" className="meet-our-experts">
        <h2>Meet Our Experts</h2>
        <div className="experts-grid">
          <div className="expert">
            <img src={exprt1} alt="Expert 1" className="expert-photo" />
            <h3>Dr. Sarah Collins</h3>
            <p>PhD in Economics, 10+ years in academic writing</p>
          </div>
          <div className="expert">
            <img src={exprt2} alt="Expert 2" className="expert-photo" />
            <h3>John Doe</h3>
            <p>Masters in Engineering, industry experience in technical writing</p>
          </div>
          <div className="expert">
            <img src={exprt3} alt="Expert 3" className="expert-photo" />
            <h3>Jane Smith</h3>
            <p>Certified in Creative Writing, specialized in literature and arts</p>
          </div>
          <div className="expert">
            <img src={exprt4} alt="Expert 4" className="expert-photo" />
            <h3>Michael Lee</h3>
            <p>Expert in Business Studies, former university lecturer</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className='input1'>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className='input1'>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='txt1'>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <button className="submit-button" type="submit">Send Message</button>
          </div>
          <div className="recent-comments">
            <h3>Recent Comments</h3>
            {comments.length > 0 ? (
              <table className="comments-table">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {comments.map((comment, index) => (
                    <tr key={index} className="comment-row">
                      <td>{comment.email}</td>
                      <td>{comment.name}</td>
                      <td>{comment.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No comments yet. Be the first to leave a message!</p>
            )}
          </div>

        </form>
      </section>
      <section id="why-choose-us" className="why-choose-us">
        <h2>Why Choose DreamAssignment?</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="icon-expert"></i>
            <h3>Expert Writers</h3>
            <p>Our team consists of experienced professionals specializing in your field.</p>
          </div>
          <div className="feature">
            <i className="icon-timely"></i>
            <h3>Timely Delivery</h3>
            <p>We meet your deadlines, ensuring that you submit your assignments on time.</p>
          </div>
          <div className="feature">
            <i className="icon-original"></i>
            <h3>Plagiarism-Free</h3>
            <p>Every assignment is 100% unique and thoroughly checked for plagiarism.</p>
          </div>
          <div className="feature">
            <i className="icon-support"></i>
            <h3>24/7 Support</h3>
            <p>Our dedicated team is here to assist you at any time of the day or night.</p>
          </div>
          <div className="feature">
            <i className="icon-quality"></i>
            <h3>High Quality</h3>
            <p>We prioritize quality in every assignment we deliver to our clients.</p>
          </div>
          <div className="feature">
            <i className="icon-affordability"></i>
            <h3>Affordable Prices</h3>
            <p>Our services are competitively priced to fit your budget without compromising quality.</p>
          </div>
          <div className="feature">
            <i className="icon-customization"></i>
            <h3>Customized Solutions</h3>
            <p>We tailor our services to meet your specific requirements and preferences.</p>
          </div>
          <div className="feature">
            <i className="icon-experience"></i>
            <h3>Years of Experience</h3>
            <p>With years of industry experience, we understand the nuances of academic writing.</p>
          </div>
          <div className="feature">
            <i className="icon-revisions"></i>
            <h3>Free Revisions</h3>
            <p>We offer free revisions to ensure your satisfaction with the final product.</p>
          </div>
          <div className="feature">
            <i className="icon-security"></i>
            <h3>Secure Payments</h3>
            <p>Our payment system is safe and secure, giving you peace of mind while ordering.</p>
          </div>
          <div className="feature">
            <i className="icon-privacy"></i>
            <h3>Privacy Guaranteed</h3>
            <p>Your personal information is kept confidential and never shared with third parties.</p>
          </div>
          <div className="feature">
            <i className="icon-satisfaction"></i>
            <h3>Customer Satisfaction</h3>
            <p>Our top priority is ensuring you are satisfied with our services and support.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
