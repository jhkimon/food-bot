const QuickGPT = ({ userMessage, setMessages, messages }) => {
    useEffect(() => {
        const fetchChatGPTResponse = async () => {
            if (userMessage) {
                const apiKey = process.env.REACT_APP_GPT_KEY;
                if (!apiKey) {
                    console.error('API key is missing');
                    return;
                }

                const url = 'https://api.openai.com/v1/chat/completions';

                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${apiKey}`,
                        },
                        body: JSON.stringify({
                            model: 'gpt-3.5-turbo',
                            messages: [{ role: 'user', content: userMessage }],
                            temperature: 0.7,
                        }),
                    });

                    if (!response.ok) {
                        console.error('Failed to fetch ChatGPT response:', response.statusText);
                        return;
                    }

                    const data = await response.json();
                    if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
                        const chatGPTMessage = data.choices[0].message.content.trim();
                        setMessages((prevMessages) => [
                            ...prevMessages,
                            { id: prevMessages.length + 1, text: chatGPTMessage, sender: 'chatgpt' },
                        ]);
                    } else {
                        console.error('Unexpected response structure:', data);
                    }
                } catch (error) {
                    console.error('Error fetching ChatGPT response:', error);
                }

                // 요청 완료 후 userMessage 초기화
                setUserMessage('');
            }
        };

        fetchChatGPTResponse();
    }, [userMessage, setMessages, setUserMessage]);

    return null;
};
