import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NotFond.css";

const NotFond = () => {
  return (
    <div>
      <div className="not-found-container">
          <h2>404 Not Found</h2>
      <p>The page you are looking for is not available Please click here.</p>
      <NavLink to="/"> Login</NavLink>
      </div>
      </div>
  );
}

export default NotFond;
