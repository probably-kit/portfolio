import React from 'react';
import WorkCard from './WorkCard';

const WorksSection: React.FC = () => {
  return (
    <div className="container">
      <p className="crursive-title">My Works</p>

      <div className="works-grid-container">
        <WorkCard
          id="library"
          link="https://werner-home.vercel.app/"
          text="REal Estate Agency / Designing Your Next Chapter"
          backgroundImage="/img/real-estate.png"
          isLong
        />
        <WorkCard
          id="sub"
          link="https://probably-kit.github.io/subscription-choice-menu/"
          text="Subscription menu / Stripe payments"
          backgroundImage="/img/subscription-menu.png"
          
        />
        <WorkCard
          id="todo"
          link="https://probably-kit.github.io/todo-list/"
          text="Todo list / Plan your day"
          backgroundImage="/img/todo-ipad.png"
        />
        
      </div>
    </div>
  );
};

export default WorksSection;
