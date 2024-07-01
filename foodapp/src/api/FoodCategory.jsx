import React, { useState, useEffect } from 'react';

const FoodData = ({ setCategories }) => {
    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setCategories(data.categories);
        };

        fetchData();
    }, [setCategories]);

    return null;
};

export default FoodData;
