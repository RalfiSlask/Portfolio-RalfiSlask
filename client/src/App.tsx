import Header from './components/Header';
import LandingIntro from './components/pages/landing/LandingIntro';
import AboutPage from './components/pages/about/AboutPage';
import SocialMediaNavbar from './components/SocialMediaNavbar';
import Projects from './components/pages/projects/Projects';
import ArrowDownLogo from './assets/arrowdown.svg';
import ContactPage from './components/pages/contact/ContactPage';
import Background from './assets/images/bg3.jpg';
import LineDrawing from './components/LineDrawing';
import { ParallaxBanner } from 'react-scroll-parallax';
import Experience from './components/pages/experience/Experience';
import SkillsPage from './components/pages/skills/SkillsPage';
import SEO from './SEO';
import LottieAnimation from './LottieAnimation';

function App() {
  return (
    <>
      <SEO />
      <Header />
      <SocialMediaNavbar />

      <main className="px-6 min-h-screen w-screen flex gap-20 relative justify-center items-center" id="landing">
        <div className="rounded-[25px] shadow-shadow-medium flex-col md:flex-col flex xl:flex-row items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  gap-4 z-30 xl:h-[400px] ">
          <LandingIntro />
          <LottieAnimation />
        </div>
        <div className="absolute top-0 left-0 w-screen h-screen z-20">
          <ParallaxBanner layers={[{ image: Background, speed: -60 }]} className="object-cover w-full h-full" />
        </div>
        <a
          href="#about"
          style={{ scrollBehavior: 'smooth' }}
          className="rounded-full hover:bg-secondaryBG w-[45px] cursor-pointer h-[45px] transition-all duration-300 ease absolute bottom-14 z-40 flex justify-center items-center"
        >
          <img src={ArrowDownLogo} alt="arrow down icon" width="30" height="30" />
        </a>
      </main>

      <section className="px-6 flex justify-center w-screen pt-40 pb-80 relative" id="about">
        <AboutPage />
      </section>

      <section className="flex justify-center gray-shiny w-screen h-[2000px] relative">
        <LineDrawing />
        <Experience />
      </section>

      <section className="px-6 flex w-screen justify-center pt-40 pb-60 bg-gradient-to-r from-[#1a1a1a] to-[#171717]  ">
        <SkillsPage />
      </section>
      <section
        className="px-6 flex justify-center w-screen pt-40 pb-60 border-t border-solid border-opacity-10 border-blueColor"
        id="projects"
      >
        <Projects />
      </section>
      <section
        className="px-6 flex justify-center w-screen border-t border-solid py-10 sm:py-10 md:py-20 border-opacity-10 border-blueColor"
        id="contact"
      >
        <ContactPage />
      </section>
    </>
  );
}

export default App;
