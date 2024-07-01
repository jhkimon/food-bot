import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faCog, faUser } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    return (
        <div className="flex flex-col items-center w-20 bg-gray-900 py-4">
            <div className="m-6">
                <FontAwesomeIcon icon={faUser} className="text-2xl" />
            </div>
            <div className="flex-1">
                <button className="w-full mb-6 focus:outline-none">
                    <FontAwesomeIcon icon={faComments} className="text-2xl" />
                </button>
                <button className="w-full focus:outline-none">
                    <FontAwesomeIcon icon={faCog} className="text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default SideBar;
