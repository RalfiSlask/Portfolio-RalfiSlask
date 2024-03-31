import ArrowLeft from '../../../assets/icons/arrowleft.svg';
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { motion, Variants } from 'framer-motion';
import { nameRegex, emailRegex } from '../../../utils/regex';
import { IFormInfo } from '../../../utils/types';

const ContactForm = () => {
  const inputVariant: Variants = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.8,
      },
    },
  };

  const buttonVariant: Variants = {
    offscreen: {
      x: 200,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.8,
      },
    },
  };

  const [isHovered, setIsHovered] = useState(false);
  const [formInfo, setFormInfo] = useState<IFormInfo>({
    name: '',
    email: '',
    message: '',
  });
  const [messageSuccessfull, setMessageSuccessFull] = useState('');
  const [emailNotValidText, setEmailNotValidText] = useState('');
  const [nameNotValidText, setNameNotValidText] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [displayMessages, setDisplayMessages] = useState(false);

  const handleChangeOnNameInput = (e: FormEvent<HTMLInputElement>, key: keyof IFormInfo) => {
    const target = e.target as HTMLInputElement;
    setFormInfo(prev => ({ ...prev, [key]: target.value }));
    setDisplayMessages(false);
    setMessageSuccessFull('');
    setEmailNotValidText('');
    setNameNotValidText('');
    validateForm();
  };

  const handleChangeOnTextArea = (e: FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setFormInfo(prev => ({ ...prev, message: target.value }));
    setDisplayMessages(false);
    setMessageSuccessFull('');
    setEmailNotValidText('');
    setNameNotValidText('');
    validateForm();
  };

  const validateForm = () => {
    const form = { ...formInfo };
    const isNameValid = nameRegex.test(form.name);
    const isEmailValid = emailRegex.test(form.email);
    if (form.name.trim().length === 0) {
      setNameNotValidText('Cant be empty');
    } else {
      if (!isNameValid) {
        setNameNotValidText('Name not valid');
      }
    }
    if (form.email.trim().length === 0) {
      setEmailNotValidText('Cant be empty');
    } else {
      if (!isEmailValid) {
        setEmailNotValidText('Not valid email');
      }
    }

    if (isNameValid && isEmailValid) {
      setIsFormValid(true);
      console.log('true');
    } else {
      console.log('false');
    }
  };

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    validateForm();
    setDisplayMessages(true);
    if (!isFormValid) return;
    setFormInfo({ name: '', email: '', message: '' });
    setDisplayMessages(false);
    try {
      const response = await axios.post(`https://server-2tab5.ondigitalocean.app/api/sendmail`, {
        mailInfo: {
          name: formInfo.name,
          email: formInfo.email,
          message: formInfo.message,
        },
      });

      const data = response.data;
      if (data) {
        setMessageSuccessFull('Message was sent!');
      }
    } catch (err) {
      console.log(err, 'error sending inputs');
    }
  };

  return (
    <form className="text-white flex flex-col gap-4 w-full" onSubmit={submitForm} autoComplete="none">
      <motion.div initial="offscreen" whileInView={'onscreen'} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <motion.div variants={inputVariant}>
          <div className="flex flex-col gap-2 items-end">
            <p className={`${displayMessages ? 'opacity-100' : 'opacity-0'} text-red-400 h-[20px]`}>
              {nameNotValidText}
            </p>
            <input
              onChange={e => {
                handleChangeOnNameInput(e, 'name');
              }}
              className="contact-input"
              type="text"
              placeholder="Name"
              value={formInfo.name}
              autoComplete="none"
            />
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView={'onscreen'}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <motion.div className="w-full" variants={inputVariant}>
          <div className="flex flex-col gap-2 items-end">
            <p className={`${displayMessages ? 'opacity-100' : 'opacity-0'} text-red-400 h-[20px]`}>
              {emailNotValidText}
            </p>
            <input
              onChange={e => {
                handleChangeOnNameInput(e, 'email');
              }}
              className="contact-input"
              type="text"
              placeholder="Email"
              value={formInfo.email}
              autoComplete="none"
            />
          </div>
        </motion.div>
      </motion.div>
      <motion.div initial="offscreen" whileInView={'onscreen'} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <motion.div variants={inputVariant}>
          <textarea
            onChange={e => {
              handleChangeOnTextArea(e);
            }}
            className="shadow-shadow-input rounded-[12px] w-full h-[260px] mt-8 outline-none p-6 bg-secondaryBG"
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
            style={{ resize: 'none' }}
            value={formInfo.message}
          ></textarea>
        </motion.div>
      </motion.div>

      <motion.div initial="offscreen" whileInView={'onscreen'} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <motion.div variants={buttonVariant}>
          <div className="flex justify-between items-center">
            <button
              className={`shadow-shadow-icon py-4 text-[1.25rem] h-[60px] rounded-xl text-left transition-gap duration-300 w-[300px] pl-6 relative overflow-hidden uppercase flex items-center 
            `}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p className="absolute z-10">Send Message</p>
              <img
                src={ArrowLeft}
                alt="arrow"
                width="30"
                height="30"
                className={`absolute z-10 transition-right duration-500 ${
                  isHovered ? 'right-[24px]' : 'right-[40px]'
                } right-8"`}
              />
              <span
                className={`absolute top-0 left-0 bg-blueColor bg-opacity-75 h-full ${
                  isHovered ? 'w-full transition-all duration-500' : 'w-0 transition-all duration-500'
                }`}
              ></span>
            </button>
            <p className="text-[1.25rem] text-blueColor">{messageSuccessfull}</p>
          </div>
        </motion.div>
      </motion.div>
    </form>
  );
};

export default ContactForm;
