import React from 'react';

const ChatHeader = ({ currentCategory }) => {
    return (
        <div className="flex items-center p-4 border-b border-gray-700">
            <img
                src={currentCategory.strCategoryThumb}
                alt={currentCategory.strCategory}
                className="w-20 h-15 rounded-full"
            />
            <div className="flex flex-col ml-2">
                <h2 className="text-2xl font-bold">{currentCategory.strCategory}</h2>
                <p className="text-center">{currentCategory.strCategoryDescription.slice(0, 80)}...</p>
            </div>
        </div>
    );
};

export default ChatHeader;
