import PokerImg from '../../../assets/images/poker3.webp';
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
        } work md:left-[8%] md:translate-x-1/2 top-[300px] xl:translate-x-0 md:top-[150px] h-full`}
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
        <TypeOfWork work="Poker" />
      </div>
    </>
  );
};

export default PokerContainer;
