import WYSIWYGImg from '../../../assets/images/wysiwyg.webp';
import SkillsButtons from './SkillsButtons';
import ProjectInfoContainer from './ProjectInfoContainer';
import { motion, Variants } from 'framer-motion';
import AliveVSC from '../../../assets/images/alive.webp';

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
      className="w-full col-span-4 md:col-start-2 md:col-span-6 xl:col-span-4 relative"
    >
      <motion.div initial="offscreen" whileInView={'onscreen'} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <motion.div variants={projectVariant}>
          <div className="bg-primaryBG p-10 shadow-shadow-medium max-[550px] md:max-h-[450px] w-full col-span-4 group rounded-[25px] cursor-pointer flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-xl w-full">
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
