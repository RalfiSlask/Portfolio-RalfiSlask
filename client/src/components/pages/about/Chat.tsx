import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import sendLogo from '../../../assets/icons/send.svg';
import MatteLogo from '../../../assets/images/Matte.png';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');
  const [displayedAnswer, setDisplayedAnswer] = useState('');
  const [typing, setTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState('');
  const index = useRef(1);

  const handleMessageOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target === null) return;
    setMessage(target.value);
  };

  const handleClickAndSendChatMessage = async (e: FormEvent) => {
    e.preventDefault();
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
      setConversationHistory(''); // Återställ konversationshistoriken på klienten
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
      console.log(aiAnswer);

      setAnswer(aiAnswer.message);
      setConversationHistory(aiAnswer.conversation.replace(`\nBot: ${aiAnswer.message}\n`, ''));
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
          <p className="text-[1rem] md:text-[1.25rem] xl:text-[1rem]">
            Feel free to chat with my <span className="text-blueColor">clone </span>to the right here. I am here to
            <span className="text-blueColor"> engage</span> in all sorts of topics and discussions. What's on your{' '}
            <span className="text-blueColor">mind </span>
            today?
          </p>
          <img src={MatteLogo} width="180" height="290" alt="Matthias" className="object-cover" loading="lazy" />
        </div>
        <div className="flex flex-col gap-10 md:justify-between w-full h-full xl:max-w-[375px] ">
          <div className="h-[375px] w-full shadow-shadow-input rounded-[10px] p-4 overflow-auto bg-secondaryBG">
            <div>{conversationHistory}</div>
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
