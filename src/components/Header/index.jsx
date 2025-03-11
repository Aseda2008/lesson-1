import React from 'react';
import { Link } from 'react-router-dom';
import ReactIcon from '../../assets/img/react.png'

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <img width={'40px'} src={ReactIcon} alt="img" />
          <div className="header-nav">
            <Link to="/">To-Do-List</Link>
            <Link to="/calculator">Calculator</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
