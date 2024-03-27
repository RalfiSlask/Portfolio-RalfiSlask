import PageDescription from '../shared/PageDescription';
import AudiophileContainer from './AudiophileContainer';
import DevlinksContainer from './DevlinksContainer';
import FeedbackContainer from './FeedbackContainer';
import KanbanContainer from './KanbanContainer';
import MemoryContainer from './MemoryContainer';
import MoviesContainer from './MoviesContainer';
import SketchitContainer from './SketchitContainer';
import WYSIWYGContainer from './WYSIWYGContainer';
import { motion, Variants } from 'framer-motion';

const Projects = () => {
  const FadeInFromRight: Variants = {
    offscreen: {
      x: 50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: 0,

      transition: {
        type: 'ease',
        bounce: 0,
        duration: 0.6,
      },
    },
  };

  const FadeInFromRightDelayed: Variants = {
    offscreen: {
      x: 50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: 0,

      transition: {
        type: 'ease',
        bounce: 0,
        duration: 0.6,
        delay: 0,
      },
    },
  };

  const FadeInFromRightLast: Variants = {
    offscreen: {
      x: 50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: 0,

      transition: {
        type: 'ease',
        bounce: 0,
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="max-w-[1200px] w-full flex flex-col items-center gap-20 ">
      <div className="w-full flex-col items-center xl:items-start xl:flex-row gap-20 xl:gap-0 flex justify-between">
        <PageDescription title={'My Work'} />
        <motion.div
          initial="offscreen"
          className="flex flex-col gap-8 w-[600px] xl:w-[450px] items-center xl:items-start"
          whileInView={'onscreen'}
          viewport={{ margin: '-350px', once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-2 ">
            <motion.div variants={FadeInFromRight}>
              <h2 className="text-[1.5rem] text-center xl:text-left">Featured</h2>
            </motion.div>
            <motion.div variants={FadeInFromRightDelayed}>
              <p className="text-blueColor uppercase text-[1.25rem]">Audiophile E-commerce</p>
            </motion.div>
          </div>
          <motion.div variants={FadeInFromRightLast}>
            <AudiophileContainer />
          </motion.div>
        </motion.div>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-10 px-6 md:px-0">
        <div className="col-span-4 md:col-span-8 grid grid-cols-4 md:grid-cols-8 gap-10 xl:gap-16 max-h-[2500px] ">
          <div className="xl:max-h-[500px] col-span-4  md:col-span-8 grid gap-10 grid-cols-4 sm:grid-cols-4 md:grid-cols-8">
            <MoviesContainer />
            <FeedbackContainer />
          </div>
          <MemoryContainer />
          <SketchitContainer />
        </div>
        <div className="col-span-4 md:col-span-8 xl:col-span-4 grid-cols-4 md:grid-cols-8">
          <div className="grid gap-10 xl:gap-16 w-full col-span-4 md:col-span-8  xl:col-span-4 grid-cols-4 md:grid-cols-8 xl:grid-cols-4">
            <KanbanContainer />
            <DevlinksContainer />
            <WYSIWYGContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
