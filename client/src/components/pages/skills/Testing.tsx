import CypressLogo from '../../../assets/icons/testing/cypress.webp';
import JestLogo from '../../../assets/icons/testing/jest.png';
import ReactTestingLibraryLogo from '../../../assets/icons/testing/react-testing.png';
import VitestLogo from '../../../assets/icons/testing/vitest.png';

const Testing = () => {
  const testingIcons = [
    { name: 'Cypress', logo: CypressLogo, className: 'absolute left-[0] top-10 translate-x-1/2 skills-icon-container' },
    { name: 'Jest', logo: JestLogo, className: 'absolute right-0 top-10 -translate-x-1/2 skills-icon-container' },
    {
      name: 'React Testing Library',
      logo: ReactTestingLibraryLogo,
      className: 'absolute right-0 bottom-10 -translate-x-1/2 skills-icon-container rounded-full',
    },
    {
      name: 'Vitest',
      logo: VitestLogo,
      className: 'absolute left-0 bottom-10 translate-x-1/2 skills-icon-container',
    },
  ];

  return (
    <>
      {testingIcons.map(icon => (
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

export default Testing;
