import Cubeia from './Cubeia';
import MediaInstitute from './DigitalIsland';
import DigitalIsland from './MediaInstitute';
import ResumeContainer from './ResumeContainer';

const Experience = () => {
  return (
    <div className="absolute max-w-[400px] sm:w-[500px] md:w-[1200px] sm:max-w-[1200px] h-full">
      <div>
        <MediaInstitute />
        <DigitalIsland />
        <Cubeia />
        <ResumeContainer />
      </div>
    </div>
  );
};

export default Experience;
