import TechnicalSkills from './TechnicalSkills';
import { motion, Variants } from 'framer-motion';
import BrainVSC from '../../../assets/images/brain.png';

const SkillsPage = () => {
  const LargeTextVariant: Variants = {
    offscreen: {
      x: -50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'ease',
        bounce: 0,
        duration: 0.4,
      },
    },
  };

  const MediumTextVariant: Variants = {
    offscreen: {
      x: -50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: 0,

      transition: {
        type: 'ease',
        bounce: 0,
        duration: 0.4,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="min-h-[800px] grid-4812 w-full relative pt-40 max-w-[1200px] gap-y-10 md:gap-20 place-items-center ">
      <motion.div
        initial="offscreen"
        whileInView={'onscreen'}
        viewport={{ margin: '-350px', once: true }}
        transition={{ duration: 0.6 }}
        className="col-span-4 md:col-span-8 xl:col-span-4 "
      >
        <div className="col-span-4 relative flex flex-col gap-10 w-full sm:w-max-[500px] md:w-max-[700px] xl:w-max-[400px]">
          <motion.div variants={LargeTextVariant}>
            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] xl:text-[4rem] font-medium">
              Technical Skills <span className="text-blueColor">.</span>
            </h2>
          </motion.div>
          <motion.div variants={MediumTextVariant}>
            <div className="flex justify-between">
              <div className="flex flex-col gap-40 items-center">
                <p className="sm:text-[1rem] md:text-[1.5rem] sm:max-w-[500px] md:max-w-[800px] xl:max-w-[600px] leading-10">
                  Always trying to <span className="text-blueColor">add</span> to my repertoire of technolgies, either
                  if it is testing new <span className="text-blueColor">AI tools</span> or studying new{' '}
                  <span className="text-blueColor">frameworks</span> .
                </p>
              </div>
            </div>
          </motion.div>
          <img
            src={BrainVSC}
            alt="brain"
            width="300"
            loading="lazy"
            className="absolute left-1/2 -translate-x-1/2 bottom-[-850px] xl:bottom-[-250px] opacity-50"
          />
        </div>
      </motion.div>
      <TechnicalSkills />
    </div>
  );
};

export default SkillsPage;
