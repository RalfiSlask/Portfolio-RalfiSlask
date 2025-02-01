import BipolarCompassImg from '../../../assets/images/bipolarcompass.webp';
import Astropos from 'atropos/react';

const BipolarCompassContainer = () => {
  return (
    <Astropos className="atropos w-full" highlight={true}>
      <a
        className="p-4 bg-secondaryBG rounded-[12px] flex flex-col gap-2 w-full"
        href="https://www.xn--bipolrkompassen-4kb.se/"
        target="_blank"
      >
        <div className="bg-primaryBG w-full rounded-[25px] p-4 shadow-shadow-medium cursor-pointer flex flex-col gap-6">
          <div className="relative  rounded-xl w-full">
            <img
              src={BipolarCompassImg}
              alt="bipolarcompass project"
              aria-label="bipolarcompass project"
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

export default BipolarCompassContainer;
