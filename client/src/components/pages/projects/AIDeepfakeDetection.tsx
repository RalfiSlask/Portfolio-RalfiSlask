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

  const skills = ['Python', 'Machine Learning'];
  const projectInfo = {
    title: 'AI Deepfake Detection',
    description: 'Detect deepfake sounds by using machine learning, spectrum & metadata analysis.',
  };

  return (
    <a
      href="https://github.com/RalfiSlask/ML-Voice-deepfake-detection"
      target="_blank"
      className="w-full col-span-4 md:col-start-2 md:col-end-5 xl:col-span-4 h-full"
    >
      <motion.div
        initial="offscreen"
        whileInView={'onscreen'}
        className="w-full h-full"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="card" variants={projectVariant}>
          <div className="bg-primaryBG p-4 sm:p-10 shadow-shadow-medium md:max-h-[550px] max-h-[700px] xl:max-h-[450px] group rounded-[25px] cursor-pointer flex flex-col gap-6">
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
            <div className="flex justify-between items-center">
              <SkillsButtons skills={skills} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </a>
  );
};

export default AIDeepfakeDetection;
