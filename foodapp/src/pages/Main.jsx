import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import FoodCategory from '../api/Food/FoodCategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
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
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold">My FoodBot</h1>
                    <div className="flex items-center space-x-4 cursor-pointer">
                        <FontAwesomeIcon icon={faHouse} onClick={handleHomeClick} className="text-2xl" />
                    </div>
                </div>
                <div className="flex items-center justify-items-stretch mb-4">
                    <img src="images/profile.png" className="w-12 h-12 rounded-3xl"></img>
                    <span className="ml-4 text-xl font-bold">You</span>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Channel</h2>
                    <div>
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between mb-3 cursor-pointer"
                                onDoubleClick={() => handleCategoryClick(category.strCategory)}
                            >
                                <div className="flex items-center space-x-2">
                                    <img
                                        src={category.strCategoryThumb}
                                        alt={category.strCategory}
                                        className="w-10 h-15 rounded-full"
                                    />
                                    <div>
                                        <p className="font-bold">{category.strCategory}</p>
                                        <p className="text-sm">{category.strCategoryDescription.slice(0, 80)}...</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <FoodCategory setCategories={setCategories} />
        </div>
    );
};

export default Main;
