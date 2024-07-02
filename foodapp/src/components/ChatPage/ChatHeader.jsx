import React from 'react';

const ChatHeader = ({ currentCategory }) => {
    return (
        <div className="flex items-center p-2 border-b border-gray-700">
            <img
                src={currentCategory.strCategoryThumb}
                alt={currentCategory.strCategory}
                className="w-10 h-8 rounded-full"
            />
            <div className="flex flex-col ml-2">
                <h2 className="text-lg font-bold">{currentCategory.strCategory}</h2>
                <p className="text-cente text-xs">{currentCategory.strCategoryDescription}</p>
            </div>
        </div>
    );
};

export default ChatHeader;
