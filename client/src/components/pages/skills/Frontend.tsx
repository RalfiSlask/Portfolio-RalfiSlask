import ReactLogo from '../../../assets/react.svg';
import HtmlLogo from '../../../assets/html.png';
import CSS3Logo from '../../../assets/css3.png';
import JavascriptLogo from '../../../assets/javascript.svg';
import SassLogo from '../../../assets/sass.svg';
import VueLogo from '../../../assets/vuejs.svg';
import TypescriptLogo from '../../../assets/typescript.svg';
import TailwindLogo from '../../../assets/tailwind.png';
import { Parallax } from 'react-scroll-parallax';

const Frontend = () => {
  return (
    <>
      <div className="absolute left-[0] top-10 translate-x-1/2 skills-icon-container">
        <img src={ReactLogo} alt="react" width="30" height="30" loading="lazy" className="absolute" />
      </div>
      <div className="absolute right-0 top-10 -translate-x-1/2 skills-icon-container">
        <img src={HtmlLogo} alt="html" width="25" height="25" loading="lazy" />
      </div>
      <div className="absolute left-0 bottom-10 translate-x-1/2 skills-icon-container">
        <img src={CSS3Logo} alt="css3" width="25" height="25" loading="lazy" />
      </div>
      <div className="absolute right-0 bottom-10 -translate-x-1/2 skills-icon-container">
        <img src={JavascriptLogo} alt="javascript" width="28" height="28" className="rounded-lg" loading="lazy" />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 skills-icon-container">
        <img src={TypescriptLogo} alt="typescript" width="28" height="28" className="rounded-lg" loading="lazy" />
      </div>
      <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 skills-icon-container">
        <img src={VueLogo} alt="vue" width="30" height="30" loading="lazy" />
      </div>
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 skills-icon-container">
        <img src={TailwindLogo} alt="tailwind" width="30" height="30" loading="lazy" />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 skills-icon-container">
        <img src={SassLogo} alt="sass" width="30" height="30" loading="lazy" />
      </div>
    </>
  );
};

export default Frontend;
