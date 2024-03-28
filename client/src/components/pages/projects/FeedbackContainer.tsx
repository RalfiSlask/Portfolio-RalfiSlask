import FeedbackImg from '../../../assets/images/feedback.jpg';
import SkillsButtons from './SkillsButtons';
import ProjectInfoContainer from './ProjectInfoContainer';
import { motion, Variants } from 'framer-motion';
import GithubIcon from './GithubIcon';
import OpenProjectIcon from './OpenProjectIcon';

const FeedbackContainer = () => {
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
        delay: 0.2,
      },
    },
  };

  const skills = ['React', 'Tailwind'];
  const projectInfo = {
    title: 'Product Feedback',
    description: 'Organizes feedback in a systemic and user-friendly manner.',
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView={'onscreen'}
      className="w-full col-span-4 md:col-span-3 xl:col-span-4 "
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div variants={projectVariant}>
        <div className="bg-primaryBG p-10 shadow-shadow-medium max-h-[800px] xl:max-h-[450px] w-full col-span-4 group rounded-[25px] cursor-pointer flex flex-col gap-6">
          <div className="relative overflow-hidden rounded-xl w-full min-h-[180px]">
            <img
              src={FeedbackImg}
              alt="memory"
              width="500"
              height="500"
              className="transition-transform duration-300 w-full h-full object-cover transform group-hover:scale-[110%]"
            />
          </div>
          <ProjectInfoContainer projectInfo={projectInfo} />
          <div className="flex justify-between items-center">
            <SkillsButtons skills={skills} />
            <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <GithubIcon link="https://github.com/RalfiSlask/Product-Feedback-App" />
              <OpenProjectIcon link="https://ralfislask.github.io/Product-Feedback-App/" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeedbackContainer;
