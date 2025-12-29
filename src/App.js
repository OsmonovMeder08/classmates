// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClassmateList from './ClassmateList';
import ClassmateDetail from './ClassmateDetail';
import GirlsList from './GirlsList';
import BioPage from './BioPage';
import FunnyMoments from './FunnyMoments'; // ← ИМПОРТ НОВОЙ СТРАНИЦЫ
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ClassmateList />} />
          <Route path="/classmate/:id" element={<ClassmateDetail />} />
          <Route path="/girls" element={<GirlsList />} />
          <Route path="/bio/:id" element={<BioPage />} />
          <Route path="/funny" element={<FunnyMoments />} /> {/* ← НОВЫЙ МАРШРУТ */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;