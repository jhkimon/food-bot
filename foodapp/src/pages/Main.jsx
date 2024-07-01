import React, { useState } from 'react';
import SideBar from '../components/Main/SideBar';
import FoodCategory from '../api/Food/FoodCategory';
import Header from '../components/Main/Header';
import UserProfile from '../components/Main/UserProfile';
import CategoryList from '../components/Main/CategoryList';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        const newWindow = window.open(`/chat/${categoryName}`, '_blank', 'width=600,height=600');
        if (newWindow) {
            newWindow.focus();
        } else {
            navigate(`/chat/${categoryName}`);
        }
    };

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <div className="flex h-screen bg-gray-800 text-white">
            <SideBar />
            <div className="flex flex-col flex-1 m-2 p-4">
                <Header onHomeClick={handleHomeClick} />
                <UserProfile />
                <CategoryList categories={categories} onCategoryClick={handleCategoryClick} />
            </div>
            <FoodCategory setCategories={setCategories} />
        </div>
    );
};

export default Main;
