import React from 'react';
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-links">
        <a href="https://github.com/probably-kit/">GitHub</a>
        <a href="https://www.linkedin.com/in/mikita-lohinau-0a5239235/">LinkedIn</a>
      </div>
      <p>MIKITA LOHINAU</p>
      <div className="header-links">
        <a href="https://www.upwork.com/freelancers/~0171bd1ee38e48753b">Upwork</a>
        <a href="mailto:mikita.lohinau@gmail.com">e-mail</a>
      </div>
    </header>
  );
};

export default Header;
