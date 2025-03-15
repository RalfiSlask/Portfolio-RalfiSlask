import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import DigitalIslandImg from '../../../assets/images/digital-island.png';
import TypeOfWork from './ui/TypeOfWork';

const MediaInstitute = () => {
  const { ref, inView } = useInView({});

  useEffect(() => {}, [inView, ref]);

  return (
    <>
      <div
        ref={ref}
        className={`${
          inView ? 'opacity-100 ' : 'opacity-0'
        } h-full work md:left-[60%] xl:left-[70%] md:-translate-x-1/2 top-[790px] md:top-[680px] xl:top-[650px]`}
      >
        <div className="date">2024 - 2025</div>
        <div className="px-4 flex justify-center overflow-hidden">
          <img
            src={DigitalIslandImg}
            alt="digital island"
            aria-label="digital island"
            className="bg-white w-full rounded-lg shadow-shadow-white-icon-hover"
            width="200"
            height="85"
            loading="lazy"
          />
        </div>
        <TypeOfWork work="Software developer" />
      </div>
    </>
  );
};

export default MediaInstitute;
