import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import ChatPage from './pages/ChatPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/chat/:category" element={<ChatPage />} />
            </Routes>
        </Router>
    );
};

export default App;
