import { motion, Variants } from 'framer-motion';
import DevlinksImg from '../../../assets/images/devlinks.webp';
import ProjectInfoContainer from './ProjectInfoContainer';
import SkillsButtons from './SkillsButtons';

const DevlinksContainer = () => {
  const skills = ['Styled Components', 'React'];
  const projectInfo = {
    title: 'Devlinks',
    description: 'Create links from relevant platforms and share these.',
  };

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
      },
    },
  };

  return (
    <a
      href="https://ralfislask.github.io/Link-Sharing-App/"
      target="_blank"
      className="w-full col-span-4 md:col-span-3 xl:col-span-4"
    >
      <motion.div
        initial="offscreen"
        whileInView={'onscreen'}
        className=""
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div variants={projectVariant}>
          <div className="bg-primaryBG p-4 sm:p-10 shadow-shadow-medium w-full max-h-[550px] xl:max-w-[450px] group rounded-[25px] cursor-pointer flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-xl min-h-[180px] w-full">
              <img
                src={DevlinksImg}
                alt="memory"
                width="500"
                height="500"
                className="transition-transform duration-300 min-h-[180px] h-full w-full object-cover transform group-hover:scale-[110%]"
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

export default DevlinksContainer;
