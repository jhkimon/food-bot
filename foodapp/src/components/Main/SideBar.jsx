import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faCog } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center w-14 bg-gray-900 py-2">
            <div className="m-6">
                <FontAwesomeIcon icon={faComments} className="text-xl cursor-pointer" onClick={handleUserClick} />
            </div>
        </div>
    );
};

export default SideBar;
