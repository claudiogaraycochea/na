import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Link to='/'><div className='nav-logo'/></Link>
    </header>
  );
};

export default Header;