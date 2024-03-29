import linkedinLogo from '../assets/linkedin.svg';
import frontendmentorLogo from '../assets/frontendmentor.svg';
import githubLogo from '../assets/github.svg';
import { useEffect, useState } from 'react';

const SocialMediaIconsMobile = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav
      className={` bg-secondaryBG md:bg-primaryBG  h-[60px] fixed left-1/2 -translate-x-1/2 duration-700 z-50 flex items-center gap-4`}
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

export default SocialMediaIconsMobile;
