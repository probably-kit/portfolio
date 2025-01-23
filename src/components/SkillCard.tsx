import React from 'react';
// import './SkillCard.css';

interface SkillCardProps {
  title: string;
  description: string;
  svg: React.ReactNode;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, svg, className }) => {
  return (
    <div className={`grid-item ${className || ''}`}>
      {/* SVG or Icon */}
      {svg}

      {/* Text Content */}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
