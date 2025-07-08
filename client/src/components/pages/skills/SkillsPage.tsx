import TechnicalSkills from './TechnicalSkills';
import { motion } from 'framer-motion';
import BrainVSC from '../../../assets/images/brain.webp';
import SkillsDescription from './ui/SkillsDescription';
import { LargeTextVariant, MediumTextVariant } from '../../../utils/motionvariants';
import { useContext } from 'react';
import { Context } from '../../../context/Context';
import SkillsHeading from './ui/SkillsHeading';

const SkillsPage = () => {
  const context = useContext(Context);

  if (!context) return;

  const { isScreenSizeMobile } = context;

  return (
    <div className="min-h-[800px] grid-4812 w-full relative pt-10 max-w-[1200px] gap-y-10 md:gap-20 place-items-center ">
      {isScreenSizeMobile && (
        <div className="col-span-4 md:col-span-8 xl:col-span-4">
          <div className="col-span-4 relative flex flex-col gap-10 w-full sm:w-max-[500px] md:w-max-[700px] xl:w-max-[400px]">
            <SkillsHeading />
            <SkillsDescription />
            {/*            <img
              src={BrainVSC}
              alt="brain"
              width="300"
              loading="lazy"
              className="absolute left-1/2 -translate-x-1/2 bottom-[-750px] sm:bottom-[-850px] xl:bottom-[-250px] opacity-50"
            /> */}
          </div>
        </div>
      )}
      {!isScreenSizeMobile && (
        <motion.div
          initial="offscreen"
          whileInView={'onscreen'}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="col-span-4 md:col-span-8 xl:col-span-4"
        >
          <div className="col-span-4 relative flex flex-col gap-10 w-full sm:w-max-[500px] md:w-max-[700px] xl:w-max-[400px]">
            <>
              <motion.div variants={LargeTextVariant}>
                <SkillsHeading />
              </motion.div>
              <motion.div variants={MediumTextVariant}>
                <SkillsDescription />
              </motion.div>
            </>

            {/*   <img
              src={BrainVSC}
              alt="brain"
              width="300"
              loading="lazy"
              className="absolute left-1/2 -translate-x-1/2 bottom-[-850px] xl:bottom-[-250px] opacity-50"
            /> */}
          </div>
        </motion.div>
      )}

      <TechnicalSkills />
    </div>
  );
};

export default SkillsPage;
