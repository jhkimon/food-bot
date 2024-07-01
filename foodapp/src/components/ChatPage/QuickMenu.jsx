import React from 'react';

const QuickMenu = ({ meals, handleQuickMenuClick }) => {
    return (
        <div className="font-bold">
            <div className="text-center text-2xl m-4">Quick Menu</div>
            <div className="flex flex-wrap justify-between ml-12 mr-12 mb-3">
                {meals.map((meal, index) => (
                    <button
                        key={index}
                        className="bg-gray-700 text-white px-4 py-2 rounded mb-2"
                        onClick={() => handleQuickMenuClick(meal)}
                        style={{ minWidth: '120px', maxWidth: '200px' }}
                    >
                        {meal.strMeal}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuickMenu;
