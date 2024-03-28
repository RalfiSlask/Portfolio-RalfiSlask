import FrontendmentorImg from '../../../assets/images/frontendmentor.png';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import TypeOfWork from './ui/TypeOfWork';

const FrontendMentor = () => {
  const { ref, inView } = useInView({});

  useEffect(() => {}, [inView, ref]);

  return (
    <>
      <div
        className={`${
          inView ? 'opacity-100 blur-0 ' : 'opacity-0 blur-[5px]'
        } work right-[5%] top-[660px] bg-primaryBG`}
      >
        <div className="w-[200px] sm:w-[200px] md:w-[300px] xl:w-[400px] sm:h-[60px] md:h-[85px]">
          <img
            src={FrontendmentorImg}
            alt="mediainstitutet"
            className="bg-white w-full object-cover rounded-lg shadow-shadow-white-icon-hover"
            width="400"
            height="85"
            loading="lazy"
          />
        </div>
        <TypeOfWork work="Self Study" />
      </div>
      <div
        ref={ref}
        className={`${
          inView ? 'opacity-100 blur-0 ' : 'opacity-0 blur-[5px]'
        } date left-[2%] sm:left-[5%] md:left-[5%] xl:left-[5%] top-[750px]`}
      >
        2022 - 2023
      </div>
    </>
  );
};

export default FrontendMentor;
