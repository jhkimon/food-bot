import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import ChatPage from './pages/ChatPage';
import MyRecipe from './pages/MyRecipe';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/chat/:category" element={<ChatPage />} />
                <Route path="/my-recipe" element={<MyRecipe />} />
            </Routes>
        </Router>
    );
};

export default App;
