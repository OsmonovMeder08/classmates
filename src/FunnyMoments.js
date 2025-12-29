import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import { funnyMomentsData } from './funnyMomentsData';
import './App.css';

function FunnyMoments() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Самые популярные видео (топ 3)
  const topVideos = [...funnyMomentsData]
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 3);

  // Фильтрация видео
  const filteredVideos = funnyMomentsData.filter(video => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'popular') return video.likes > 150;
    if (activeFilter === 'recent') return video.date.includes('2024-03');
    if (activeFilter === 'exam') return video.tags?.includes('экзамен');
    if (activeFilter === 'break') return video.tags?.includes('перемена');
    return true;
  });

  // Статистика без NaN
  const totalLikes = funnyMomentsData.reduce((sum, video) => sum + (video.likes || 0), 0);
  const totalViews = funnyMomentsData.reduce((sum, video) => sum + (video.views || 0), 0);
  const totalComments = funnyMomentsData.reduce((sum, video) => sum + (video.comments || 0), 0);
  const hoursOfLaughs = Math.floor((funnyMomentsData.length || 0) * 0.5);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 style={{background: 'linear-gradient(90deg, #ff6b6b, #f59f00, #51cf66)', WebkitBackgroundClip: 'text', color: 'transparent'}}>
          😂 Смешные моменты класса
        </h1>
        <p>Все самые веселые видео и приколы нашего класса в одном месте!</p>
        
        <div className="navigation-links">
          <Link to="/" className="nav-link">
            ← Назад к списку
          </Link>
          <span className="nav-spacer">|</span>
          <Link to="/funny" className="active-link" style={{color: '#ff6b6b'}}>
            😂 Смешные моменты
          </Link>
          <span className="nav-spacer">|</span>
          <Link to="/girls" className="nav-link">
            👧 Девочки
          </Link>
        </div>
      </header>

      {/* Топ видео */}
      {topVideos.length > 0 && (
        <div className="top-videos-section">
          <h2>🔥 Топ-3 самых смешных момента</h2>
          <div className="top-videos-grid">
            {topVideos.map((video, index) => (
              <div key={video.id} className="top-video-card">
                <div className="top-badge">
                  {index === 0 ? '🥇 1 место' : index === 1 ? '🥈 2 место' : '🥉 3 место'}
                </div>
                <div className="video-header">
                  <div className="video-meta">
                    <h3>{video.title || 'Без названия'}</h3>
                    <p className="video-date">{video.date || 'Дата неизвестна'}</p>
                  </div>
                </div>
                <VideoPlayer video={video} />
                <p className="video-description">{video.description || 'Описание отсутствует'}</p>
                <div className="video-stats">
                  <span>❤️ {video.likes || 0} лайков</span>
                  <span>👁️ {video.views || 0} просмотров</span>
                  <span>💬 {video.comments || 0} комментов</span>
                </div>
                <div className="video-tags">
                  {(video.tags || []).map(tag => (
                    <span key={tag} className="tag">#{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Все видео */}
      <div className="all-videos-section">
        <h2>🎥 Все смешные моменты ({filteredVideos.length})</h2>
        
        <div className="filter-buttons">
          {['all', 'popular', 'recent', 'exam', 'break'].map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'all' && 'Все'}
              {filter === 'popular' && 'Популярные'}
              {filter === 'recent' && 'Недавние'}
              {filter === 'exam' && 'Экзамены'}
              {filter === 'break' && 'Перемены'}
            </button>
          ))}
        </div>

        <div className="all-videos-grid">
          {filteredVideos.length > 0 ? (
            filteredVideos.map(video => (
              <div key={video.id} className="funny-video-card">
                <div className="funny-video-header">
                  <div className="video-meta">
                    <h3>{video.title || 'Без названия'}</h3>
                    <div className="meta-row">
                      <span className="video-date">{video.date || 'Недавно'}</span>
                      <span className="views">👁️ {video.views || 0}</span>
                    </div>
                  </div>
                </div>
                
                <div className="funny-video-content">
                  <VideoPlayer video={video} />
                  <p className="funny-description">{video.description || ''}</p>
                  
                  <div className="video-tags">
                    {(video.tags || []).map(tag => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </div>
                  
                  <div className="funny-video-stats">
                    <div className="reactions">
                      <button className="reaction-btn">😂</button>
                      <button className="reaction-btn">😆</button>
                      <button className="reaction-btn">🤣</button>
                      <button className="reaction-btn">👍</button>
                    </div>
                    <div className="stats">
                      <span className="stat-item">
                        ❤️ {video.likes || 0}
                      </span>
                      <span className="stat-item">
                        💬 {video.comments || 0}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-videos">
              <p>😔 Нет видео по выбранному фильтру</p>
              <button 
                className="filter-btn active" 
                onClick={() => setActiveFilter('all')}
              >
                Показать все видео
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Статистика */}
      <div className="funny-stats">
        <h2>📊 Статистика смеха</h2>
        <div className="stats-cards">
          <div className="stat-card">
            <div className="stat-icon">😂</div>
            <div className="stat-number">{funnyMomentsData.length || 0}</div>
            <div className="stat-label">Всего видео</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">😆</div>
            <div className="stat-number">{totalLikes}</div>
            <div className="stat-label">Всего лайков</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🤣</div>
            <div className="stat-number">{totalViews}</div>
            <div className="stat-label">Всего просмотров</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎬</div>
            <div className="stat-number">{hoursOfLaughs}</div>
            <div className="stat-label">Часов смеха</div>
          </div>
        </div>
      </div>

      <footer className="app-footer">
        <p>Добавляй свои смешные моменты и поднимай настроение всему классу! 🎉</p>
        <div className="upload-btn">📤 Добавить видео</div>
      </footer>
    </div>
  );
}

export default FunnyMoments;