import MemoryImg from '../../../assets/images/memory.jpg';
import OpenLogo from '../../../assets/arrowopen.svg';
import GithubLogo from '../../../assets/github.svg';
import SkillsButtons from './SkillsButtons';
import ProjectInfoContainer from './ProjectInfoContainer';
import { motion, Variants } from 'framer-motion';
import GithubIcon from './GithubIcon';
import OpenProjectIcon from './OpenProjectIcon';

const MemoryContainer = () => {
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

  const skills = ['React', 'Typescript', 'Tailwind'];
  const projectInfo = {
    title: 'Memory Game',
    description:
      'Memory Game with both singleplayer and multiplayer options. Lets the user pick gridsize, theme and number of players.',
  };

  return (
    <a
      href="https://ralfislask.github.io/Memory-Game/"
      target="_blank"
      className="w-full col-span-4 md:col-start-2 md:col-end-8 xl:col-span-8"
    >
      <motion.div
        initial="offscreen"
        whileInView={'onscreen'}
        className="w-full col-span-4 md:col-start-2 md:col-end-8 xl:col-span-8"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div variants={projectVariant}>
          <div className="bg-primaryBG p-10 xl:max-h-[800px] shadow-shadow-medium w-full group rounded-[25px] cursor-pointer flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-xl w-full xl:w-[700px] xl:h-[500px]">
              <img
                src={MemoryImg}
                alt="memory"
                width="500"
                height="500"
                className="transition-transform duration-300 w-full h-full object-cover transform group-hover:scale-[110%]"
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

export default MemoryContainer;
