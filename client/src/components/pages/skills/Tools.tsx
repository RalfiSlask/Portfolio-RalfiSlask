import FigmaLogo from '../../../assets/icons/figma.svg';
import GitLogo from '../../../assets/icons/git.svg';
import ViteLogo from '../../../assets/icons/vite.svg';
import DigitalOceanLogo from '../../../assets/icons/digitalocean.png';

const Tools = () => {
  return (
    <>
      <div className="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 left-0 skills-icon-container">
        <img
          src={FigmaLogo}
          alt="figma logo"
          width="30"
          height="30"
          className="object-cover w-[16px] h-[32px]"
          loading="lazy"
        />
      </div>
      <div className="absolute translate-x-1/2 top-1/2 -translate-y-1/2 right-0 skills-icon-container">
        <img src={GitLogo} alt="git logo" width="30" height="30" loading="lazy" />
      </div>
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 skills-icon-container">
        <img
          src={ViteLogo}
          alt="vite logo"
          width="30"
          height="30"
          className="object-cover w-[24px] h-[30px]"
          loading="lazy"
        />
      </div>
      <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 skills-icon-container">
        <img src={DigitalOceanLogo} alt="digital ocean logo" width="30" height="30" loading="lazy" />
      </div>
    </>
  );
};

export default Tools;
