import AnchorText from '../../AnchorText';
import IntroHeading from './IntroHeading';

const LandingIntro = () => {
  return (
    <div className="flex flex-col p-6 gap-4 w-[450px] sm:w-[500px] md:w-[600px] xl:w-[680px] h-full  max-w-[1110px] ">
      <div className="flex flex-col gap-8 ">
        <IntroHeading />
        <h2 className="text-center text-[1.25rem] sm:text-[1.25rem] md:text-[2rem] xl:text-[2.5rem]">
          Welcome to my digital canvas<span className="text-blueColor"> .</span>
        </h2>
      </div>

      <p className="text-[1rem] leading-9 tracking-wider">
        I am a frontend developer from Sweden and here you can view my ever evolving{' '}
        <AnchorText text="Projects" href="#projects" />. Dive into my <AnchorText text="About" href="#about" /> section
        to uncover my passions from poker to CrossFit. Eager to collaborate or share feedback? Reach out via{' '}
        <AnchorText text="Contact Me" href="#contact" />. Let's navigate the digital realm together!
      </p>
    </div>
  );
};

export default LandingIntro;
