import AWSLogo from '../../../assets/icons/tools/aws.webp';
import DigitalOceanLogo from '../../../assets/icons/tools/digitalocean.webp';
import FigmaLogo from '../../../assets/icons/tools/figma.svg';
import GitLogo from '../../../assets/icons/tools/git.svg';
import KubernetesLogo from '../../../assets/icons/tools/kubernetes.png';
import ViteLogo from '../../../assets/icons/tools/vite.svg';

const tooltips = [
  { name: 'Figma', logo: FigmaLogo, className: 'absolute left-[0] top-10 translate-x-1/2 skills-icon-container' },
  { name: 'Git', logo: GitLogo, className: 'absolute right-0 top-10 -translate-x-1/2 skills-icon-container' },
  {
    name: 'Kubernetes',
    logo: KubernetesLogo,
    className: 'absolute left-0 bottom-10 translate-x-1/2 skills-icon-container',
  },
  {
    name: 'AWS',
    logo: AWSLogo,
    className: 'absolute right-0 bottom-10 -translate-x-1/2 skills-icon-container rounded-full',
  },
  {
    name: 'Vite',
    logo: ViteLogo,
    className: 'absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 skills-icon-container',
  },
  {
    name: 'DigitalOcean',
    logo: DigitalOceanLogo,
    className: 'absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 skills-icon-container',
  },
];

const Tools = () => {
  return (
    <>
      {tooltips.map((tool, idx) => (
        <div key={tool.name} className={tool.className + ' group flex flex-col items-center z-50'}>
          <img
            src={tool.logo}
            alt={tool.name + ' logo'}
            width="30"
            height="30"
            loading="lazy"
            className={tool.name === 'AWS' ? 'rounded-full' : ''}
          />
          <span
            className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 transition-all duration-200 bg-gray-800 text-white text-xs rounded px-2 py-1 mt-2 shadow-lg z-10 whitespace-nowrap"
            style={{ position: 'absolute', top: '-2.2rem' }}
          >
            {tool.name}
          </span>
        </div>
      ))}
    </>
  );
};

export default Tools;
