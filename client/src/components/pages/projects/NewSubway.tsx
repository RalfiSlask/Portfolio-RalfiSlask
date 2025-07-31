import { motion, Variants } from 'framer-motion';
import NewSubwayImg from '../../../assets/images/nya-tunnelbanan.webp';
import ProjectInfoContainer from './ProjectInfoContainer';
import SkillsButtons from './SkillsButtons';

const NewSubway = () => {
  const skills = ['CMS', 'PHP', 'Alpine', 'Tailwind', 'MySQL'];

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
    title: 'Nya Tunnelbanan',
    description:
      'Website requested from Region Stockholm that presents information about the expansion of Stockholm’s metro system.',
  };

  return (
    <a
      href="https://nyatunnelbanan.se/"
      target="_blank"
      className="w-full col-span-4 md:col-span-4 xl:col-span-4 h-full"
    >
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
                src={NewSubwayImg}
                alt="newsubway"
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

export default NewSubway;
