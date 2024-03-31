import SketchItImg from '../../../assets/images/sketchit.webp';
import SkillsButtons from './SkillsButtons';
import ProjectInfoContainer from './ProjectInfoContainer';
import { motion } from 'framer-motion';
import { projectVariant } from '../../../utils/motionvariants';

const SketchitContainer = () => {
  const skills = ['Typescript', 'Socket.io', 'Express', 'MongoDB', 'Sass'];
  const projectInfo = {
    title: 'Sketch It',
    description: 'Realtime multiplayer pictonary game using sockets.',
  };

  return (
    <a
      href="https://github.com/RalfiSlask/GridSock-Game"
      target="_blank"
      className="w-full col-span-4 md:col-start-2 md:col-end-8 xl:col-span-8 relative"
    >
      <motion.div initial="offscreen" whileInView={'onscreen'} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <motion.div variants={projectVariant}>
          <div className="bg-primaryBG p-10 shadow-shadow-medium w-full xl:max-h-[450px] group rounded-[25px] overflow-y-hidden cursor-pointer flex flex-col xl:flex-row gap-6">
            <div className="relative overflow-hidden rounded-xl w-full min-h-[180px]">
              <img
                src={SketchItImg}
                alt="memory"
                width="500"
                height="500"
                className="transition-transform h-full object-cover w-full duration-300 transform group-hover:scale-[110%]"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-4 justify-between">
              <ProjectInfoContainer projectInfo={projectInfo} />
              <SkillsButtons skills={skills} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </a>
  );
};

export default SketchitContainer;
