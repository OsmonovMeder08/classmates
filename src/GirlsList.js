import React from 'react';
import { classmates } from './data';
import ClassmateCard from './ClassmateCard';
import { Link } from 'react-router-dom';
import './App.css';

function GirlsList() {
  const girls = [
    {
      id: 1,
      name: "Marpalieva ALiya",
      avatar: "https://via.placeholder.com/150/ff69b4/ffffff?text=AG",
      info: "Самая веселая в классе.",
      videos: [
        { id: 1, title: "Танцует на уроке", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", description: "Весь класс повторял" }
      ]
    },
    {
      id: 2,
      name: "Aizat",
      avatar: "https://via.placeholder.com/150/ff69b4/ffffff?text=AK",
      info: "Отличница с чувством юмора.",
      videos: [
        { id: 2, title: "Смеется над шуткой", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", description: "Заразительный смех" }
      ]
    },
    {
      id: 3,
      name: "Aitilla",
      avatar: "https://via.placeholder.com/150/ff69b4/ffffff?text=JG",
      info: "Спокойная.",
      videos: [
        { id: 3, title: "Имитирует учителя", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", description: "Точно попала в интонацию" }
      ]
    },
    {
      id: 4,
      name: "MalikaA",
      avatar: "https://via.placeholder.com/150/ff69b4/ffffff?text=AN",
      info: "Душа компании среди девочек.",
      videos: [
        { id: 4, title: "Рассказывает историю", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", description: "Все слушали с открытыми ртами" }
      ]
    },
    {
      id: 5,
      name: "MalikaB",
      avatar: "https://via.placeholder.com/150/ff69b4/ffffff?text=GM",
      info: "Всегда поднимает настроение.",
      videos: [
        { id: 5, title: "Пародирует одноклассника", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", description: "Точная копия" }
      ]
    },
     {
      id: 6,
      name: "Venera",
      avatar: "https://via.placeholder.com/150/ff69b4/ffffff?text=AN",
      info: "Веселая.",
      videos: [
        { id: 6, title: "Рассказывает историю", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", description: "Все слушали с открытыми ртами" }
      ]
    },
    {
      id: 7,
      name: "Aizirek",
      avatar: "https://via.placeholder.com/150/ff69b4/ffffff?text=GM",
      info: "Всегда поднимает настроение.",
      videos: [
        { id: 7, title: "Пародирует одноклассника", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", description: "Точная копия" }
      ]
    },
     {
      id: 8,
      name: "MadinaA",
      avatar: "https://via.placeholder.com/150/ff69b4/ffffff?text=AN",
      info: "Душа компании среди девочек.",
      videos: [
        { id: 8, title: "Рассказывает историю", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", description: "Все слушали с открытыми ртами" }
      ]
    },
    {
      id: 9,
      name: "MadinaB",
      avatar: "https://via.placeholder.com/150/ff69b4/ffffff?text=GM",
      info: "Всегда поднимает настроение.",
      videos: [
        { id: 9, title: "Пародирует одноклассника", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", description: "Точная копия" }
      ]
    },
    {
      id: 10,
      name: "Aizirek",
      avatar: "https://via.placeholder.com/150/ff69b4/ffffff?text=GM",
      info: "Всегда поднимает настроение.",
      videos: [
        { id: 10, title: "Пародирует одноклассника", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", description: "Точная копия" }
      ]
    },
     {
      id: 11,
      name: "Zarina",
      avatar: "https://via.placeholder.com/150/ff69b4/ffffff?text=AN",
      info: "Душа компании среди девочек.",
      videos: [
        { id: 11, title: "Рассказывает историю", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", description: "Все слушали с открытыми ртами" }
      ]
    },
    {
      id: 12,
      name: "AsemaA",
      avatar: "https://via.placeholder.com/150/ff69b4/ffffff?text=GM",
      info: "Всегда поднимает настроение.",
      videos: [
        { id: 12, title: "Пародирует одноклассника", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", description: "Точная копия" }
      ]
    },
    {
      id: 13,
      name: "AsemaB",
      avatar: "https://via.placeholder.com/150/ff69b4/ffffff?text=GM",
      info: "Всегда поднимает настроение.",
      videos: [
        { id: 13, title: "Пародирует одноклассника", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", description: "Точная копия" }
      ]
    },
     {
      id: 14,
      name: "Myrzaiym",
      avatar: "https://via.placeholder.com/150/ff69b4/ffffff?text=AN",
      info: "Душа компании среди девочек.",
      videos: [
        { id: 14, title: "Рассказывает историю", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", description: "Все слушали с открытыми ртами" }
      ]
    },
    {
      id: 15,
      name: "Saule",
      avatar: "https://via.placeholder.com/150/ff69b4/ffffff?text=GM",
      info: "Всегда поднимает настроение.",
      videos: [
        { id: 15, title: "Пародирует одноклассника", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", description: "Точная копия" }
      ]
    }
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 style={{background: 'linear-gradient(90deg, #ff69b4, #ff1493, #ff69b4)', WebkitBackgroundClip: 'text'}}>
          👧 Girls 2008
        </h1>
        <p>Смешные моменты и видео от девочек</p>
        
        <div className="navigation-links">
          <Link to="/" className="nav-link">
            ← Назад ко всем
          </Link>
          <span className="nav-spacer">|</span>
          <Link to="/girls" className="active-link" style={{color: '#ff69b4'}}>
            👧 Девочки
          </Link>
        </div>
      </header>
      
      <div className="classmates-grid">
        {girls.map(girl => (
          <ClassmateCard key={girl.id} classmate={girl} />
        ))}
      </div>
      
      <footer className="app-footer">
        <p>Только самые крутые моменты от девочек класса! 👭</p>
      </footer>
    </div>
  );
}

export default GirlsList;