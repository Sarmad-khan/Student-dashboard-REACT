import React from 'react';
import { useNavigate } from 'react-router-dom';

const View = ({ student }) => {
  const navigate = useNavigate();

  if (!student) {
    return <p>No student selected</p>;
  }

  return (
    <>
      <h1>Student Profile</h1>
      <div className="profile">
        <div className="profile-details">
          <h2>Name: {student.name}</h2>
          <p>Email: {student.email}</p>
          <p>Username: {student.username}</p>
          <p>Phone: {student.phone}</p>
        </div>
      </div>
      <div className="p-btn">
        <button onClick={() => navigate('/students')}>Back to Students</button>
      </div>
    </>
  );
};

export default View;
