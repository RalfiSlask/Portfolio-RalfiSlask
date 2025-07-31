import { motion, Variants } from 'framer-motion';
import JumpyardImg from '../../../assets/images/jumpyard.webp';
import ProjectInfoContainer from './ProjectInfoContainer';
import SkillsButtons from './SkillsButtons';

const Jumpyard = () => {
  const skills = ['CMS', 'PHP', 'Alpine', 'Tailwind', 'MultiSite'];

  const projectVariant: Variants = {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: {
      y: 15,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 1,
        delay: 0.2,
      },
    },
  };

  const projectInfo = {
    title: 'JumpYard',
    description:
      'JumpYard is a Swedish trampoline and activity park chain offering fun and safe experiences for all ages. Is available in multiple languages.',
  };

  return (
    <a href="https://www.jumpyard.se/" target="_blank" className="w-full col-span-4 md:col-span-4 xl:col-span-4 h-full">
      <motion.div
        initial="offscreen"
        whileInView={'onscreen'}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="h-full"
      >
        <motion.div variants={projectVariant}>
          <div className="bg-primaryBG p-4 sm:p-10 shadow-shadow-medium max-h-[550px] w-full h-full group rounded-[25px] cursor-pointer flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-xl w-full min-h-[180px]">
              <img
                src={JumpyardImg}
                alt="jumpyard"
                width="500"
                height="500"
                className="transition-transform duration-300 w-full h-full object-cover transform group-hover:scale-[110%] group:hover-opacity"
                loading="lazy"
              />
            </div>
            <ProjectInfoContainer projectInfo={projectInfo} />

            <SkillsButtons skills={skills} />
          </div>
        </motion.div>
      </motion.div>
    </a>
  );
};

export default Jumpyard;
