import React from 'react';
import "./WorkCard.css"
interface WorkCardProps {
  id?: string;
  link: string;
  text: string;
  backgroundImage: string;
  isWide?: boolean;
}

const WorkCard: React.FC<WorkCardProps> = ({
  id,
  link,
  text,
  backgroundImage,
  isWide
}) => {
  const cardClass = `works-grid-item ${isWide ? 'wide' : ''}`;
  
  return (
    <div
      id={id}
      className={cardClass}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </div>
  );
};

export default WorkCard;
