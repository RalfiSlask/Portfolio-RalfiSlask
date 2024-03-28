import PokerImg from '../../../assets/images/poker.png';
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
        } date gray-shiny left-[5%] sm:left-[10%] md:left-[15%] xl:left-[20%] top-[300px] gray-shiny`}
      >
        2012 - 2022
      </div>

      <div
        className={`${
          inView ? 'opacity-100 blur-0 ' : 'opacity-0 blur-[5px]'
        } work right-[-10%] sm:right-[-15%] md:right-[-10%] xl:right-[-5%] 2xl:right-[-5%] top-[235px]`}
      >
        <div className="sm:w-[200px] md:w-[400px] h-[100px] flex justify-center">
          <img
            src={PokerImg}
            alt="mediainstitutet"
            width="400"
            height="100"
            loading="lazy"
            className="bg-white w-[300px] object-cover rounded-lg shadow-shadow-white-icon-hover"
          />
        </div>
        <TypeOfWork work="Professional Poker Player" />
      </div>
    </>
  );
};

export default PokerContainer;
