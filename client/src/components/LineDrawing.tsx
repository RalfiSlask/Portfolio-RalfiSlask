import { useEffect, useRef, useContext, CSSProperties } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import { Context } from '../context/Context';

gsap.registerPlugin(ScrollTrigger);

const LineFollowingScroll = () => {
  const context = useContext(Context);

  if (!context) return;

  const { isScreenSizeMobile } = context;

  const svgRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true });

  const lineRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!lineRef.current) return;

    const path = lineRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      strokeLinecap: 'round',
      strokeWidth: '5px',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: `top +=1200`,
        end: 'bottom center',
        scrub: 1,
        once: true,
      },
    });

    tl.to(path, { strokeDashoffset: 0, duration: 6, ease: 'none' }, '<');
  }, [inView, lineRef.current]);

  const containerStyle: CSSProperties = {
    position: 'absolute', // TypeScript recognizes this specific string as valid
    width: '600px',
    height: '1200px',
    top: '400px',
    left: '50%',
    transform: 'translateX(-50%)',
    boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.2), inset -2px -2px 5px rgba(255, 255, 255, 0.5)',
    borderRadius: '10px',
  };

  return (
    <>
      {isScreenSizeMobile ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 2000" className="relative">
          <path className="theLine" d="M 50,0 L 50,1800" fill="none" stroke="#25CEDE" strokeWidth="5px" />
        </svg>
      ) : (
        <>
          <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox={`0 400 600 1200`} className="relative ">
            <defs>
              <filter id="neomorphism">
                <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="rgba(0, 0, 0, 0.5)" />
                <feDropShadow dx="-2" dy="-2" stdDeviation="2" floodColor="rgba(255, 255, 255, 0.5)" />
              </filter>
            </defs>
            <path
              ref={lineRef}
              className="theLine"
              d="M 290, 0 Q 450 230 300 450 T 130 750 Q 100 850 300 1000 T 520 1200 Q 610 1410 300 1700 L 300, 1800 "
              fill="none"
              stroke="#25CEDE"
            ></path>
          </svg>
        </>
      )}
      <div className="w-[75px] h-[50px] rounded-full shadow-shadow-icon bg-primaryBG shadow- left-1/2 -translate-x-1/2 top-[-30px] absolute z-10"></div>
    </>
  );
};
export default LineFollowingScroll;
