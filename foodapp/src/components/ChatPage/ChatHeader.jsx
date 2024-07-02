import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ChatHeader = ({ currentCategory }) => {
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <div className="flex items-center p-2 border-b border-gray-700">
            <FontAwesomeIcon
                icon={faChevronCircleLeft}
                className="text-xl cursor-pointer block sm:hidden ml-1 mr-3"
                onClick={handleHomeClick}
            />
            <img
                src={currentCategory.strCategoryThumb}
                alt={currentCategory.strCategory}
                className="w-10 h-8 rounded-full"
            />
            <div className="flex flex-col ml-2">
                <h2 className="text-lg font-bold">{currentCategory.strCategory}</h2>
                <p className="text-center text-xs">{currentCategory.strCategoryDescription}</p>
            </div>
        </div>
    );
};

export default ChatHeader;
