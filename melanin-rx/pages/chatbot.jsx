import React from 'react';
import Image from "next/image";
import Link from "next/link";
import '../app/globals.css';
import { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  // use state for messages and input
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // send message
  const sendMessage = async (e) => {
    e.preventDefault();

    setMessages((currentMessages) => [...currentMessages, { text: input, sender: 'user' }]);
    console.log(input);
    console.log(messages);

    // send message to chatbot API
    const response = await fetch('/api/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text: input}),
    });

    // updates usestate with message input
    if (response.ok) {
      const { reply } = await response.json();
      setMessages((currentMessages) => [...currentMessages, { text: reply, sender: 'bot' }]);    
    } else {
      console.error('Error:', response.statusText);
    }

    setInput(''); // Clear input field
  };

  // input change handler
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // generate best possible script/prompt for patient to say
  function generateBestPrompt() {
    // Define your trigger words and associated response prompts (update with jia's word bubble)
    const triggerPrompts = {
      "preterm": ["Hi there! I'm worried about the possibility of preterm birth. It's been on my mind a lot lately, and I'm not sure what steps I should take to monitor it. Can you provide me with some guidance?", "Hello! I've been experiencing some symptoms that make me concerned about preterm birth. I'm not sure if what I'm feeling is normal or if I should be seeking medical attention. Can you help me understand what signs to watch out for?"],
      "weight": ["I've been struggling with managing my weight during pregnancy, and I'm unsure about what steps to take to ensure both my baby's and my own health. Can you provide me with some guidance on safe weight management during pregnancy?", "Pregnancy weight gain has been a concern for me, and I'm looking for advice on how to maintain a healthy weight throughout my pregnancy journey. Can you recommend any resources or strategies?"],
      "bmi": ["I recently calculated my BMI during pregnancy, and I'm unsure about what it means for me and my baby's health. Can you help me understand how BMI relates to pregnancy and what steps I should take to ensure a healthy outcome?", "I'm concerned about my BMI and its implications for my pregnancy. I'd like to discuss how I can maintain a healthy BMI and ensure the best possible outcome for my baby. Can you offer any advice or resources?"],
      "menopause": ["I think I might be experiencing symptoms of menopause, but I'm not sure what to expect or how to manage them. Can you provide me with some information about menopause and the available treatment options?", "I'm navigating the transition into menopause, and I'm feeling overwhelmed by the symptoms I'm experiencing. I'd appreciate some guidance on how to manage them effectively."],
      "pain": ["Pregnancy has brought about unexpected challenges, including persistent pain, which has been concerning. I'm seeking advice on how to effectively manage pregnancy-related pain and ensure a healthy outcome for both me and my baby.", "As I prepare for childbirth, I've been feeling anxious about the possibility of experiencing pain during pregnancy and labor. I'm seeking reassurance and guidance on how to cope with these fears and manage pain effectively."]
    };

    // Get the last message from the bot
    const lastBotMessage = messages[messages.length - 2]?.text;

    // Initialize variables to track the best prompt and its relevance score
    let bestPrompt = "";
    let maxScore = 0;

    // Iterate through trigger words and check if they are present in the last bot message
    for (const triggerWord in triggerPrompts) {
      if (lastBotMessage) {
        // Count occurrences of the trigger word in the last message
        const count = (lastBotMessage.match(new RegExp(triggerWord, "gi")) || []).length;
        
        // If the current trigger word has a higher count, update the best prompt
        if (count > maxScore) {
          bestPrompt = triggerPrompts[triggerWord]; // Select the first prompt associated with the trigger word
          maxScore = count;
        }
      }
    }
    
    return bestPrompt;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="flex items-center">
                {/* <Image
                  src="../logo.svg"
                  alt="MelaninRx Logo"
                  width={40}
                  height={40}
                /> */}
                <span className="ml-2 text-lg font-bold">MelaninRx</span>
              </a>
            </div>
            {/* Navbar links */}
            <div className="hidden md:block">
              <div className="flex space-x-4 items-center">
                <a href="/chatbot" className="text-white hover:bg-gray-700 px-3 py-2 mt-3 rounded-md text-sm font-medium">
                  Chatbot
                </a>
                <a href="/about" className="text-white hover:bg-gray-700 px-3 py-2 mt-3 rounded-md text-sm font-medium">
                  About the Issue
                </a>
                <a href="/resources" className="text-white hover:bg-gray-700 px-3 py-2 mt-3 rounded-md text-sm font-medium">
                  Health Analyst
                </a>
                <a href="/sources" className="text-white hover:bg-gray-700 px-3 py-2 mt-3 rounded-md text-sm font-medium">
                      Sources
                    </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main content */}
      <main className="flex-grow p-8">
        <div className="text-center mb-4">
          {/* Header */}
          <h1 className="text-4xl font-bold">ChatBot</h1>

          {/* Chat Window */}
          <div className="chat-window flex flex-col space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                <span className="text-gray-400">{message.sender}</span>: {message.text}
              </div>
            ))}
          </div>
          
          {/* Input box */}
        <form onSubmit={sendMessage} className="flex justify-center mt-4">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="p-2 border border-gray-400 rounded-md mr-2 focus:outline-none"
            placeholder="Type a message..."
            style={{ color: 'black' }}
          />
          <button type="submit" className="bg-brown text-white px-4 py-2 rounded-md hover:bg-brown-dark focus:outline-none">
            Send
          </button>
        </form>

        {/* Best Prompt */}
        <div className="mt-4">
          {generateBestPrompt().length > 0 && (
            <div className="prompt">
              <span className="text-gray-400">Script:</span>
              <ul className="list-disc list-inside">
                {generateBestPrompt().map((prompt, index) => (
                  <li key={index}>{prompt}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        </div>
      </main>
    </div>
  );
}

export default Chatbot;