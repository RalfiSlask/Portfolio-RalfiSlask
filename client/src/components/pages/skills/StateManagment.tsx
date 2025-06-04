import ContextApiLogo from '../../../assets/icons/state/context.webp';
import PiniaLogo from '../../../assets/icons/state/pinia.svg';
import ReduxLogo from '../../../assets/icons/state/redux.png';
import VuexLogo from '../../../assets/icons/state/vuex.png';

const StateManagment = () => {
  const stateManagmentIcons = [
    { name: 'Redux', logo: ReduxLogo, className: 'absolute left-[0] top-10 translate-x-1/2 skills-icon-container' },
    {
      name: 'Context API',
      logo: ContextApiLogo,
      className: 'absolute right-0 top-10 -translate-x-1/2 skills-icon-container',
    },
    {
      name: 'Vuex',
      logo: VuexLogo,
      className: 'absolute right-0 bottom-10 -translate-x-1/2 skills-icon-container rounded-full',
    },
    {
      name: 'Pinia',
      logo: PiniaLogo,
      className: 'absolute left-0 bottom-10 translate-x-1/2 skills-icon-container',
    },
  ];

  return (
    <>
      {stateManagmentIcons.map(icon => (
        <div key={icon.name} className={icon.className + ' group flex flex-col items-center z-50'}>
          <img
            src={icon.logo}
            alt={icon.name + ' logo'}
            width="30"
            height="30"
            loading="lazy"
            className={`${icon.name === 'Pinia' ? 'w-[24px] h-[24px]' : ''}`}
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

export default StateManagment;
