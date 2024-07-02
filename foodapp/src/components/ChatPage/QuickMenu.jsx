import React from 'react';

const QuickMenu = ({ meals, handleQuickMenuClick }) => {
    return (
        <div className="font-bold">
            <div className="text-center text-lg m-2">Quick Menu</div>
            <div className="flex flex-wrap justify-between ml-12 mr-12 mb-3">
                {meals.map((meal, index) => (
                    <button
                        key={index}
                        className="bg-gray-700 text-white text-sm px-4 py-2 rounded mb-2"
                        onClick={() => handleQuickMenuClick(meal)}
                        style={{ minWidth: '150px', maxWidth: '300px' }}
                    >
                        {meal.strMeal}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuickMenu;
