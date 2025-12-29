import React from 'react';
import { classmates } from './data';
import ClassmateCard from './ClassmateCard';
import { Link } from 'react-router-dom';
import './App.css';

function ClassmateList() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Our Classmates 2008</h1>
        <p>Нажми на одноклассника, чтобы посмотреть его видео</p>
        
        {/* Навигационные ссылки */}
        <div className="navigation-links">
          <Link to="/" className="active-link">
            👥 All classmates
          </Link>
          <span className="nav-spacer">|</span>
          <Link to="/funny" className="nav-link">
            😂 Funny moments
          </Link>
          <span className="nav-spacer">|</span>
          <Link to="/girls" className="nav-link">
            👧 Girls
          </Link>
        </div>
      </header>
      
      <div className="classmates-grid">
        {classmates.map(classmate => (
          <ClassmateCard key={classmate.id} classmate={classmate} />
        ))}
      </div>
      
      <footer className="app-footer">
        <p>Сайт создан для класса. Добавляйте свои смешные видео!</p>
      </footer>
    </div>
  );
}

export default ClassmateList;