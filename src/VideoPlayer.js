import React from 'react';
import './App.css';

function VideoPlayer({ video }) {
  return (
    <div className="video-card">
      <h3>{video.title}</h3>
      <video controls width="100%" style={{ maxWidth: '600px' }}>
        <source src={video.url} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      <p>{video.description}</p>
    </div>
  );
}

export default VideoPlayer;