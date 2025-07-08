import { motion, Variants } from 'framer-motion';
import FeedbackImg from '../../../assets/images/feedback.webp';
import ProjectInfoContainer from './ProjectInfoContainer';
import SkillsButtons from './SkillsButtons';

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
    <a
      href="https://ralfislask.github.io/Product-Feedback-App/"
      target="_blank"
      className="w-full col-span-4 md:col-span-3 xl:col-span-4 h-full"
    >
      <motion.div
        initial="offscreen"
        whileInView={'onscreen'}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="h-full"
      >
        <motion.div variants={projectVariant}>
          <div className="bg-primaryBG p-4 sm:p-10 shadow-shadow-medium max-h-[800px] md:max-h-[550px] w-full h-full col-span-4 group rounded-[25px] cursor-pointer flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-xl w-full min-h-[180px]">
              <img
                src={FeedbackImg}
                alt="memory"
                width="500"
                height="500"
                className="transition-transform duration-300 w-full h-full object-cover transform group-hover:scale-[110%]"
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

export default FeedbackContainer;
