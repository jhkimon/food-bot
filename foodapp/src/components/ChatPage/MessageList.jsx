import React, { useEffect, useRef } from 'react';

const MessageList = ({ messages }) => {
    const messageEndRef = useRef(null);
    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="flex flex-col flex-grow p-4 space-y-4 overflow-y-auto">
            {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'self' ? 'justify-end' : 'justify-start'}`}>
                    <div
                        className={`p-2 rounded-lg max-w-xs ${
                            message.sender === 'self' ? 'bg-yellow-500' : 'bg-gray-700'
                        }`}
                    >
                        {message.image && <img src={message.image} alt={message.text} className="mb-2 rounded" />}
                        {message.text}
                    </div>
                </div>
            ))}
            <div ref={messageEndRef} />
        </div>
    );
};

export default MessageList;
