import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="developer-name">Adi Patel</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
