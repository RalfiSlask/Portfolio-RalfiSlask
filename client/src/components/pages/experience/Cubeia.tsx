import CubeiaImg from '../../../assets/images/Cubeia.png';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import TypeOfWork from './ui/TypeOfWork';

const Cubeia = () => {
  const { ref, inView } = useInView({});

  useEffect(() => {}, [inView, ref]);

  return (
    <>
      <div
        ref={ref}
        className={`${
          inView ? 'opacity-100 blur-0 ' : 'opacity-0 blur-[5px]'
        } work md:left-[35%] top-[1240px] md:top-[1200px] h-full`}
      >
        <div className="date">2024 - Present</div>
        <div className="px-4 flex justify-center w-full overflow-hidden">
          <img
            src={CubeiaImg}
            alt="cubeia ab logo"
            aria-label="cubeia ab logo"
            className="bg-white w-full object-cover rounded-lg shadow-shadow-white-icon-hover"
            width="400"
            height="85"
            loading="lazy"
          />
        </div>
        <TypeOfWork work="Frontend developer" />
      </div>
    </>
  );
};

export default Cubeia;
