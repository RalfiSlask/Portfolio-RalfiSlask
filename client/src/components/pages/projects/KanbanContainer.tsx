import SkillsButtons from './SkillsButtons';
import ProjectInfoContainer from './ProjectInfoContainer';
import KanbanImg from '../../../assets/images/kanban.jpg';
import { motion, Variants } from 'framer-motion';
import GithubIcon from './GithubIcon';
import OpenProjectIcon from './OpenProjectIcon';

const KanbanContainer = () => {
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

  const skills = ['React', 'Tailwind'];
  const projectInfo = {
    title: 'Kanban',
    description: 'Task managment application that visulizes tasks to improve workflow.',
  };

  return (
    <a
      href="https://ralfislask.github.io/Memory-Game/"
      target="_blank"
      className="w-full col-span-4 md:col-start-2 md:col-end-5 xl:col-span-4"
    >
      <motion.div
        initial="offscreen"
        whileInView={'onscreen'}
        className=""
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div variants={projectVariant}>
          <div className="bg-primaryBG p-10 shadow-shadow-medium max-h-[450px] w-full col-span-4 group rounded-[25px] cursor-pointer flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-xl w-full min-h-[180px]">
              <img
                src={KanbanImg}
                alt="memory"
                width="500"
                height="500"
                className="transition-transform duration-300 h-full w-full object-cover transform group-hover:scale-[110%]"
              />
            </div>
            <ProjectInfoContainer projectInfo={projectInfo} />
            <div className="flex justify-between">
              <SkillsButtons skills={skills} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </a>
  );
};

export default KanbanContainer;
