// src/BioPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { classmates } from './data';
import './App.css';

function BioPage() {
  const { id } = useParams();
  const classmate = classmates.find(person => person.id === Number(id));

  if (!classmate) {
    return (
      <div className="detail-container">
        <h2>Одноклассник не найден</h2>
        <Link to="/">Вернуться на главную</Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <Link to="/" className="back-link">← Назад к списку</Link>
      
      <div className="classmate-header">
        <img src={classmate.avatar} alt={classmate.name} className="detail-avatar" />
        <div className="classmate-info">
          <h1>{classmate.name}</h1>
          <p className="preview-info">{classmate.info}</p>
          
          <div className="stats">
            <span>📚 Класс: 11-А</span>
            <span>🎂 Возраст: 17 лет</span>
            <span>⭐ Рейтинг: 4.8/5</span>
          </div>
        </div>
      </div>

      <div className="bio-section">
        <h2>📖 Обо мне</h2>
        <div className="bio-content">
          <p>{classmate.bio || "Информация о себе пока не добавлена."}</p>
          
          <div className="bio-details">
            <div className="bio-card">
              <h3>🎯 Хобби и увлечения</h3>
              <ul>
                <li>Программирование и IT</li>
                <li>Футбол и спорт</li>
                <li>Юмор и стендап</li>
                <li>Математика и наука</li>
              </ul>
            </div>
            
            <div className="bio-card">
              <h3>🏆 Достижения в классе</h3>
              <ul>
                <li>Самый смешной 2024</li>
                <li>Лучший шутник месяца</li>
                <li>Организатор мероприятий</li>
                <li>Активный участник олимпиад</li>
              </ul>
            </div>
            
            <div className="bio-card">
              <h3>🎓 Планы на будущее</h3>
              <ul>
                <li>Поступить в университет</li>
                <li>Стать IT-специалистом</li>
                <li>Продолжать развивать чувство юмора</li>
                <li>Создать свой YouTube канал</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="fun-facts">
        <h2>😄 Смешные факты</h2>
        <div className="facts-grid">
          <div className="fact-card">
            <span>😂</span>
            <h4>Самый смешной момент</h4>
            <p>Заснул на уроке и во сне решал задачу вслух</p>
          </div>
          <div className="fact-card">
            <span>🎭</span>
            <h4>Лучшая пародия</h4>
            <p>Имитировал директора так точно, что все поверили</p>
          </div>
          <div className="fact-card">
            <span>🏆</span>
            <h4>Рекорд класса</h4>
            <p>Рассказал анекдот, от которого весь класс смеялся 5 минут</p>
          </div>
          <div className="fact-card">
            <span>⭐</span>
            <h4>Особенность</h4>
            <p>Умеет смешить даже в самый грустный день</p>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <Link to={`/classmate/${classmate.id}`} className="detail-link">
          🎥 Посмотреть смешные видео
        </Link>
      </div>
    </div>
  );
}

export default BioPage;