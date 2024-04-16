import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const searchIconUrl = "https://th.bing.com/th/id/OIP.EnVXtt3dz0MYacQs0O4a9AHaFj?rs=1&pid=ImgDetMain";

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h1>EducationVulkans</h1>
      </div>
      <ul className="navbar__links">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">Home</Link>
        </li>
        <li className="navbar__item">
          <Link to="/courses" className="navbar__link">Courses</Link>
        </li>
        <li className="navbar__item">
          <Link to="/blog" className="navbar__link">Blog</Link>
        </li>
        <li className="navbar__item">
          <Link to="/techsupport" className="navbar__link">Tech Support</Link>
        </li>
      </ul>
      <div className="navbar__search">
        <img src= "https://th.bing.com/th/id/OIP.EnVXtt3dz0MYacQs0O4a9AHaFj?rs=1&pid=ImgDetMain" alt="Search Icon" className="search-icon" />
        
      </div>
      <div className="navbar__login">
      <button className="navbar__login">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
