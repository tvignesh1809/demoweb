import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#282c34', padding: '10px', color: 'white', textAlign: 'center', marginTop: '20px' }}>
      <Link to="/contact" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Contact</Link>
    </footer>
  );
};

export default Footer;
