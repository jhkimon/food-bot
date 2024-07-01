import React, { useEffect } from 'react';

const FoodData = ({ idMeal, setMessages }) => {
    useEffect(() => {
        const fetchData = async () => {
            const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                const instructions = data.meals[0].strInstructions;

                const secondMessage = {
                    id: Date.now() + 1,
                    text: instructions,
                    sender: 'chatgpt',
                };

                setMessages((prevMessages) => [...prevMessages, secondMessage]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [idMeal, setMessages]);

    return null;
};

export default FoodData;
