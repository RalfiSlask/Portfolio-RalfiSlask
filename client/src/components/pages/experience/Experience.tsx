import PokerContainer from './PokerContainer';
import Cubeia from './Cubeia';
import MediaInstitute from './MediaInstitute';
import ResumeContainer from './ResumeContainer';

const Experience = () => {
  return (
    <div className="absolute w-[400px] sm:w-[500px] md:w-[1200px] max-w-[1200px] h-full">
      <div>
        <PokerContainer />
        <MediaInstitute />
        <Cubeia />
        <ResumeContainer />
      </div>
    </div>
  );
};

export default Experience;
