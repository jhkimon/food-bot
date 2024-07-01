import React, { useState, useEffect } from 'react';
import SideBar from '../components/Main/SideBar';
import Header from '../components/Main/Header';
import UserProfile from '../components/Main/UserProfile';
import SummaryGPT from '../api/GPT/SummaryGPT'; // Assuming correct path to SummaryGPT

const MyRecipe = () => {
    const [recipe, setRecipe] = useState(null);
    const [summaryRequestMessage, setSummaryRequestMessage] = useState('');
    const [gptResponse, setGptResponse] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const savedRecipe = localStorage.getItem('lastRecipe');
        if (savedRecipe) {
            const parsedRecipe = JSON.parse(savedRecipe);
            setRecipe(parsedRecipe);

            const { strMeal } = parsedRecipe;
            const message = `요리 ${strMeal}를 만드는 순서를 요약해주세요. 구체적인 숫자를 같이 제시해주세요.`;
            setSummaryRequestMessage(message);
        }
    }, []);

    useEffect(() => {
        const latestMessage = messages[messages.length - 1];
        if (latestMessage && latestMessage.sender === 'chatgpt') {
            setGptResponse(latestMessage.text);
        }
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

    return (
        <div className="flex h-screen bg-gray-800 text-white">
            <SideBar />
            <div className="flex flex-col flex-1 m-2 p-4">
                <Header />
                <UserProfile />
                {recipe ? (
                    <div className="mt-4">
                        <h2 className="font-bold text-2xl mb-4">My Last Saved Recipe</h2>
                        <h3 className="font-semibold text-xl mb-2">{recipe.strMeal}</h3>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-64 h-64 object-cover mb-4" />
                        {gptResponse ? (
                            <p>{processMessageText(gptResponse)}</p>
                        ) : (
                            <>
                                <SummaryGPT userMessage={summaryRequestMessage} setMessages={setMessages} />
                                <div className="font-semibold text-xl">값을 불러오는 중입니다...</div>
                            </>
                        )}
                    </div>
                ) : (
                    <p>No recipe saved.</p>
                )}
            </div>
        </div>
    );
};

export default MyRecipe;
