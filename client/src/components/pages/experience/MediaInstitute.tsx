import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import MediaInstitutetImg from '../../../assets/images/mediainstitutet.webp';
import TypeOfWork from './ui/TypeOfWork';

const MediaInstitute = () => {
  const { ref, inView } = useInView({});

  useEffect(() => {}, [inView, ref]);

  return (
    <>
      <div
        ref={ref}
        className={`${
          inView ? 'opacity-100 blur-0 ' : 'opacity-0 blur-[5px]'
        } work md:left-[8%] md:translate-x-1/2 top-[300px] xl:translate-x-0 md:top-[150px] h-full`}
      >
        <div className="date">2023</div>
        <div className="px-4 flex justify-center overflow-hidden">
          <img
            src={MediaInstitutetImg}
            alt="mediainstitutet"
            aria-label="mediainstitutet"
            width="400"
            height="100"
            loading="lazy"
            className="bg-white w-full object-cover rounded-lg shadow-shadow-white-icon-hover"
          />
        </div>
        <TypeOfWork work="Frontend Student" />
      </div>
    </>
  );
};

export default MediaInstitute;
