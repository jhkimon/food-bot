import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header = ({ onHomeClick }) => {
    return (
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">My FoodBot</h1>
            <div className="flex items-center space-x-4 cursor-pointer">
                <FontAwesomeIcon icon={faHouse} onClick={onHomeClick} className="text-2xl" />
            </div>
        </div>
    );
};

export default Header;
