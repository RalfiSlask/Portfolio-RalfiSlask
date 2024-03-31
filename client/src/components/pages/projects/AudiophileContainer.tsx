import AudiophileImg from '../../../assets/images/audiophile.webp';
import Astropos from 'atropos/react';

const AudiophileContainer = () => {
  return (
    <Astropos className="atropos w-full" highlight={true}>
      <a
        className="p-4 bg-secondaryBG rounded-[12px] flex flex-col gap-2 w-full"
        href="https://ralfislask.github.io/Audiophile-Ecommerce/#/"
        target="_blank"
      >
        <div className="bg-primaryBG w-full rounded-[25px] p-4 shadow-shadow-medium cursor-pointer flex flex-col gap-6">
          <div className="relative  rounded-xl w-full">
            <img
              src={AudiophileImg}
              alt="memory"
              width="500"
              height="500"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </a>
    </Astropos>
  );
};

export default AudiophileContainer;
