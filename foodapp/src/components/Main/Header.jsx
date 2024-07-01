import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">My FoodBot</h1>
        </div>
    );
};

export default Header;
