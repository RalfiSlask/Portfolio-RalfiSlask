const BuiltWith = () => {
  return (
    <div className="absolute right-1/2 translate-x-1/2 bottom-12 xl:bottom-10 md:bottom-16 xl:right-[10%] xl:translate-x-1/2 z-20 w-[400px] xl:w-[300px] h-20 opacity-60">
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
