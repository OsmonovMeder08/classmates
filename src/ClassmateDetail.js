import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { classmates } from './data';
import VideoPlayer from './VideoPlayer';
import './App.css';

function ClassmateDetail() {
  const { id } = useParams();
  const classmate = classmates.find(person => person.id === Number(id));

  if (!classmate) {
    return (
      <div className="not-found">
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
          <p className="detail-bio">{classmate.info}</p>
          <div className="stats">
            <span>📹 Видео: {classmate.videos.length}</span>
          </div>
        </div>
      </div>

      <div className="videos-section">
        <h2>🎥 Смешные моменты ({classmate.videos.length})</h2>
        <div className="videos-grid">
          {classmate.videos.map(video => (
            <VideoPlayer key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClassmateDetail;