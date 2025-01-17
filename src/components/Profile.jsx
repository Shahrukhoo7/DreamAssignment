import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.auth.user); // Retrieve user from Redux store

  return (
    <div className="container">
      <h2>User Profile</h2>
      {user ? (
        <div className="profile">
          <img src={user.image} alt="Profile" className="profile-img" />
          <div className="profile-info">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
}

export default Profile;
