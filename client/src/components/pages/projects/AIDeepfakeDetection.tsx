import { motion, Variants } from 'framer-motion';
import MoviesImg from '../../../assets/images/ml.png';
import ProjectInfoContainer from './ProjectInfoContainer';
import SkillsButtons from './SkillsButtons';

const AIDeepfakeDetection = () => {
  const projectVariant: Variants = {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: {
      y: 15,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 1,
      },
    },
  };

  const skills = ['Python', 'Machine Learning', 'FFmpeg', 'Exiftool', 'AI'];
  const projectInfo = {
    title: 'AI Deepfake Detection',
    description: 'Detect deepfake sounds by using machine learning, spectrum & metadata analysis.',
  };

  return (
    <a
      href="https://github.com/RalfiSlask/ML-Voice-deepfake-detection"
      target="_blank"
      className="w-full col-span-4 md:col-span-8 xl:col-span-8 h-full"
    >
      <motion.div
        initial="offscreen"
        whileInView={'onscreen'}
        className="w-full h-full"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="card" variants={projectVariant}>
          <div className="bg-primaryBG p-4 sm:p-10 shadow-shadow-medium max-h-[550px] w-full h-full group rounded-[25px] cursor-pointer flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-xl min-h-[180px]">
              <img
                src={MoviesImg}
                alt="memory"
                width="500"
                height="500"
                className="transition-transform duration-300 object-cover w-full h-full transform group-hover:scale-[110%] group:hover-opacity"
                loading="lazy"
              />
            </div>
            <ProjectInfoContainer projectInfo={projectInfo} />
            <SkillsButtons skills={skills} />
          </div>
        </motion.div>
      </motion.div>
    </a>
  );
};

export default AIDeepfakeDetection;
