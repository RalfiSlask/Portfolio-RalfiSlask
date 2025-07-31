import { motion } from 'framer-motion';
import CubeiaImg from '../../../assets/images/cubeia.webp';
import { projectVariant } from '../../../utils/motionvariants';
import ProjectInfoContainer from './ProjectInfoContainer';
import SkillsButtons from './SkillsButtons';

const CubeiaContainer = () => {
  const skills = ['Typescript', 'Sockets', 'Java', 'React', 'Redux'];
  const projectInfo = {
    title: 'Cubeia Poker',
    description:
      'Poker application that is sold to providers that so that they can offer poker to their customers. Offers cash games, tournaments and sit and go games in multiple languages.',
  };

  return (
    <a
      href="https://cubeia.com/poker/"
      target="_blank"
      className="w-full col-span-4 md:col-span-8 xl:col-span-8 h-full relative"
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
                src={CubeiaImg}
                alt="cubeia"
                width="500"
                height="500"
                className="transition-transform duration-300 w-full h-full object-cover transform group-hover:scale-[110%]"
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

export default CubeiaContainer;
