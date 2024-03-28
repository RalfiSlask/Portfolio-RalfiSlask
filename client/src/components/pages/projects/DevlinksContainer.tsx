import DevlinksImg from '../../../assets/images/devlinks.jpg';
import OpenLogo from '../../../assets/arrowopen.svg';
import GithubLogo from '../../../assets/github.svg';
import SkillsButtons from './SkillsButtons';
import ProjectInfoContainer from './ProjectInfoContainer';
import { motion, Variants } from 'framer-motion';

const DevlinksContainer = () => {
  const skills = ['React', 'Styled Components'];
  const projectInfo = {
    title: 'Devlinks',
    description: 'Create links from relevant platforms and share these.',
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
      className="w-full col-span-4 md:col-span-3 xl:col-span-4"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div variants={projectVariant}>
        <div className="bg-primaryBG p-10 shadow-shadow-medium w-full max-h-[450px] xl:max-w-[450px] group rounded-[25px] cursor-pointer flex flex-col gap-6">
          <div className="relative overflow-hidden rounded-xl min-h-[180px] w-full">
            <img
              src={DevlinksImg}
              alt="memory"
              width="500"
              height="500"
              className="transition-transform duration-300 min-h-[180px] h-full w-full object-cover transform group-hover:scale-[110%]"
            />
          </div>
          <ProjectInfoContainer projectInfo={projectInfo} />
          <div className="flex justify-between items-center">
            <SkillsButtons skills={skills} />

            {/*    <div className="items-center gap-4 group-hover:flex hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div>
            <a
              href="https://github.com/RalfiSlask/Link-Sharing-App?tab=readme-ov-file"
              target="_blank"
              className="shadow-shadow-icon open-icon hover:shadow-shadow-input transition-shadow duration-300 w-[40px] h-[40px] rounded-md flex justify-center items-center"
            >
              <img src={GithubLogo} alt="download" height="25" width="25" />
            </a>
          </div>
          <div>
            <a
              href="https://ralfislask.github.io/Link-Sharing-App/"
              target="_blank"
              className="shadow-shadow-icon open-icon hover:shadow-shadow-input transition-shadow duration-300 w-[40px] h-[40px] rounded-md flex justify-center items-center"
            >
              <img src={OpenLogo} alt="download" height="25" width="25" />
            </a>
          </div>
        </div> */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DevlinksContainer;
