import Chat from './Chat';
import SpotifySection from './SpotifySection';
import { motion, Variants } from 'framer-motion';

const AboutPage = () => {
  const chatSpotifyVariant: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 25,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.8,
      },
    },
  };

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
    <div className="grid-fill-4812 px-6 flex flex-col gap-20 w-full relative items-center">
      <div className="grid-4812 max-w-[1200px] flex flex-col gap-10 w-full items-center xl:items-start">
        <motion.div
          initial="offscreen"
          whileInView={'onscreen'}
          viewport={{ margin: '-350px', once: true }}
          transition={{ duration: 0.6 }}
          className="col-span-4 md:col-start-2 md:col-end-8 xl:col-span-12"
        >
          <div className="flex flex-col gap-10 w-full">
            <motion.div variants={LargeTextVariant}>
              <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] xl:text-[4rem] font-medium">
                About Me <span className="text-blueColor">.</span>
              </h2>
            </motion.div>
            <motion.div variants={MediumTextVariant}>
              <div className="flex justify-between">
                <p className="text-[1rem] sm:text-[1.25rem] max-w-[800px] leading-10">
                  Experience the heart of my portfolio by engaging in{' '}
                  <span className="text-blueColor">conversation</span> with my replica or by
                  <span className="text-blueColor"> connecting </span>
                  through music. Lets embark on this journey together
                  <span className="text-blueColor"> .</span>
                </p>
              </div>
            </motion.div>
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
            <div className="flex flex-col xl:flex-row gap-10 min-h-[500px]">
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
