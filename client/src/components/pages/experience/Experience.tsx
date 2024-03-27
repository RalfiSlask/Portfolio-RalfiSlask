import PokerContainer from './PokerContainer';
import MediaInstitutet from './MediaInstitutet';
import FrontendMentor from './FrontendMentor';
import ResumeContainer from './ResumeContainer';

const Experience = () => {
  return (
    <div className="absolute w-[400px] sm:w-[500px] md:w-[1200px] max-w-[1200px] h-full">
      <div>
        <PokerContainer />
        <FrontendMentor />
        <MediaInstitutet />
        <ResumeContainer />
      </div>
    </div>
  );
};

export default Experience;
