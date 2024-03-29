import MediaInstitutetImg from '../../../assets/images/mediainstitutet.png';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import TypeOfWork from './ui/TypeOfWork';

const MediaInstitutet = () => {
  const { ref, inView } = useInView({});

  useEffect(() => {}, [inView, ref]);

  return (
    <>
      <div ref={ref} className={`${inView ? 'opacity-100 blur-0 ' : 'opacity-0 blur-[5px]'} work top-[1240px] h-full`}>
        <div className="date">2023 - Present</div>
        <div className="px-4 flex justify-center w-full overflow-hidden">
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
    </>
  );
};

export default MediaInstitutet;
