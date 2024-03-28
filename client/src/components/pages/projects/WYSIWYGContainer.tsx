import WYSIWYGImg from '../../../assets/images/wysiwyg.jpg';
import OpenLogo from '../../../assets/arrowopen.svg';
import GithubLogo from '../../../assets/github.svg';
import SkillsButtons from './SkillsButtons';
import ProjectInfoContainer from './ProjectInfoContainer';
import { motion, Variants } from 'framer-motion';

const WYSIWYGContainer = () => {
  const skills = ['React', 'MySQL', 'Express'];
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
    <motion.div
      initial="offscreen"
      whileInView={'onscreen'}
      className="w-full col-span-4 md:col-start-2 md:col-span-6 xl:col-span-4"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
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
          <div className="flex justify-between items-center">
            <SkillsButtons skills={skills} />
            {/*  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div>
            <a
              href="https://github.com/RalfiSlask/Fullstack-Document-Managment-API"
              target="_blank"
              className="shadow-shadow-icon open-icon hover:shadow-shadow-input transition-shadow duration-300 w-[40px] h-[40px] rounded-md flex justify-center items-center"
            >
              <img src={GithubLogo} alt="download" height="25" width="25" />
            </a>
          </div>
        </div> */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WYSIWYGContainer;
