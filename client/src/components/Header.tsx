import MatteLogo from '../assets/MatteLogo.png';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div
        className="fixed z-40 top-0 w-full h-[90px]"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0))',
        }}
      ></div>
      <header
        className={`bg-secondaryBG shadow-shadow-phone md:shadow-none md:bg-transparent z-50  header fixed px-12 w-full h-24 flex justify-between items-center`}
      >
        <div
          className={`${isVisible ? 'left-[15px]' : 'left-[-100px]'} transition-right duration-700 fixed flex gap-4`}
        >
          <img src={MatteLogo} alt="matte logo" width="100" height="100" />
        </div>
        <nav>
          <ul className={` flex gap-6 text-[1.25rem] header-ul`}>
            <li
              style={{ transitionDelay: '400ms' }}
              className={`${
                isVisible ? 'top-[35px]' : 'top-[-100px]'
              } right-[400px] transition-top translate-x-1/2 duration-700 fixed listItem `}
            >
              <a href="#landing" className="scroll-link">
                Home
              </a>
            </li>
            <li
              style={{ transitionDelay: '600ms' }}
              className={`${
                isVisible ? 'top-[35px]' : 'top-[-100px]'
              } right-[300px] translate-x-1/2  transition-top duration-700 fixed listItem `}
            >
              <a href="#about" className="scroll-link">
                About
              </a>
            </li>
            <li
              style={{ transitionDelay: '800ms' }}
              className={`${
                isVisible ? 'top-[35px]' : 'top-[-100px]'
              } right-[200px] translate-x-1/2 transition-top duration-700 fixed listItem `}
            >
              <a href="#projects" className="scroll-link">
                Projects
              </a>
            </li>
            <li
              style={{ transitionDelay: '1000ms' }}
              className={`${
                isVisible ? 'top-[35px]' : 'top-[-100px]'
              } right-[100px] translate-x-1/2 transition-top duration-700 fixed listItem `}
            >
              <a href="#contact" className="scroll-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
