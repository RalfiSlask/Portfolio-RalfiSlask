import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(ScrollTrigger);
const LineFollowingScroll = () => {
  // Create refs for SVG elements
  const svgRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true });

  const lineRef = useRef<SVGPathElement | null>(null); // Specify the type explicitly as SVGPathElement or null

  useEffect(() => {
    // Ensure lineRef.current is defined
    if (!lineRef.current) return;

    // Calculate the length of the path
    const path = lineRef.current;
    const length = path.getTotalLength();

    // Set initial styles for the path
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      strokeLinecap: 'round',
    });

    // Animation for the SVG elements
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: 'top center +=200',
        end: 'bottom center',
        scrub: true,
      },
    });

    // Define animations for each SVG element
    tl.to(path, { strokeDashoffset: 0, duration: 6, ease: 'none' }, '<'); // Extend the animation duration for the path
  }, [inView, lineRef.current]); // Include lineRef.current in the dependencies array

  return (
    <>
      <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 400 600 1200" className="relative">
        <path
          ref={lineRef}
          className="theLine"
          d="M 290, 0 Q 450 230 300 450 T 130 750 Q 100 850 300 1000 T 520 1200 Q 610 1410 300 1700 L 300, 1800 "
          fill="none"
          stroke="#25CEDE"
          strokeWidth="10px"
        ></path>
      </svg>
      <div className="w-[75px] h-[50px] rounded-full shadow-shadow-icon bg-primaryBG shadow- left-1/2 -translate-x-1/2 top-[-30px] absolute"></div>
    </>
  );
};
export default LineFollowingScroll;
