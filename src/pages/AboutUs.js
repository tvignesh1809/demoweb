import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <h1>About Us</h1>
        <p>
          We are a leading Mobile Manufacturing company dedicated to producing high-quality, innovative mobile devices that meet the needs of customers worldwide.
          Our commitment to excellence and cutting-edge technology drives us to deliver products that combine performance, design, and reliability.
        </p>
      </div>
      <div style={{ flex: '0 0 150px', marginLeft: '20px' }}>
        <img
          src="/logo192.png"
          alt="Mobile Manufacturing"
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </div>
    </div>
  );
};

export default AboutUs;
