import { useState } from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import PrevArrow from '../../../assets/icons/prev.svg';
import NextArrow from '../../../assets/icons/next.svg';
import Tools from './Tools';
import { motion } from 'framer-motion';
import { TechnicalSkillsVariant } from '../../../utils/motionvariants';
import { useContext } from 'react';
import { Context } from '../../../context/Context';

const TechnicalSkills = () => {
  const context = useContext(Context);

  if (!context) return;

  const { isScreenSizeMobile } = context;

  const [skillIndex, setSkillIndex] = useState(0);

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
    <>
      {isScreenSizeMobile ? (
        <div className="col-span-4 md:col-span-8 xl:col-span-7 flex justify-center relative items-center h-[700px] md:h-[650px] max-h-[500px] sm:max-w-[500px] md:max-w-[700px] w-full">
          <div className="w-full h-full">
            <article className="flex justify-center relative items-center gap-10 h-full max-h-[500px] max-w-[500px] md:max-w-[700px] w-full sm:col-span-4 xl:col-span-7 shadow-shadow-medium p-6 rounded-[25px]">
              <div className="max-w-[300px] h-[300px] sm:max-w-[400px] sm:h-[400px] w-full border border-solid border-secondaryBG rounded-full relative">
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

              <div
                className={`w-[125px] h-[125px] sm:w-[200px] sm:h-[200px] flex justify-center items-center absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 rounded-full shadow-shadow-skills`}
              >
                {skillIndex === 0 && (
                  <h2
                    className={`${
                      skillIndex === 0 ? 'opacity-100' : ''
                    } text-[1.25rem] sm:text-[1.5rem] text-blueColor`}
                  >
                    Frontend
                  </h2>
                )}
                {skillIndex === 1 && (
                  <h2
                    className={`${
                      skillIndex === 1 ? 'opacity-100' : ''
                    } text-[1.25rem] sm:text-[1.5rem] text-blueColor`}
                  >
                    Backend
                  </h2>
                )}
                {skillIndex === 2 && (
                  <h2
                    className={`${
                      skillIndex === 2 ? 'opacity-100' : ''
                    } text-[1.25rem] sm:text-[1.5rem] text-blueColor`}
                  >
                    Tools
                  </h2>
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
          </div>
        </div>
      ) : (
        <motion.div
          initial="offscreen"
          whileInView={'onscreen'}
          viewport={{ margin: '0px', once: true }}
          className="col-span-4 md:col-span-8 xl:col-span-7 flex justify-center relative items-center h-[700px] md:h-[650px] max-h-[500px] sm:max-w-[500px] md:max-w-[700px] w-full"
          transition={{ duration: 0.6 }}
        >
          <motion.div variants={TechnicalSkillsVariant} className="w-full h-full">
            <article className="flex justify-center relative items-center gap-10 h-full max-h-[500px] max-w-[500px] md:max-w-[700px] w-full sm:col-span-4 xl:col-span-7 shadow-shadow-medium p-6 rounded-[25px]">
              <div className="max-w-[400px] h-[400px] w-full border border-solid border-secondaryBG rounded-full relative">
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
      )}
    </>
  );
};

export default TechnicalSkills;
