import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#282c34' }}>
      <Link to="/" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/products" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Products</Link>
      <Link to="/services" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Services</Link>
      <Link to="/aboutus" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>About Us</Link>
    </nav>
  );
};

export default Navbar;
