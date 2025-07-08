const BuiltWith = () => {
  return (
    <div className="text-xs sm:text-sm absolute right-1/2 pt-4 translate-x-1/2 bottom-16 sm:bottom-24 xl:bottom-10 md:bottom-16 xl:right-[10%] xl:translate-x-1/2 z-20 w-[300px] sm:w-[400px] xl:w-[300px] h-14 opacity-60 xl:pr-2">
      <div>
        Page built with <span className="text-blueColor">React</span> &{' '}
        <span className="text-blueColor">Tailwind,</span> deployed with <span className="text-blueColor">Vite</span>.
        Integrated with <span className="text-blueColor">OpenAI</span> & <span className="text-blueColor">Spotify</span>{' '}
        api:s.
      </div>
    </div>
  );
};

export default BuiltWith;
