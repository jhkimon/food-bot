import React from 'react';

const MessageInput = ({
    newMessage,
    setNewMessage,
    handleSendMessage,
    handleKeyPress,
    toggleShowCheckboxes,
    saveSelectedMessages,
    showCheckboxes,
}) => {
    return (
        <div className="flex flex-col p-4 border-t border-gray-700">
            <textarea
                className="flex-grow p-2 text-black rounded-lg h-16 resize-none"
                placeholder="메시지를 입력해주세요."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <div className="flex md:flex-row md:items-center md:space-x-2 justify-between">
                {showCheckboxes && (
                    <>
                        <button
                            className="w-1/4 p-0.5 mt-3 rounded-lg text-sm bg-gray-500 text-white"
                            onClick={toggleShowCheckboxes}
                        >
                            Cancel
                        </button>
                        <button
                            className="w-1/4 p-0.5 mt-3 rounded-lg text-sm bg-blue-500 text-white"
                            onClick={saveSelectedMessages}
                        >
                            Save Chats
                        </button>
                    </>
                )}
                {!showCheckboxes && (
                    <button
                        className="w-1/4 p-0.5 mt-3 rounded-lg text-sm bg-blue-500 text-white"
                        onClick={toggleShowCheckboxes}
                    >
                        Save Chats
                    </button>
                )}
                <button
                    className={`w-1/4 p-0.5 mt-3 rounded-lg text-sm ${
                        newMessage.trim() ? 'bg-yellow-500 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                    }`}
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default MessageInput;
