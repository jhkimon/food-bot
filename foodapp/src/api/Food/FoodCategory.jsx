import React, { useState, useEffect } from 'react';

const FoodCategory = ({ setCategories }) => {
    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setCategories(data.categories);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [setCategories]);

    return null;
};

export default FoodCategory;
