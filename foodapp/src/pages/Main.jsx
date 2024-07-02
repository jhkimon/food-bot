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

    const handleMyClick = () => {
        navigate('/my-recipe');
    };

    const handleCategoryClick = (categoryName) => {
        const newWindow = window.open(`/chat/${categoryName}`, '_blank', 'width=800,height=600');
        if (newWindow) {
            newWindow.focus();
        } else {
            navigate(`/chat/${categoryName}`);
        }
    };

    return (
        <div className="flex h-screen bg-gray-800 text-white">
            <SideBar />
            <div className="flex flex-col flex-1 m-2">
                <Header />
                <div className="flex-1 overflow-y-auto p-4">
                    <UserProfile handleMyClick={handleMyClick} />
                    <CategoryList categories={categories} onCategoryClick={handleCategoryClick} />
                </div>
            </div>
            <FoodCategory setCategories={setCategories} />
        </div>
    );
};

export default Main;
