import SketchItImg from '../../../assets/images/sketchit.jpg';
import GithubIcon from './GithubIcon';
import SkillsButtons from './SkillsButtons';
import ProjectInfoContainer from './ProjectInfoContainer';
import { motion, Variants } from 'framer-motion';

const SketchitContainer = () => {
  const skills = ['Typescript', 'Socket.io', 'Express', 'MongoDB'];
  const projectInfo = {
    title: 'Sketch It',
    description: 'Realtime multiplayer pictonary game using sockets.',
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
      className="w-full col-span-4 md:col-start-2 md:col-end-8 xl:col-span-8"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div variants={projectVariant}>
        <div className="bg-primaryBG p-10 shadow-shadow-medium w-full max-h-[450px] group rounded-[25px] cursor-pointer flex  gap-6">
          <div className="relative overflow-hidden rounded-xl w-[300px] min-h-[180px]">
            <img
              src={SketchItImg}
              alt="memory"
              width="500"
              height="500"
              className="transition-transform h-full object-cover duration-300 transform group-hover:scale-[110%]"
            />
          </div>

          <div className="flex flex-col justify-between">
            <ProjectInfoContainer projectInfo={projectInfo} />
            <div className="flex items-end justify-between w-full">
              <div className="max-w-[250px]">
                <SkillsButtons skills={skills} />
              </div>
              <GithubIcon link="https://github.com/RalfiSlask/GridSock-Game" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SketchitContainer;
