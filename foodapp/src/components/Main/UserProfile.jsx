import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const UserProfile = ({ handleMyClick }) => {
    return (
        <div className="flex items-center mb-4 cursor-pointer" onClick={handleMyClick}>
            <img src="images/profile.png" className="w-12 h-12 rounded-3xl" alt="User Profile" />
            <span className="ml-4 text-xl font-bold">My page</span>
            <FontAwesomeIcon icon={faChevronRight} className="ml-10 text-xl" />
        </div>
    );
};

export default UserProfile;
