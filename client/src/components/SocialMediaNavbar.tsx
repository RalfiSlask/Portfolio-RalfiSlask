import linkedinLogo from '../assets/linkedin.svg';
import frontendmentorLogo from '../assets/frontendmentor.svg';
import githubLogo from '../assets/github.svg';
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
      } left-10 w-[80px] h-[20px] sm:w-[100px] sm:h-[30px] md:w-[50px] md:h-[160px] transition-left duration-700 z-50 fixed sm:bottom-10 md:bottom-16 shadow-shadow-oval bg-primaryBG rounded-md flex flex-row sm:flex-row md:flex-col items-center justify-center gap-4`}
    >
      <div className="hover:scale-[115%] transition-scale duration-300">
        <a href="https://www.linkedin.com/in/matthias-nilsson-68023b294/" target="_blank">
          <img src={linkedinLogo} alt="linkedin" width="25" height="25" />
        </a>
      </div>

      <div className="hover:scale-[115%] transition-scale duration-300 w-[28px] h-[28px]">
        <a href="https://github.com/RalfiSlask" target="_blank">
          <img src={githubLogo} alt="github" width="28" height="28" />
        </a>
      </div>

      <div className="hover:scale-[115%] transition-scale duration-300">
        <a href="https://www.frontendmentor.io/profile/RalfiSlask" target="_blank">
          <img src={frontendmentorLogo} alt="frontendmentor" width="25" height="25" />
        </a>
      </div>
    </nav>
  );
};

export default SocialMediaNavbar;
