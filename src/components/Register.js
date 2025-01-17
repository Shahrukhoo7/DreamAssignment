import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import "./register.css";

const Register = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      phoneNumber,
      email,
      password,
    };

    dispatch(registerUser(userData))
      .unwrap()
      .then(() => {
        navigate('/products');
      })
      .catch((err) => {
        console.error('Registration failed:', err);
      });
  };

  return (
    <div className="register-container">
      <div className="form-wrapper">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className='inpt'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              className='inpt'
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className='inpt'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className='inpt'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
          {error && <p className="error-message">{error}</p>}
          <div className="register-link">
          <p>Already have an account? <Link className="lnk" to="/login">Login here</Link></p>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
