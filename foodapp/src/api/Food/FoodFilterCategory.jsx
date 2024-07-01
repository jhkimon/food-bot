import React, { useEffect } from 'react';

const FoodFilterCategory = ({ setMeal, category }) => {
    useEffect(() => {
        const fetchData = async () => {
            const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
            try {
                const response = await fetch(url);
                const data = await response.json();

                // Select 3 random meals from the fetched data
                const randomMeals = getRandomMeals(data.meals, 3);
                setMeal(randomMeals);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [category, setMeal]);

    const getRandomMeals = (meals, count) => {
        const shuffled = meals.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    return null;
};

export default FoodFilterCategory;
