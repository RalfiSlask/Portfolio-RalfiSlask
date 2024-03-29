import MoviesImg from '../../../assets/images/movies.jpg';

import SkillsButtons from './SkillsButtons';
import ProjectInfoContainer from './ProjectInfoContainer';
import { motion, Variants } from 'framer-motion';
import GithubIcon from './GithubIcon';
import OpenProjectIcon from './OpenProjectIcon';

const MoviesContainer = () => {
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

  const skills = ['React'];
  const projectInfo = {
    title: 'Entertainment app',
    description: 'Filter and bookmark movies and tv-series in a dynamic way.',
  };

  return (
    <a
      href="https://ralfislask.github.io/Entertainment-Web-App/"
      target="_blank"
      className="w-full col-span-4 md:col-start-2 md:col-end-5 xl:col-span-4 "
    >
      <motion.div
        initial="offscreen"
        whileInView={'onscreen'}
        className="w-full"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="card" variants={projectVariant}>
          <div className="bg-primaryBG p-10 shadow-shadow-medium md:max-h-[500px] max-h-[700px] xl:max-h-[450px] group rounded-[25px] cursor-pointer flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-xl min-h-[180px]">
              <img
                src={MoviesImg}
                alt="memory"
                width="500"
                height="500"
                className="transition-transform duration-300 object-cover w-full h-full transform group-hover:scale-[110%] group:hover-opacity"
              />
            </div>
            <ProjectInfoContainer projectInfo={projectInfo} />
            <div className="flex justify-between items-center">
              <SkillsButtons skills={skills} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </a>
  );
};

export default MoviesContainer;
