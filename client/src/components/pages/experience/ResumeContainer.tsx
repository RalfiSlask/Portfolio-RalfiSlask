import ResumeNavContainer from './ResumeNavContainer';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const ResumeContainer = () => {
  const { ref, inView } = useInView({});

  useEffect(() => {}, [inView, ref]);

  return (
    <div
      ref={ref}
      className={`${
        inView ? 'opacity-100 blur-0 ' : 'opacity-0 blur-[5px]'
      } text-white bg-secondaryBG z-10 transition-all duration-300 ease-in-out font-medium sm:text-[1rem] md:text-[1.25rem] xl:text-[1.5rem] left-1/2 -translate-x-1/2 absolute bottom-[100px]  shadow-shadow-medium p-6 rounded-[25px] max-h-[250px] w-[300px] flex flex-col items-center justify-between`}
    >
      <ResumeNavContainer />
    </div>
  );
};

export default ResumeContainer;
