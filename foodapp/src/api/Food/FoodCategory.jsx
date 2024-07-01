import React, { useEffect } from 'react';
import categoriesData from './categories.json';

const FoodCategory = ({ setCategories }) => {
    useEffect(() => {
        setCategories(categoriesData.categories);
    }, [setCategories]);

    return null;
};

export default FoodCategory;
