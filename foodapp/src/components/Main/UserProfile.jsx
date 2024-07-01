import React from 'react';

const UserProfile = () => {
    return (
        <div className="flex items-center justify-items-stretch mb-4">
            <img src="images/profile.png" className="w-12 h-12 rounded-3xl" alt="User Profile" />
            <span className="ml-4 text-xl font-bold">You</span>
        </div>
    );
};

export default UserProfile;
