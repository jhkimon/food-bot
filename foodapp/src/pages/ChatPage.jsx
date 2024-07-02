import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import FoodFilterCategory from '../api/Food/FoodFilterCategory';
import FoodCategory from '../api/Food/FoodCategory';
import ChatHeader from '../components/ChatPage/ChatHeader';
import MessageList from '../components/ChatPage/MessageList';
import MessageInput from '../components/ChatPage/MessageInput';
import QuickMenu from '../components/ChatPage/QuickMenu';
import SummaryGPT from '../api/GPT/SummaryGPT';

const ChatPage = () => {
    const { category } = useParams();
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [meals, setMeals] = useState([]);
    const [messages, setMessages] = useState([
        { id: 1, text: `안녕하세요. ${category} 챗봇입니다. 무엇을 도와드릴까요?`, sender: 'chat' },
    ]);
    const [newMessage, setNewMessage] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [mealsToShow, setMealsToShow] = useState([]);
    const [showCheckboxes, setShowCheckboxes] = useState(false);
    const messageEndRef = useRef(null);

    useEffect(() => {
        const cat = categories.find((cat) => cat.strCategory.toLowerCase() === category.toLowerCase());
        setCurrentCategory(cat);
    }, [category, categories]);

    useEffect(() => {
        const fetchMeals = async () => {
            const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
            const response = await fetch(url);
            const data = await response.json();
            setMeals(data.meals);
            const randomMeals = data.meals.sort(() => 0.5 - Math.random()).slice(0, 3);
            setMealsToShow(randomMeals);
        };

        fetchMeals();
    }, [category]);

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            const newMsg = { id: messages.length + 1, text: newMessage, sender: 'self' };
            setMessages((prevMessages) => [...prevMessages, newMsg]);
            setUserMessage(newMessage);
            setNewMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleQuickMenuClick = async (meal) => {
        const { idMeal, strMeal, strMealThumb } = meal;
        const firstMessage = {
            id: Date.now(),
            text: `${strMeal}`,
            image: strMealThumb,
            sender: 'chat',
        };
        setMessages((prevMessages) => [...prevMessages, firstMessage]);

        try {
            const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
            const response = await fetch(url);
            const data = await response.json();
            const instructions = data.meals[0].strInstructions;

            const recipe = {
                idMeal,
                strMeal,
                strMealThumb,
                instructions,
            };
            localStorage.setItem('lastRecipe', JSON.stringify(recipe));

            const summaryRequestMessage = `요리 ${strMeal}를 만드는 순서를 요약해주세요. 구체적인 숫자를 같이 제시해주세요.`;
            setUserMessage(summaryRequestMessage);
        } catch (error) {
            console.error('Error fetching meal details:', error);
        }
    };

    const toggleShowCheckboxes = () => {
        setShowCheckboxes((prev) => !prev);
    };

    const saveSelectedMessages = () => {
        const selectedMessages = messages.filter((message) => message.selected);
        const timestamp = new Date().toISOString();
        const messagesToSave = selectedMessages.map((message) => ({
            ...message,
            timestamp: timestamp,
        }));

        let savedMessages = JSON.parse(localStorage.getItem('savedMessages')) || [];
        savedMessages = [...savedMessages, ...messagesToSave];
        localStorage.setItem('savedMessages', JSON.stringify(savedMessages));

        setMessages((prevMessages) => prevMessages.map((message) => ({ ...message, selected: false })));
        setShowCheckboxes(false);
    };

    return (
        <div className="flex h-screen min-h-screen min-w-screen bg-gray-800 text-white">
            <div className="flex flex-col flex-grow">
                {currentCategory && <ChatHeader currentCategory={currentCategory} />}
                <QuickMenu meals={mealsToShow} handleQuickMenuClick={handleQuickMenuClick} />
                <MessageList messages={messages} setMessages={setMessages} showCheckboxes={showCheckboxes} />
                <div ref={messageEndRef} />
                <MessageInput
                    newMessage={newMessage}
                    setNewMessage={setNewMessage}
                    handleSendMessage={handleSendMessage}
                    handleKeyPress={handleKeyPress}
                    toggleShowCheckboxes={toggleShowCheckboxes}
                    saveSelectedMessages={saveSelectedMessages}
                    showCheckboxes={showCheckboxes}
                />
            </div>
            <FoodFilterCategory setMeal={setMeals} category={category} />
            <FoodCategory setCategories={setCategories} />
            {userMessage && <SummaryGPT userMessage={userMessage} setMessages={setMessages} />}
        </div>
    );
};

export default ChatPage;
