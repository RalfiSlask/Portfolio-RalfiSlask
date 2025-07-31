import { motion, Variants } from 'framer-motion';
import AliveVSC from '../../../assets/images/alive.webp';
import WYSIWYGImg from '../../../assets/images/wysiwyg.webp';
import ProjectInfoContainer from './ProjectInfoContainer';
import SkillsButtons from './SkillsButtons';

const WYSIWYGContainer = () => {
  const skills = ['React', 'MySQL', 'Express', 'WYSIWYG', 'Sass'];
  const projectInfo = {
    title: 'Document Managment',
    description: 'Fullstack document managment app featuring WYSIWYG Editor.',
  };

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

  return (
    <a
      href="https://github.com/RalfiSlask/Fullstack-Document-Managment-API"
      target="_blank"
      className="w-full col-span-4 md:col-span-4 xl:col-span-4 h-full relative"
    >
      <motion.div
        initial="offscreen"
        whileInView={'onscreen'}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full h-full"
      >
        <motion.div variants={projectVariant}>
          <div className="bg-primaryBG p-4 sm:p-10 shadow-shadow-medium max-h-[550px] w-full h-full group rounded-[25px] cursor-pointer flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-xl w-full min-h-[180px]">
              <img
                src={WYSIWYGImg}
                alt="memory"
                width="500"
                height="500"
                className="transition-transform duration-300 h-full w-full object-cover transform group-hover:scale-[110%]"
                loading="lazy"
              />
            </div>
            <ProjectInfoContainer projectInfo={projectInfo} />
            <SkillsButtons skills={skills} />
          </div>
        </motion.div>
      </motion.div>
      <img
        src={AliveVSC}
        alt="brain"
        width="300"
        loading="lazy"
        className="absolute bottom-[-260px] left-1/2 -translate-x-1/2 opacity-50"
      />
    </a>
  );
};

export default WYSIWYGContainer;
