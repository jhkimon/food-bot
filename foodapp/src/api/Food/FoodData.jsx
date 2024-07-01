import React, { useEffect } from 'react';

const FoodData = ({ setMeal, category }) => {
    useEffect(() => {
        const fetchData = async () => {
            const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setMeal(data.meals);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [category, setMeal]);

    return null;
};

export default FoodData;
