import FrontendmentorImg from '../../../assets/images/frontendmentor.png';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import TypeOfWork from './ui/TypeOfWork';

const FrontendMentor = () => {
  const { ref, inView } = useInView({});

  useEffect(() => {}, [inView, ref]);

  return (
    <>
      <div ref={ref} className={`${inView ? 'opacity-100 ' : 'opacity-0'} h-full work right-[5%] top-[790px]`}>
        <div className="date">2022 - 2023</div>
        <div className="px-4 flex justify-center overflow-hidden">
          <img
            src={FrontendmentorImg}
            alt="frontendmentor"
            className="bg-white w-full rounded-lg shadow-shadow-white-icon-hover"
            width="200"
            height="85"
            loading="lazy"
          />
        </div>
        <TypeOfWork work="Self Study" />
      </div>
    </>
  );
};

export default FrontendMentor;
