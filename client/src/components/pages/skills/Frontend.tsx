import HtmlLogo from '../../../assets/icons/html.webp';
import JavascriptLogo from '../../../assets/icons/javascript.svg';
import NextLogo from '../../../assets/icons/nextjs.png';
import ReactLogo from '../../../assets/icons/react.svg';
import SassLogo from '../../../assets/icons/sass.svg';
import TailwindLogo from '../../../assets/icons/tailwind.webp';
import TypescriptLogo from '../../../assets/icons/typescript.svg';
import VueLogo from '../../../assets/icons/vuejs.svg';

const frontendIcons = [
  { name: 'React', logo: ReactLogo, className: 'absolute left-[0] top-10 translate-x-1/2 skills-icon-container' },
  { name: 'HTML', logo: HtmlLogo, className: 'absolute right-0 top-10 -translate-x-1/2 skills-icon-container' },
  { name: 'Next.js', logo: NextLogo, className: 'absolute left-0 bottom-10 translate-x-1/2 skills-icon-container' },
  {
    name: 'JavaScript',
    logo: JavascriptLogo,
    className: 'absolute right-0 bottom-10 -translate-x-1/2 skills-icon-container',
  },
  {
    name: 'TypeScript',
    logo: TypescriptLogo,
    className: 'absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 skills-icon-container',
  },
  {
    name: 'Vue.js',
    logo: VueLogo,
    className: 'absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 skills-icon-container',
  },
  {
    name: 'Tailwind',
    logo: TailwindLogo,
    className: 'absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 skills-icon-container',
  },
  {
    name: 'Sass',
    logo: SassLogo,
    className: 'absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 skills-icon-container',
  },
];

const Frontend = () => {
  return (
    <>
      {frontendIcons.map(icon => (
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

export default Frontend;
