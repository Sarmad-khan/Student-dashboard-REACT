import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    
    <header>
      <h1>Student Dashboard</h1>
      <nav>
        <Link to="/students">
          <button>View All Students</button>
        </Link>
        <Link to="/">
          <button>Back to Form</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
