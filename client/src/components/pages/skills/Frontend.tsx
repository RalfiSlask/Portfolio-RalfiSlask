import HtmlLogo from '../../../assets/icons/html.webp';
import JavascriptLogo from '../../../assets/icons/javascript.svg';
import NextLogo from '../../../assets/icons/nextjs.png';
import ReactLogo from '../../../assets/icons/react.svg';
import SassLogo from '../../../assets/icons/sass.svg';
import TailwindLogo from '../../../assets/icons/tailwind.webp';
import TypescriptLogo from '../../../assets/icons/typescript.svg';
import VueLogo from '../../../assets/icons/vuejs.svg';

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
        <img src={NextLogo} alt="next" width="32" height="32" loading="lazy" />
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
