import React from 'react';
import WorkCard from './WorkCard';
import "./WorksSection.css"

const WorksSection: React.FC = () => {
  return (
    <div className="container">
      <p className="crursive-title">My Works</p>

      <div className="works-grid-container">
        <WorkCard
          id=""
          link="https://werner-home.vercel.app/"
          text="Real Estate Agency / Designing Your Next Chapter"
          backgroundImage="public/img/Background-main-image.jpg"
          isWide
        />
        <WorkCard
          id=""
          link="https://probably-kit.github.io/subscription-choice-menu/"
          text="Subscription menu / Stripe payments"
          backgroundImage="/img/subscription-menu-new.jpg"
          
        />
        <WorkCard
          id=""
          link="https://probably-kit.github.io/todo-list/"
          text="Todo list / Plan your day"
          backgroundImage="/img/todo-new.jpg"
        />
        
      </div>
    </div>
  );
};

export default WorksSection;
