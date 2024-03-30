import linkedinLogo from '../assets/icons/linkedin.svg';
import frontendmentorLogo from '../assets/icons/frontendmentor.svg';
import githubLogo from '../assets/icons/github.svg';
import { useEffect, useState } from 'react';

const SocialMediaNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav
      className={`${
        isVisible ? 'sm:left-10 md:left-[30px]' : 'sm:left-40 md:left-[-100px]'
      }  w-[50px] h-[160px] bg-primaryBG transition-left duration-700 z-50 fixed left-10 bottom-16 shadow-shadow-oval rounded-md flex flex-col items-center justify-center gap-4`}
    >
      <div className="social-media">
        <a href="https://www.linkedin.com/in/matthias-nilsson-68023b294/" target="_blank">
          <img src={linkedinLogo} alt="linkedin" width="25" height="25" />
        </a>
      </div>

      <div className="social-media w-[28px] h-[28px]">
        <a href="https://github.com/RalfiSlask" target="_blank">
          <img src={githubLogo} alt="github" width="28" height="28" />
        </a>
      </div>

      <div className="social-media">
        <a href="https://www.frontendmentor.io/profile/RalfiSlask" target="_blank">
          <img src={frontendmentorLogo} alt="frontendmentor" width="25" height="25" />
        </a>
      </div>
    </nav>
  );
};

export default SocialMediaNavbar;
