import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import sendLogo from '../../../assets/send.svg';
import MatteLogo from '../../../assets/Matte.png';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');
  const [displayedAnswer, setDisplayedAnswer] = useState('');
  const [typing, setTyping] = useState(false);

  const handleMessageOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target === null) return;
    setMessage(target.value);
  };

  useEffect(() => {
    console.log(message);
  }, [message]);

  const handleClickAndSendChatMessage = async (e: FormEvent) => {
    e.preventDefault();
    setMessage('');
    await sendChatMessageToServer();
  };

  const sendChatMessageToServer = async () => {
    try {
      setTyping(true);
      const response = await fetch('http://localhost:3000/chat/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: 'mumme', message: message }),
      });

      if (!response.ok) {
        setTyping(false);
        return;
      }

      const aiAnswer = await response.json();
      console.log(aiAnswer);
      setAnswer(aiAnswer.message);
      setTyping(false);
    } catch (err) {
      console.log(err, 'error');
      setTyping(false);
    }
  };

  useEffect(() => {
    if (answer && !typing && answer.length > 0) {
      setDisplayedAnswer(answer.charAt(0));
    }
  }, [answer, typing]);

  useEffect(() => {
    if (answer && displayedAnswer === answer.charAt(0)) {
      let index = 1;

      const displayNextCharacter = () => {
        if (index < answer.length) {
          setDisplayedAnswer(prev => prev + answer.charAt(index));
          index++;
          setTimeout(displayNextCharacter, 50);
        }
      };

      if (answer.length > 1) {
        setTimeout(displayNextCharacter, 50);
      }
    }
  }, [displayedAnswer, typing]);

  return (
    <>
      <div className="bg-primaryBG flex sm:col-span-4 xl:col-span-7 w-full gap-8 justify-end shadow-shadow-medium p-6 min-h-[500px] rounded-[25px] h-full">
        <div className="w-[230px] h-full flex flex-col justify-between items-center">
          <p>
            Feel free to chat with my <span className="text-blueColor">clone </span>to the right here. I am here to
            <span className="text-blueColor"> engage</span> in all sorts of topics and discussions. What's on your{' '}
            <span className="text-blueColor">mind </span>
            today?
          </p>
          <img src={MatteLogo} width="180" height="290" alt="Matthias" className="object-cover" loading="lazy" />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="h-[375px] w-[360px] shadow-shadow-input rounded-[10px] p-4 overflow-auto bg-secondaryBG">
            {typing ? (
              <div className="typing-indicator">
                <span className="typing-indicator-dot"></span>
                <span className="typing-indicator-dot"></span>
                <span className="typing-indicator-dot"></span>
              </div>
            ) : (
              displayedAnswer
            )}
          </div>
          <form className="flex items-center gap-4" onSubmit={handleClickAndSendChatMessage}>
            <input
              onChange={e => {
                handleMessageOnChange(e);
              }}
              type="text"
              id="chat"
              className="chat-input"
              placeholder="Message Matthias..."
              value={message}
            />
            <button className="icon-container cursor-pointer transition-shadow duration-300 ease outline-none hover:shadow-shadow-input">
              <img src={sendLogo} alt="send logo" width="30" height="30" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;
