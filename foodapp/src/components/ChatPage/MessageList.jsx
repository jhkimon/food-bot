import React, { useEffect, useRef } from 'react';

const MessageList = ({ messages, setMessages, showCheckboxes }) => {
    const messageEndRef = useRef(null);

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const processMessageText = (text) => {
        const parts = text.split(/(\d+\.)+/);
        return parts.map((part, index) => (
            <React.Fragment key={index}>
                {index !== 1 && part.match(/^\d+\./) ? (
                    <>
                        <br />
                        <br />
                    </>
                ) : null}
                {part}
            </React.Fragment>
        ));
    };

    const toggleSelectMessage = (id) => {
        setMessages((prev) =>
            prev.map((message) => (message.id === id ? { ...message, selected: !message.selected } : message))
        );
    };

    const handleItemClick = (id) => {
        if (showCheckboxes) {
            toggleSelectMessage(id);
        }
    };

    return (
        <div className="flex flex-col flex-grow p-4 space-y-4 overflow-y-auto">
            {messages.map((message) => (
                <div
                    key={message.id}
                    className={`flex ${message.sender === 'self' ? 'justify-end' : 'justify-start'}`}
                    onClick={() => handleItemClick(message.id)}
                >
                    <div
                        className={`p-2 text-sm rounded-lg max-w-xs ${
                            message.sender === 'self' ? 'bg-yellow-500' : 'bg-gray-700'
                        } ${message.selected ? 'bg-opacity-75' : 'bg-opacity-100'}`}
                    >
                        {message.image && (
                            <img
                                src={message.image}
                                alt={message.text}
                                className="mb-2 rounded w-32 h-32 object-cover"
                            />
                        )}
                        {processMessageText(message.text)}
                    </div>
                    {showCheckboxes && (
                        <input
                            type="checkbox"
                            checked={message.selected || false}
                            onChange={() => toggleSelectMessage(message.id)}
                            className="ml-2 transform scale-400"
                            onClick={(e) => e.stopPropagation()}
                        />
                    )}
                </div>
            ))}
            <div ref={messageEndRef} />
        </div>
    );
};

export default MessageList;
