import PokerImg from '../../../assets/images/poker3.png';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import TypeOfWork from './ui/TypeOfWork';

const PokerContainer = () => {
  const { ref, inView } = useInView({});

  useEffect(() => {}, [inView, ref]);

  return (
    <>
      <div
        ref={ref}
        className={`${
          inView ? 'opacity-100 blur-0 ' : 'opacity-0 blur-[5px]'
        } work md:left-[20%] xl:left-[75%] top-[300px] h-full`}
      >
        <div className="date">2012 - 2022</div>
        <div className="px-4 flex justify-center overflow-hidden">
          <img
            src={PokerImg}
            alt="professional poker player"
            width="400"
            height="100"
            loading="lazy"
            className="bg-white w-full object-cover rounded-lg shadow-shadow-white-icon-hover"
          />
        </div>
        <TypeOfWork work="Professional Poker Player" />
      </div>
    </>
  );
};

export default PokerContainer;
