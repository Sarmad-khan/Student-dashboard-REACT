import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import StudentData from './components/StudentData';
import View from './components/View';

const App = () => {
  const [studentInfo, setStudentInfo] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setStudentInfo(data);
      });
  }, []);

  const handleFormSubmit = (formData) => {
    if (isEditing) {
      const updatedStudents = studentInfo.map((student) =>
        student.id === formData.id ? formData : student
      );
      setStudentInfo(updatedStudents);
      setIsEditing(false);
      setSelectedStudent(null);
    } else {

      const newStudent = { ...formData, id: studentInfo.length + 1 };
      setStudentInfo([...studentInfo, newStudent]);
    }
  };

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setIsEditing(true);
  };



  const handleDeleteClick = (student) => {
    const updatedData = studentInfo.filter((s) => s.id !== student.id);
    setStudentInfo(updatedData);
  };

  
  const handleViewClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Form onFormSubmit={handleFormSubmit} selectedStudent={selectedStudent} />}
        />
        <Route
          path="/students"
          element={
            <StudentData
              data={studentInfo}
              onEditClick={handleEditClick}
              onDeleteClick={handleDeleteClick}
              onViewClick={handleViewClick}
            />
          }
        />
        <Route path="/view" element={<View student={selectedStudent} />} />
      </Routes>
    </Router>
  );
};

export default App;
