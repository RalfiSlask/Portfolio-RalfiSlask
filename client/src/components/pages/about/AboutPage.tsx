import { useContext } from 'react';
import Chat from './Chat';
import SpotifySection from './SpotifySection';
import { motion } from 'framer-motion';
import AboutMeHeading from './ui/AboutMeHeading';
import AboutMeDescription from './ui/AboutMeDescription';
import { chatSpotifyVariant, LargeTextVariant, MediumTextVariant } from '../../../utils/motionvariants';
import { Context } from '../../../context/Context';

const AboutPage = () => {
  const context = useContext(Context);

  if (!context) return;

  const { isScreenSizeMobile } = context;

  return (
    <div className="grid-fill-4812 px-6 flex flex-col gap-20 w-full relative items-center">
      <div className="grid-4812 max-w-[1200px] flex flex-col gap-10 w-full items-center xl:items-start">
        <motion.div
          initial="offscreen"
          whileInView={'onscreen'}
          viewport={{ margin: '-350px' }}
          transition={{ duration: 0.6 }}
          className="col-span-4 md:col-start-2 md:col-end-8 xl:col-span-12"
        >
          <div className="flex flex-col gap-10 w-full">
            {isScreenSizeMobile ? (
              <AboutMeHeading />
            ) : (
              <motion.div variants={LargeTextVariant}>
                <AboutMeHeading />
              </motion.div>
            )}
            {isScreenSizeMobile ? (
              <AboutMeDescription />
            ) : (
              <motion.div variants={MediumTextVariant}>
                <AboutMeDescription />
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView={'onscreen'}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="col-span-4 md:col-start-2 md:col-end-8 xl:col-span-12"
        >
          <motion.div variants={chatSpotifyVariant}>
            <div className="flex flex-col xl:flex-row gap-10 min-h-[500px] items-center">
              <Chat />
              <SpotifySection />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
