import { useState } from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import PrevArrow from '../../../assets/prev.svg';
import NextArrow from '../../../assets/next.svg';
import Tools from './Tools';
import { Parallax } from 'react-scroll-parallax';
import { motion, Variants } from 'framer-motion';

const TechnicalSkills = () => {
  const [skillIndex, setSkillIndex] = useState(0);

  const TechnicalSkillsVariant: Variants = {
    offscreen: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'ease',
        bounce: 0,
        duration: 0.8,
      },
    },
  };

  const increaseCount = () => {
    setSkillIndex(prev => {
      if (prev <= 1) {
        return prev + 1;
      } else if (prev === 2) {
        return 0;
      }
      return prev;
    });
  };

  const decreaseCount = () => {
    setSkillIndex(prev => {
      if (prev >= 1) {
        return prev - 1;
      } else if (prev === 0) {
        return 2;
      }
      return prev;
    });
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView={'onscreen'}
      viewport={{ margin: '-450px', once: true }}
      className="flex justify-center relative items-center h-[700px] md:h-[650px] max-h-[500px] sm:max-w-[500px] md:max-w-[700px] w-full sm:col-span-4 xl:col-span-7"
      transition={{ duration: 0.6 }}
    >
      <motion.div variants={TechnicalSkillsVariant} className="w-full h-full">
        <article className="flex justify-center relative items-center gap-10 h-full max-h-[500px] sm:max-w-[500px] md:max-w-[700px] w-full sm:col-span-4 xl:col-span-7 shadow-shadow-medium p-6 rounded-[25px]">
          {/*     <Parallax rotate={[-90, 90]} speed={0} easing={'easeInQuad'}> */}
          <div className="w-[400px] h-[400px] border border-solid border-secondaryBG rounded-full relative">
            <div className={`transition-opacity duration-300 ${skillIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
              <Frontend />
            </div>

            <div className={`transition-opacity duration-300 ${skillIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
              <Backend />
            </div>

            <div className={`transition-opacity duration-300 ${skillIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
              <Tools />
            </div>
          </div>
          {/*    </Parallax> */}
          <div
            className={`w-[200px] h-[200px] flex justify-center items-center absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 rounded-full shadow-shadow-skills`}
          >
            {skillIndex === 0 && (
              <h2 className={`${skillIndex === 0 ? 'opacity-100' : ''} text-[1.5rem] text-blueColor`}>Frontend</h2>
            )}
            {skillIndex === 1 && (
              <h2 className={`${skillIndex === 1 ? 'opacity-100' : ''} text-[1.5rem] text-blueColor`}>Backend</h2>
            )}
            {skillIndex === 2 && (
              <h2 className={`${skillIndex === 2 ? 'opacity-100' : ''} text-[1.5rem] text-blueColor`}>Tools</h2>
            )}
          </div>

          <button
            onClick={decreaseCount}
            className="skills-icon-left absolute left-12 top-4 cursor-pointer rounded-full p-2 shadow-shadow-icon hover:shadow-shadow-input transition-shadow duration-300 "
          >
            <img src={PrevArrow} alt="left arrow" height="25" width="25" />
          </button>
          <button
            onClick={increaseCount}
            className="skills-icon-right absolute right-12 top-4 cursor-pointer rounded-full p-2 shadow-shadow-icon hover:shadow-shadow-input transition-shadow duration-300 "
          >
            <img src={NextArrow} alt="right arrow" height="25" width="25" />
          </button>
        </article>
      </motion.div>
    </motion.div>
  );
};

export default TechnicalSkills;
