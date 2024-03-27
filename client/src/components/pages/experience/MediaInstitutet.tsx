import MediaInstitutetImg from '../../../assets/images/mediainstitutet.png';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import TypeOfWork from './ui/TypeOfWork';

const MediaInstitutet = () => {
  const { ref, inView } = useInView({});

  useEffect(() => {}, [inView, ref]);

  return (
    <>
      <div
        className={`${
          inView ? 'opacity-100 blur-0 ' : 'opacity-0 blur-[5px]'
        } work right-[-15%] sm:w-[150px] md:w-[350px] top-[1175px]`}
      >
        <div className="w-[400px] h-[85px]">
          <img
            src={MediaInstitutetImg}
            alt="mediainstitutet"
            className="bg-white w-full object-cover rounded-lg shadow-shadow-white-icon-hover"
            width="400"
            height="85"
            loading="lazy"
          />
        </div>
        <TypeOfWork work="Frontend student" />
      </div>
      <div
        ref={ref}
        className={`${
          inView ? 'opacity-100 blur-0 ' : 'opacity-0 blur-[5px]'
        } date left-[50%] sm:left-[40%] md:left-[30%] xl:left-[30%] 2xl:left-[35%] top-[1240px]`}
      >
        2023 - Present
      </div>
    </>
  );
};

export default MediaInstitutet;
