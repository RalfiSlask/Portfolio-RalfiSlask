import CsharpLogo from '../../../assets/icons/backend/csharp.png';
import ExpressLogo from '../../../assets/icons/backend/express.svg';
import LaravelLogo from '../../../assets/icons/backend/laravel.png';
import NodeLogo from '../../../assets/icons/backend/nodejs.svg';
import PhpLogo from '../../../assets/icons/backend/php.png';
import PythonLogo from '../../../assets/icons/backend/python.png';
import NextLogo from '../../../assets/icons/nextjs.png';
import TypescriptLogo from '../../../assets/icons/typescript.svg';

const backendIcons = [
  {
    name: 'C#',
    logo: CsharpLogo,
    className: 'absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 skills-icon-container',
  },
  {
    name: 'Python',
    logo: PythonLogo,
    className: 'absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 skills-icon-container',
  },
  {
    name: 'Node.js',
    logo: NodeLogo,
    className: 'absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 skills-icon-container',
  },
  {
    name: 'Express',
    logo: ExpressLogo,
    className: 'absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 skills-icon-container',
  },
  {
    name: 'Laravel',
    logo: LaravelLogo,
    className: 'absolute left-[0] top-10 translate-x-1/2 skills-icon-container',
  },
  {
    name: 'PHP',
    logo: PhpLogo,
    className: 'absolute right-0 top-10 -translate-x-1/2 skills-icon-container',
  },
  {
    name: 'Next.js',
    logo: NextLogo,
    className: 'absolute left-0 bottom-10 translate-x-1/2 skills-icon-container',
  },
  {
    name: 'TypeScript',
    logo: TypescriptLogo,
    className: 'absolute right-0 bottom-10 -translate-x-1/2 skills-icon-container',
  },
];

const Backend = () => {
  return (
    <>
      {backendIcons.map(icon => (
        <div key={icon.name} className={icon.className + ' group flex flex-col items-center z-50'}>
          <img
            src={icon.logo}
            alt={icon.name + ' logo'}
            width="30"
            height="30"
            loading="lazy"
            className={`${icon.name === 'MongoDB' ? 'w-[24px] h-[24px]' : ''}`}
          />
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

export default Backend;
