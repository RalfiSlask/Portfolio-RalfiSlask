import GithubLogo from '../../../assets/icons/github.svg';

const GithubIcon: React.FC<{ link: string }> = ({ link }) => {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        className="shadow-shadow-icon open-icon hover:shadow-shadow-input absolute transition-shadow duration-300 w-[40px] h-[40px] rounded-md flex justify-center items-center"
      >
        <img src={GithubLogo} alt="download" height="25" width="25" loading="lazy" />
      </a>
    </div>
  );
};

export default GithubIcon;
