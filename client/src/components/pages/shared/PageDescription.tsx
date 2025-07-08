import { motion } from 'framer-motion';
import { LargeTextVariant, MediumTextVariant } from '../../../utils/motionvariants';
import ProjectDescription from './ProjectDescription';
import { Context } from '../../../context/Context';
import { useContext } from 'react';

interface IPageInfo {
  title: string;
}

const PageDescription: React.FC<IPageInfo> = ({ title }) => {
  const context = useContext(Context);

  if (!context) return;

  const { isScreenSizeMobile } = context;

  return (
    <motion.div
      initial="offscreen"
      whileInView={'onscreen'}
      viewport={{ margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="col-span-4 md:col-span-8 xl:col-span-6 w-full flex flex-col items-center gap-10 xl:items-start xl:flex-col xl:gap-10 h-full"
    >
      {isScreenSizeMobile ? (
        <h2 className="text-[2.5rem] md:text-[3rem] xl:text-[4rem] font-medium w-[300px] xl:w-[250px] text-center xl:text-left">
          {title} <span className="text-blueColor">.</span>
        </h2>
      ) : (
        <motion.div variants={LargeTextVariant}>
          <h2 className="text-[2.5rem] md:text-[3rem] xl:text-[4rem] font-medium w-[400px] xl:w-[250px] text-center xl:text-left">
            {title} <span className="text-blueColor">.</span>
          </h2>
        </motion.div>
      )}

      {isScreenSizeMobile ? (
        <ProjectDescription />
      ) : (
        <motion.div variants={MediumTextVariant}>
          <ProjectDescription />
        </motion.div>
      )}
    </motion.div>
  );
};

export default PageDescription;
