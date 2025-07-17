import BootstrapLogo from '../../../assets/icons/styling/bootstrap.png';
import Css3Logo from '../../../assets/icons/styling/css3.webp';
import FramerMotionLogo from '../../../assets/icons/styling/framer-motion.svg';
import GsapLogo from '../../../assets/icons/styling/gsap.svg';
import LessLogo from '../../../assets/icons/styling/less.png';
import MaterialUILogo from '../../../assets/icons/styling/material-ui.png';
import SassLogo from '../../../assets/icons/styling/sass.svg';
import TailwindLogo from '../../../assets/icons/styling/tailwind.webp';

const stylingIcons = [
  { name: 'CSS3', logo: Css3Logo, className: 'absolute left-[0] top-10 translate-x-1/2 skills-icon-container' },
  { name: 'Sass', logo: SassLogo, className: 'absolute right-0 top-10 -translate-x-1/2 skills-icon-container' },
  {
    name: 'Tailwind',
    logo: TailwindLogo,
    className: 'absolute left-0 bottom-10 translate-x-1/2 skills-icon-container',
  },
  {
    name: 'Bootstrap',
    logo: BootstrapLogo,
    className: 'absolute right-0 bottom-10 -translate-x-1/2 skills-icon-container',
  },
  {
    name: 'Material UI',
    logo: MaterialUILogo,
    className: 'absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 skills-icon-container',
  },
  {
    name: 'Less',
    logo: LessLogo,
    className: 'absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 skills-icon-container',
  },
  {
    name: 'Framer Motion',
    logo: FramerMotionLogo,
    className: 'absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 skills-icon-container',
  },
  {
    name: 'GSAP',
    logo: GsapLogo,
    className: 'absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 skills-icon-container',
  },
];

const Styling = () => {
  return (
    <>
      {stylingIcons.map(icon => (
        <div key={icon.name} className={icon.className + ' group flex flex-col items-center z-50'}>
          <img src={icon.logo} alt={icon.name + ' logo'} width="30" height="30" loading="lazy" />
          <span
            className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 transition-all duration-200 bg-gray-800 text-white text-xs rounded px-2 py-1 mt-2 shadow-lg z-10 whitespace-nowrap"
            style={{ position: 'absolute', top: '-2.2rem' }}
          >
            {icon.name}
          </span>
        </div>
      ))}
    </>
  );
};

export default Styling;
