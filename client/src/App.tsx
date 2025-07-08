import React, { Suspense, useContext } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import ArrowDownLogo from './assets/icons/arrowdown.svg';
import Background from './assets/images/bg3.jpg';
import Header from './components/Header';
import LineDrawing from './components/LineDrawing';
import ContactPage from './components/pages/contact/ContactPage';
import BuiltWith from './components/pages/contact/ui/BuiltWith';
import Copyright from './components/pages/contact/ui/Copyright';
import Experience from './components/pages/experience/Experience';
import LandingIntro from './components/pages/landing/LandingIntro';
import SkillsPage from './components/pages/skills/SkillsPage';
import { Context } from './context/Context';
import LottieAnimation from './LottieAnimation';
import SEO from './SEO';

const LazyLoadedAbout = React.lazy(() => import('./components/pages/about/AboutPage'));
const LazyLoadedExperience = React.lazy(() => import('./components/pages/experience/Experience'));
const LazyLoadedLineDrawing = React.lazy(() => import('./components/LineDrawing'));
const LazyLoadedProjects = React.lazy(() => import('./components/pages/projects/Projects'));

function App() {
  const context = useContext(Context);

  if (!context) return;

  const { isScreenSizeMobile } = context;

  return (
    <>
      <SEO />
      <Header />
      <main className="w-full h-full grid-4812">
        <section
          className="pt-28 sm:pt-40 grid-4812 pb-40 px-2 sm:px-6 min-h-screen w-screen gap-20 relative items-start sm:place-items-center"
          id="landing"
        >
          <div className="rounded-[25px] col-span-4 md:col-start-2 md:col-end-8 mx:max-w-[500px] place-items-center xl:justify-between xl:col-span-12 grid-4812 w-full shadow-shadow-medium gap-4 z-30 xl:max-w-[1200px]">
            <LandingIntro />
            <LottieAnimation />
          </div>
          <div className="absolute top-0 left-0 w-screen h-screen z-20">
            <ParallaxBanner layers={[{ image: Background, speed: -60 }]} className="object-cover w-full h-full" />
          </div>
          <a
            href="#about"
            style={{ scrollBehavior: 'smooth' }}
            className="rounded-full hover:bg-secondaryBG w-[45px] cursor-pointer h-[45px] transition-all left-1/2 -translate-x-1/2 duration-300 ease absolute bottom-14 sm:bottom-24 xl:bottom-14 z-40 flex justify-center items-center"
          >
            <img src={ArrowDownLogo} alt="arrow down icon" width="30" height="30" />
          </a>
        </section>

        <Suspense fallback={<div>Loading...</div>}>
          <section
            className="grid-fill-4812 grid-4812 px-4 sm:px-6 w-screen pt-10 md:pt-20 xl:pt-40 pb-20 md:pb-60 xl:pb-80 relative"
            id="about"
          >
            <LazyLoadedAbout />
          </section>
        </Suspense>

        <section className="grid-fill-4812 flex justify-center gray-shiny w-screen h-[2000px] relative">
          <LineDrawing />
          <Experience />
          {isScreenSizeMobile && (
            <div className="absolute w-[30px] h-[90%] top-0 shadow-shadow-path left-1/2 -translate-x-1/2 z-0"></div>
          )}
        </section>

        <section className="grid-fill-4812 px-4 sm:px-6 relative flex w-screen justify-center pt-10 md:pt-20 xl:pt-40 pb-60 xl:pb-60 bg-gradient-to-r from-[#1a1a1a] to-[#171717]  ">
          <SkillsPage />
        </section>
        <Suspense fallback={<div>Loading...</div>}>
          <section
            className="px-4 sm:px-6 grid-fill-4812 relative flex justify-center w-screen pt-10 md:pt-20 xl:pt-40 pb-80 xl:pb-60 border-t border-solid border-opacity-10 border-blueColor"
            id="projects"
          >
            <LazyLoadedProjects />
          </section>
        </Suspense>
        <section
          className="px-4 sm:px-10 grid-4812 grid-fill-4812 place-items-center relative w-screen border-t border-solid pb-48 pt-10 sm:pb-40 md:pb-60 xl:pt-20 xl:pb-60 border-opacity-10 border-blueColor"
          id="contact"
        >
          <ContactPage />
          <Copyright />
          <BuiltWith />
        </section>
      </main>
    </>
  );
}

export default App;
