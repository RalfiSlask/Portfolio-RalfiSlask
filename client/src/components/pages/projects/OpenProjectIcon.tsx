import OpenLogo from '../../../assets/icons/arrowopen.svg';

const OpenProjectIcon: React.FC<{ link: string }> = ({ link }) => {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        className="shadow-shadow-icon open-icon hover:shadow-shadow-input absolute transition-shadow duration-300 w-[40px] h-[40px] rounded-md flex justify-center items-center"
      >
        <img src={OpenLogo} alt="download" height="25" width="25" loading="lazy" />
      </a>
    </div>
  );
};

export default OpenProjectIcon;
