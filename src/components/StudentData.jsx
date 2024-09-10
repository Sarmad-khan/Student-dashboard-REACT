import React from "react";
import { useNavigate } from "react-router-dom";

const StudentData = ({ data, onViewClick, onDeleteClick, onEditClick }) => {
  const navigate = useNavigate();

  const handleView = (student) => {
    onViewClick(student);
    navigate("/view");
  };

  const handleEdit = (student) => {
    onEditClick(student);
    navigate("/"); 
  };

  const handleDelete = (student) => {
    onDeleteClick(student);
  };

  return (
    <>
      <div className="heading">
        <h1>S.No</h1>
        <h1>Name</h1>
        <h1>Email</h1>
        <h1>Username</h1>
        <h1>Phone</h1>
        <h1>Action</h1>
      </div>

      <div>
        <ul>
          {data.map((student, index) => (
            <li key={student.id}>
              <div className="data">
                <p>{index + 1}</p> 
                <p>{student.name}</p>
                <p>{student.email}</p>
                <p>{student.username}</p>
                <p>{student.phone}</p>
                <div className="btn">
                  <button onClick={() => handleEdit(student)}>Edit</button>
                  <button onClick={() => handleDelete(student)}>Delete</button>
                  <button onClick={() => handleView(student)}>View</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StudentData;
