import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChatPage = () => {
    const { category } = useParams();
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(null);
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

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: 'self' }]);
            setNewMessage('');
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
                                {message.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex p-4 border-t border-gray-700">
                    <input
                        type="text"
                        className="flex-grow p-2 mr-2 text-black rounded-lg"
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button className="px-4 py-2 text-white bg-blue-500 rounded-lg" onClick={handleSendMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
