import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const UserProfile = ({ handleMyClick }) => {
    return (
        <div className="flex items-center mb-4 cursor-pointer" onClick={handleMyClick}>
            <img src="images/profile.png" className="w-8 h-8 rounded-3xl" alt="User Profile" />
            <span className="ml-3 text-lg font-bold">My page</span>
            <FontAwesomeIcon icon={faChevronRight} className="ml-16 mt-0.5 text-sm" />
        </div>
    );
};

export default UserProfile;
