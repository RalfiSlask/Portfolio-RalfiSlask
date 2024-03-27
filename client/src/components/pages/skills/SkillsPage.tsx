import TechnicalSkills from './TechnicalSkills';
import { motion, Variants } from 'framer-motion';

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
    <div className="min-h-[800px] w-full flex flex-col sm:items-center md:items-center sm:flex-col xl:flex-row pt-40 max-w-[1200px] sm:gap-10 md:gap-20 xl:justify-between">
      <motion.div
        initial="offscreen"
        whileInView={'onscreen'}
        viewport={{ margin: '-350px', once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col gap-10 w-[400px] sm:w-[500px] md:w-[700px] xl:w-[400px]">
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
        </div>
      </motion.div>
      <TechnicalSkills />
    </div>
  );
};

export default SkillsPage;
