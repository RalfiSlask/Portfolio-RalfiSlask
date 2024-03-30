import WYSIWYGImg from '../../../assets/images/wysiwyg.jpg';
import SkillsButtons from './SkillsButtons';
import ProjectInfoContainer from './ProjectInfoContainer';
import { motion, Variants } from 'framer-motion';

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
      className="w-full col-span-4 md:col-start-2 md:col-span-6 xl:col-span-4"
    >
      <motion.div initial="offscreen" whileInView={'onscreen'} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <motion.div variants={projectVariant}>
          <div className="bg-primaryBG p-10 shadow-shadow-medium max-h-[450px] w-full col-span-4 group rounded-[25px] cursor-pointer flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-xl w-full">
              <img
                src={WYSIWYGImg}
                alt="memory"
                width="500"
                height="500"
                className="transition-transform duration-300 h-full w-full object-cover transform group-hover:scale-[110%]"
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

export default WYSIWYGContainer;
