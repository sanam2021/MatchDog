import React, { useState } from "react";
import styled from "styled-components";

//chat box
const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      const userMessage = {
        content: inputValue,
        isUser: true,
      };
      setMessages([...messages, userMessage]);

      // Generate robot response
      const robotResponse = generateRobotResponse(inputValue);
      setTimeout(() => {
        const robotMessage = {
          content: robotResponse,
          isUser: false,
        };
        setMessages([...messages, robotMessage]);
      }, 1000);

      setInputValue("");
    }
  };
//Generate response by robot
const generateRobotResponse = (input) => {
  const greetings = ["Hi!", "Hello!", "Hey there!"];
  const responses = [
    "I'm doing great!",
    "Wow, we're matched!",
    "Great, we are matched! How about discussing which park to go to so our dogs can meet?",
  ];
  const userMessage = input.toLowerCase();
  let robotResponse =
    "Sorry, I didn't understand. Can you please rephrase your question?";

  if (userMessage.includes("hi") || userMessage.includes("hello")) {
    robotResponse = getRandomElement(greetings);
  } else if (
    userMessage.includes("how are you") ||
    userMessage.includes("how's it going")
  ) {
    robotResponse = getRandomElement(responses);
  }

  return robotResponse;
};
 const getRandomElement = (array) => {
   const randomIndex = Math.floor(Math.random() * array.length);
   return array[randomIndex];
 };

  return (
    <ChatContainer>
      <StyledHeading>You Are Matched!!!</StyledHeading>
      <MessageContainer>
        {messages.map((message, index) => (
          <React.Fragment key={index}>
            {message.isUser ? (
              <UserMessage>{message.content}</UserMessage>
            ) : (
              <RobotMessage>{message.content}</RobotMessage>
            )}
          </React.Fragment>
        ))}
      </MessageContainer>


      <InputSection>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <Button onClick={handleSendMessage}>Send</Button>
      </InputSection>
    </ChatContainer>
  );
};

//style
    const ChatContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #ef8172;
      padding: 2rem;
    `;

    const MessageContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 400px;
      max-height: 400px;
      overflow-y: auto;
      padding: 1rem;
      background-color: #ff4c68;
      color: white;
      border-radius: 8px;
      margin-bottom: 1rem;
    `;

    const InputSection = styled.div`
      width: 250px;
      height: 150px;
      border: none;

      padding: 3rem;
    `;
    const UserMessage = styled.div`
      align-self: flex-end;
      background-color: #ef8172;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      margin-bottom: 0.5rem;
    `;

    const RobotMessage = styled.div`
      align-self: flex-start;
      background-color: #ff4c68;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      margin-bottom: 0.5rem;
    `;
    const Button = styled.button`
      display: inline-block;
      padding: 10px 20px;
      font-size: 1rem;
      background-color: #fff;
      color: #ef8172;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #ff4c68;
        color: #fff;
      }
    `;
    const StyledHeading = styled.h1`
      opacity: 1;
      transition: opacity 0.5s ease;
      animation: fadeIn 5s;
      font-weight: 500;
      color: white;

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 4;
        }
      }
    `;

export default ChatBox;
