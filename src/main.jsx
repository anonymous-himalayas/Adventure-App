import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import { Leaderboard } from './pages/Leaderboard.jsx';
import { Badges } from './pages/Badges.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/badges" element={<Badges />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
