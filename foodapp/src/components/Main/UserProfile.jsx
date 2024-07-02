import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const UserProfile = ({ handleMyClick }) => {
    return (
        <div className="flex items-center mb-4 cursor-pointer" onClick={handleMyClick}>
            <img src="images/profile.png" className="w-8 h-8 rounded-3xl" alt="User Profile" />
            <span className="ml-3 text-lg font-bold flex-grow">My Recipe</span>
            <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
        </div>
    );
};

export default UserProfile;
