import React from 'react';

const CategoryList = ({ categories, onCategoryClick }) => {
    return (
        <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Channel</h2>
            <div>
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between mb-3 cursor-pointer"
                        onDoubleClick={() => onCategoryClick(category.strCategory)}
                    >
                        <div className="flex items-center space-x-2">
                            <img
                                src={category.strCategoryThumb}
                                alt={category.strCategory}
                                className="w-10 h-15 rounded-full"
                            />
                            <div>
                                <p className="font-bold">{category.strCategory}</p>
                                <p className="text-sm">{category.strCategoryDescription.slice(0, 80)}...</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
