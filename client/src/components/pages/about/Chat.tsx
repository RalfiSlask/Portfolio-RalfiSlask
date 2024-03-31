import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import sendLogo from '../../../assets/icons/send.svg';
import MatteLogo from '../../../assets/images/Matte.webp';
import { Message } from '../../../utils/types';
import TypingIndicator from './ui/TypingIndicator';
import ChatDescription from './ui/ChatDescription';
import MatteIcon from '../../../assets/icons/MatteLogo.webp';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');
  const [displayedAnswer, setDisplayedAnswer] = useState('');
  const [typing, setTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<Message[]>([]);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleMessageOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target === null) return;
    setMessage(target.value);
  };

  const handleClickAndSendChatMessage = async (e: FormEvent) => {
    e.preventDefault();
    setHasInteracted(true);
    setMessage('');
    await sendChatMessageToServer();
  };

  const resetConversation = async () => {
    try {
      await fetch('https://server-2tab5.ondigitalocean.app/chat/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setConversationHistory([]); // Återställ konversationshistoriken på klienten
    } catch (err) {
      console.error('Error resetting conversation:', err);
    }
  };

  useEffect(() => {
    resetConversation();
  }, []);

  const sendChatMessageToServer = async () => {
    try {
      setTyping(true);
      const response = await fetch('https://server-2tab5.ondigitalocean.app/chat/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message, context: conversationHistory }),
      });

      if (!response.ok) {
        setTyping(false);
        return;
      }

      const aiAnswer = await response.json();

      setConversationHistory(prevHistory => [
        ...prevHistory,
        { role: 'user', content: message },
        { role: 'system', content: aiAnswer.message },
      ]);

      setAnswer(aiAnswer.message);
    } catch (err) {
      console.log(err, 'error');
    }
    setTyping(false);
  };

  useEffect(() => {
    setDisplayedAnswer('');
  }, [answer]);

  useEffect(() => {
    if (typing || answer === displayedAnswer) return;

    const timerId = setTimeout(() => {
      setDisplayedAnswer(prev => answer.slice(0, prev.length + 1));
    }, 50);

    return () => clearTimeout(timerId);
  }, [displayedAnswer, answer, typing]);

  return (
    <>
      <div className=" flex-col items-center md:items-start flex xl:flex-row w-full gap-8 justify-end shadow-shadow-medium p-6 min-h-[500px] rounded-[25px] h-full">
        <div className="w-full xl:w-[230px] h-full flex-col-reverse flex xl:flex-col justify-between items-center">
          <ChatDescription />
          <img src={MatteLogo} width="180" height="290" alt="Matthias" className="object-cover" loading="lazy" />
        </div>
        <div className="flex flex-col gap-10 md:justify-between w-full h-full xl:max-w-[375px] ">
          <div className="h-[375px] w-full shadow-shadow-input rounded-[10px] pl-6 py-6 pr-4 sm:pr-12 overflow-auto bg-secondaryBG">
            {hasInteracted && (
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <div className="rounded-full flex items-center justify-center bg-primaryBG h-[30px] w-[30px]">
                    <img src={MatteIcon} alt="Matte icon" width="20" height="20" />
                  </div>
                  <p>Matthias</p>
                </div>

                {typing ? <TypingIndicator /> : <p className="ml-4 sm:ml-12">{displayedAnswer}</p>}
              </div>
            )}
          </div>
          <form className="flex flex-col sm:flex-row items-center gap-4" onSubmit={handleClickAndSendChatMessage}>
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
