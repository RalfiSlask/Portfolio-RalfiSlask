import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { BiUser } from 'react-icons/bi';
import MatteIcon from '../../../assets/icons/MatteLogo.webp';
import sendLogo from '../../../assets/icons/send.svg';
import MatteLogo from '../../../assets/images/Matte.webp';
import { Message } from '../../../utils/types';
import ChatDescription from './ui/ChatDescription';
import TypingIndicator from './ui/TypingIndicator';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');
  const [displayedAnswer, setDisplayedAnswer] = useState('');
  const [typing, setTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<Message[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);

  const scrollToBottom = () => {
    if (chatContainerRef.current && shouldAutoScroll) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
      const isScrolledToBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 10;
      setShouldAutoScroll(isScrolledToBottom);
    }
  };

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.addEventListener('scroll', handleScroll);
      return () => chatContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [conversationHistory, typing, displayedAnswer]);

  const handleMessageOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleClickAndSendChatMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = { role: 'user' as const, content: message };
    setConversationHistory(prev => [...prev, userMessage]);
    setMessage('');
    
    try {
      setTyping(true);
      const response = await fetch('https://server-2tab5.ondigitalocean.app/chat/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: userMessage.content,
          context: conversationHistory 
        }),
      });

      if (!response.ok) {
        setTyping(false);
        return;
      }

      const data = await response.json();
      
      setConversationHistory(prev => [...prev, {
        role: 'system' as const,
        content: data.message
      }]);

      setAnswer(data.message);
      setTyping(false);
    } catch (err) {
      console.log(err);
      setTyping(false);
    }
  };

  useEffect(() => {
    if (typing || answer === displayedAnswer) return;

    const timerId = setTimeout(() => {
      setDisplayedAnswer(prev => answer.slice(0, prev.length + 1));
    }, 50);

    return () => clearTimeout(timerId);
  }, [displayedAnswer, answer, typing]);

  useEffect(() => {
    setDisplayedAnswer('');
  }, [answer]);

  return (
    <div className="flex-col items-center md:items-start flex xl:flex-row w-full gap-8 justify-end shadow-shadow-medium p-6 min-h-[500px] rounded-[25px] h-full">
      <div className="w-full xl:w-[230px] h-full flex-col-reverse flex xl:flex-col justify-between items-center">
        <ChatDescription />
        <img src={MatteLogo} width="180" height="290" alt="Matthias" className="object-cover" loading="lazy" />
      </div>
      
      <div className="flex flex-col gap-10 md:justify-between w-full h-full xl:max-w-[375px]">
        <div 
          ref={chatContainerRef}
          className="h-[375px] w-full shadow-shadow-input rounded-[10px] pl-4 sm:pl-6 py-6 pr-4 sm:pr-6 
                   overflow-y-auto bg-secondaryBG scrollbar-thin scrollbar-thumb-primary/20 
                   scrollbar-track-transparent hover:scrollbar-thumb-primary/30"
        >
          <div className="flex flex-col gap-4">
            {conversationHistory.map((msg, index) => (
              <div 
                key={index} 
                className={`flex gap-2 sm:gap-4 items-start ${msg.role === 'user' ? 'flex-row-reverse ml-auto' : ''}`}
              >
                <div 
                  className={`rounded-full flex items-center justify-center ${
                    msg.role === 'user' 
                      ? 'bg-primaryBG min-w-8 min-h-8 max-h-8 max-w-8 mt-1' 
                      : 'bg-primaryBG min-w-8 min-h-8 max-h-8 max-w-8'
                  }`}
                >
                  {msg.role === 'user' ? (
                    <BiUser className="text-base sm:text-lg text-white" />
                  ) : (
                    <img src={MatteIcon} alt="Matte icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </div>
                <p 
                  className={`text-sm sm:text-base pt-1 ${
                    msg.role === 'user' 
                      ? 'text-right ml-auto' 
                      : 'text-left mr-auto'
                  }`}
                >
                  {index === conversationHistory.length - 1 && 
                   msg.role === 'system' && 
                   answer !== '' 
                    ? displayedAnswer
                    : msg.content}
                </p>
              </div>
            ))}
            {typing && <TypingIndicator />}
            <div ref={messagesEndRef} className="h-0 w-full" />
          </div>
        </div>

        <form 
          className="flex flex-col sm:flex-row items-center gap-4 w-full" 
          onSubmit={handleClickAndSendChatMessage}
        >
          <input
            onChange={handleMessageOnChange}
            type="text"
            id="chat"
            className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-secondaryBG 
                     border border-primaryBG focus:border-primary focus:ring-2 
                     focus:ring-primary/20 focus:outline-none shadow-sm 
                     text-sm sm:text-base"
            placeholder="Message Matthias..."
            value={message}
          />
          <button 
            className="icon-container bg-primaryBG hover:bg-primary text-white 
                     cursor-pointer transition-all duration-300 ease outline-none 
                     rounded-full p-2.5 sm:p-3 shadow-md hover:shadow-lg 
                     active:scale-95"
          >
            <img src={sendLogo} alt="send logo" className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
