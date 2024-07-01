import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FoodData from '../api/Food/FoodData';

const ChatPage = () => {
    const { category } = useParams();
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [meals, setMeals] = useState([]);
    const [messages, setMessages] = useState([
        { id: 1, text: `안녕하세요. ${category} 챗봇입니다. 무엇을 도와드릴까요?`, sender: 'chat' },
    ]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
            const response = await fetch(url);
            const data = await response.json();
            setCategories(data.categories);
            const cat = data.categories.find((cat) => cat.strCategory.toLowerCase() === category.toLowerCase());
            setCurrentCategory(cat);
        };

        fetchCategories();
    }, [category]);

    useEffect(() => {
        if (meals.length > 0) {
            const mealMessages = meals.map((meal, index) => ({
                id: messages.length + index + 1,
                text: meal.strMeal,
                image: meal.strMealThumb,
                sender: 'chat',
            }));
            setMessages([...messages, ...mealMessages]);
        }
    }, [meals]);

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: 'self' }]);
            setNewMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="flex h-screen bg-gray-800 text-white">
            <div className="flex flex-col flex-grow">
                {currentCategory && (
                    <div className="flex items-center p-4 border-b border-gray-700">
                        <img
                            src={currentCategory.strCategoryThumb}
                            alt={currentCategory.strCategory}
                            className="w-20 h-15 rounded-full"
                        />
                        <div className="flex flex-col ml-2">
                            <h2 className="text-2xl font-bold">{currentCategory.strCategory}</h2>
                            <p className="text-center">{currentCategory.strCategoryDescription.slice(0, 80)}...</p>
                        </div>
                    </div>
                )}
                <div className="flex flex-col flex-grow p-4 space-y-4 overflow-y-auto">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sender === 'self' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`p-2 rounded-lg max-w-xs ${
                                    message.sender === 'self' ? 'bg-yellow-500' : 'bg-gray-700'
                                }`}
                            >
                                {message.image && (
                                    <img src={message.image} alt={message.text} className="mb-2 rounded" />
                                )}
                                {message.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col p-4 border-t border-gray-700">
                    <textarea
                        className="flex-grow p-2 text-black rounded-lg h-24 resize-none"
                        placeholder="메시지를 입력해주세요."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                    <button
                        className={`p-2 mt-3 rounded-lg ${
                            newMessage.trim()
                                ? 'bg-yellow-500 text-white'
                                : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                        }`}
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                    >
                        Send
                    </button>
                </div>
            </div>
            <FoodData setMeal={setMeals} category={category} />
        </div>
    );
};

export default ChatPage;
