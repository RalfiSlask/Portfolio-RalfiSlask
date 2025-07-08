import AnchorText from '../../AnchorText';
import IntroHeading from './IntroHeading';

const LandingIntro = () => {
  return (
    <div className="col-span-4 md:col-span-8 xl:col-span-7 flex flex-col p-4 sm:p-6 gap-8 xl:gap-4 h-full w-full ">
      <div className="flex flex-col gap-8 ">
        <IntroHeading />
        <h2 className="text-center xl:text-start text-[1rem] sm:text-[1.25rem] md:text-[2rem] xl:text-[2.5rem]">
          Welcome to my digital canvas<span className="text-blueColor"> .</span>
        </h2>
      </div>

      <p className="text-[1rem] leading-7 sm:leading-9 tracking-wider">
        I am a fullstack developer from Sweden and here you can view my ever evolving{' '}
        <AnchorText text="Projects" href="#projects" />. Dive into my <AnchorText text="About" href="#about" /> section
        to uncover my passions from poker to CrossFit. Eager to collaborate or share feedback? Reach out via{' '}
        <AnchorText text="Contact Me" href="#contact" />. Let's navigate the digital realm together!
      </p>
    </div>
  );
};

export default LandingIntro;
