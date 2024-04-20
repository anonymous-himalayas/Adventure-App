import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBookmark, faClock, faLightbulb } from '@fortawesome/free-regular-svg-icons'
import App from './App.jsx';
import { Test } from './Test.jsx';
import './index.css';

library.add(faBookmark, faClock, faLightbulb);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
