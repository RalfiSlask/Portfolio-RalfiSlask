import { motion, Variants } from 'framer-motion';

interface IPageInfo {
  title: string;
}

const PageDescription: React.FC<IPageInfo> = ({ title }) => {
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
    <motion.div
      initial="offscreen"
      whileInView={'onscreen'}
      viewport={{ margin: '-350px', once: true }}
      transition={{ duration: 0.6 }}
      className="w-full flex flex-col items-center gap-10 xl:items-start xl:flex-col xl:gap-10 h-full"
    >
      <motion.div variants={LargeTextVariant}>
        <h2 className="text-[2.5rem] md:text-[3rem] xl:text-[4rem] font-medium w-[400px] xl:w-[250px] text-center xl:text-left">
          {title} <span className="text-blueColor text-[1.5rem] xl:text-[2.25rem]">.</span>
        </h2>
      </motion.div>
      <motion.div variants={MediumTextVariant}>
        <p className="text-[1rem] sm:text-[1.25rem] md:text-[1.35rem] leading-14 tracking-wide max-w-[600px]">
          Within my Github Profile, I maintain a collection of <span className="text-blueColor">60+ repositories </span>
          showcasing a commitment to continuous learning. This assortment includes both{' '}
          <span className="text-blueColor">frontend</span> and <span className="text-blueColor">fullstack </span>
          projects, reflecting my independent endeavors and excersises completed during my academic studies
          <span className="text-blueColor">.</span>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default PageDescription;
