import { motion, Variants } from 'framer-motion';
import MemoryImg from '../../../assets/images/memory.webp';
import ProjectInfoContainer from './ProjectInfoContainer';
import SkillsButtons from './SkillsButtons';

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

  const skills = ['React', 'Typescript', 'Tailwind', 'JavaScript'];
  const projectInfo = {
    title: 'Memory Game',
    description:
      'Memory Game with both singleplayer and multiplayer options. Lets the user pick gridsize, theme and number of players.',
  };

  return (
    <a
      href="https://ralfislask.github.io/Memory-Game/"
      target="_blank"
      className="w-full col-span-4 md:col-span-4 xl:col-span-4 h-full"
    >
      <motion.div
        initial="offscreen"
        whileInView={'onscreen'}
        className="w-full h-full"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div variants={projectVariant}>
          <div className="bg-primaryBG p-4 sm:p-10 shadow-shadow-medium max-h-[550px] w-full h-full group rounded-[25px] cursor-pointer flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-xl min-h-[180px]">
              <img
                src={MemoryImg}
                alt="memory"
                width="500"
                height="500"
                className="transition-transform duration-300 w-full object-cover transform group-hover:scale-[110%]"
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

export default MemoryContainer;
