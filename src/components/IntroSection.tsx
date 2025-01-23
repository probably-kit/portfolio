import React from 'react';
import ScrollBox from './ScrollBox';

const IntroSection: React.FC = () => {
  return (
    <div className="container">
      {/* Introduction Text */}
      <div className="container">
        <div className="adaptive-title">
          <h1>I AM</h1>
          <h1>FULL-STACK</h1>
        </div>
        <div className="row container">
          <p className="crursive-title">Developer</p>
          <p className="width-limit">
            Specializing in React, Node.js, and MongoDB.
            Let's transform your ideas into digital success stories together!
          </p>
        </div>
      </div>

      {/* Scroll Box (circle + arrow) */}
      <ScrollBox />
    </div>
  );
};

export default IntroSection;
