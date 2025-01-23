import React from 'react';

const ScrollBox: React.FC = () => {
  return (
    <div className="scroll-box">
      <svg width="700" height="700" viewBox="0 0 300 300">
        <path
          id="upperBorderPath"
          d="M 150, 150 m -90, 0 a 90,90 0 1,0 180,0 a 90,90 0 1,0 -180,0"
          className="border-path"
        />
        <path
          id="textPath"
          fill="none"
          stroke="transparent"
          d="M 150, 150 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
        />
        <text dy="1" style={{ fontSize: 15 }}>
          <textPath xlinkHref="#textPath" startOffset="50%" fill="white" textAnchor="middle">
            SCROLL TO EXPLORE  SCROLL TO EXPLORE  SCROLL TO EXPLORE
          </textPath>
        </text>
        <path
          id="lowerBorderPath"
          d="M 150, 150 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
          className="border-path"
        />
      </svg>
      <div className="arrow-container">
        <div className="arrow" />
        <div className="arrow" />
      </div>
    </div>
  );
};

export default ScrollBox;
