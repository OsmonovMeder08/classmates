// src/ClassmateCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function ClassmateCard({ classmate }) {
  return (
    <div className="classmate-card">
      <img src={classmate.avatar} alt={classmate.name} className="avatar" />
      <h3>{classmate.name}</h3>
      <p className="preview-info">{classmate.info}</p>
      
      {/* ИЗМЕНИЛ ССЫЛКУ: */}
      <Link to={`/bio/${classmate.id}`} className="detail-link">
        📖 Узнать больше
      </Link>
    </div>
  );
}

export default ClassmateCard;