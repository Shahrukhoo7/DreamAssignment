import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Image, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice'; // Adjust the path as necessary
import './navbar.css'; // Import the improved CSS

const CustomNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth); // Get authentication state from Redux

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    navigate('/'); // Navigate to the home page after logout
  };

  return (
    <header>
      <Navbar className="custom-navbar">
        <Container fluid>
          {/* Navbar Brand with Logo */}
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            <Image src={`/assets/logo.png`} alt="Logo" className="navbar-logo" />
            <span>Dream Assignment</span>
            <marquee behavior="scroll" direction="left" className="marquee-container">
            Latest Updates: Launch of our new product line | Upcoming Webinar on AI & Machine Learning | Special offers for new customers!
          </marquee>
          </Navbar.Brand>

          <div className="navbtn">
            <Nav className="navbar-links">
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
              <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            </Nav>

            <div className="auth-buttons">
              {isAuthenticated ? (
                <>
                  <span className="welcome-message">Hello, {user.name}</span>
                  <Button onClick={handleLogout} className="btn-logout">Logout</Button>
                </>
              ) : (
                <>
                  <Button as={Link} to="/login" className="btn-login">Login</Button>
                  <Button as={Link} to="/register" className="btn-register">Register</Button>
                </>
              )}
            </div>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default CustomNavbar;
