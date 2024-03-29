import MatteLogo from '../assets/MatteLogo.png';
import { useEffect, useState } from 'react';
import HamburgerIcon from '../assets/icons/hamburger.svg';
import CloseIcon from '../assets/icons/close.svg';
import SocialMediaIconsMobile from './SocialMediaIconsMobile';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScreenSizeMobile, setIsScreenSizeMobile] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setIsScreenSizeMobile(true);
      } else {
        setIsScreenSizeMobile(false);
      }
      if (width > 768) {
        setIsPanelOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.addEventListener('resize', handleResize);
  }, []);

  const togglePanelOpen = () => {
    setIsPanelOpen(prev => !prev);
  };

  const handleClickOnLink = () => {
    setIsPanelOpen(false);
  };

  return (
    <>
      {isScreenSizeMobile && (
        <div
          className={`${
            isPanelOpen ? 'translate-y-0' : 'translate-y-[-350px]'
          } fixed bg-secondaryBG top-[90px] transition-all duration-500 z-50 w-screen h-[300px] shadow-shadow-medium`}
        >
          <nav className="w-full h-[90px h-full pt-10 px-6">
            <ul className={`flex gap-5 text-[1.25rem] flex-col items-center header-ul w-full h-full px-4`}>
              <li
                onClick={handleClickOnLink}
                style={{ transitionDelay: '400ms' }}
                className={`${
                  isVisible ? 'top-[35px]' : 'top-[-100px]'
                } right-[400px] transition-top duration-700 listItem `}
              >
                <a href="#landing" className="scroll-link">
                  Home
                </a>
              </li>
              <li
                onClick={handleClickOnLink}
                style={{ transitionDelay: '600ms' }}
                className={`${
                  isVisible ? 'top-[35px]' : 'top-[-100px]'
                } right-[300px] transition-top duration-700 listItem `}
              >
                <a href="#about" className="scroll-link">
                  About
                </a>
              </li>
              <li
                onClick={handleClickOnLink}
                style={{ transitionDelay: '800ms' }}
                className={`${isVisible ? 'top-[35px]' : 'top-[-100px]'} right-[200px] transition-top duration-700  `}
              >
                <a href="#projects" className="scroll-link">
                  Projects
                </a>
              </li>
              <li
                onClick={handleClickOnLink}
                style={{ transitionDelay: '1000ms' }}
                className={`${isVisible ? 'top-[35px]' : 'top-[-100px]'} right-[100px] transition-top duration-700  `}
              >
                <a href="#contact" className="scroll-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <div
        className="fixed z-40 top-0 w-screen h-[90px]"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0))',
        }}
      ></div>
      <header
        className={`bg-secondaryBG shadow-shadow-phone md:shadow-none md:bg-transparent z-50 header fixed px-12 w-screen h-24 flex justify-between items-center`}
      >
        <div
          className={`${isVisible ? 'left-[15px]' : 'left-[-100px]'} transition-right duration-700 fixed flex gap-4`}
        >
          <img src={MatteLogo} alt="matte logo" width="100" height="100" />
        </div>
        {isScreenSizeMobile && <SocialMediaIconsMobile />}
        {isScreenSizeMobile && (
          <div className="fixed right-[15px] cursor-pointer w-[40px] h-[40px] flex justify-center items-center">
            {isPanelOpen ? (
              <img
                src={CloseIcon}
                onClick={togglePanelOpen}
                alt="close icon"
                width="30"
                height="30"
                className="object-cover w-full transition-all duration-300 ease"
              />
            ) : (
              <img
                src={HamburgerIcon}
                onClick={togglePanelOpen}
                alt="hamburger icon"
                width="30"
                height="30"
                className="object-cover w-full transition-all duration-300 ease"
              />
            )}
          </div>
        )}

        {!isScreenSizeMobile && (
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
        )}
      </header>
    </>
  );
};

export default Header;
