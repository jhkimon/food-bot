import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/Main/SideBar';
import Header from '../components/Main/Header';
import UserProfile from '../components/Main/UserProfile';

const MyRecipe = () => {
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();

    const handleMyClick = () => {
        navigate('/my-recipe');
    };

    const processMessageText = (text, timestamp) => {
        const formattedTimestamp = new Date(timestamp).toLocaleString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
        });

        const parts = text.split(/(\d+\.)+/);
        return parts.map((part, index) => (
            <React.Fragment key={index}>
                {index !== 0 && part.match(/^\d+\./) ? <br /> : null}
                {part}
                {index === 0 && <span className="text-sm text-gray-500 ml-2">({formattedTimestamp})</span>}
            </React.Fragment>
        ));
    };

    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem('savedMessages')) || [];
        setMessages(storedMessages);
    }, []);

    return (
        <div className="flex h-screen bg-gray-800 text-white">
            <SideBar />
            <div className="flex flex-col flex-1 m-2">
                <Header />
                <div className="flex-1 overflow-y-auto p-4">
                    <UserProfile handleMyClick={handleMyClick} />
                    {messages.length === 0 ? (
                        <p className="text-gray-400">저장된 메시지가 없습니다.</p>
                    ) : (
                        <ul className="space-y-4">
                            {messages.map((message) => (
                                <li key={message.id} className="bg-gray-700 p-4 rounded-lg">
                                    <p className="text-lg font-semibold">
                                        {processMessageText(message.text, message.timestamp)}
                                    </p>
                                    {message.image && (
                                        <img
                                            src={message.image}
                                            alt={message.text}
                                            className="w-20 h-20 rounded-lg m-2"
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyRecipe;
