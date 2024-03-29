import { useLottie } from 'lottie-react';
import animationData from './data/Matthias.json';

const LottieAnimation = () => {
  const options = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="col-span-4 xl:col-span-4 md:col-span-8 w-full xl:max-w-[400px] xl:max-h-[400px] h-full opacity-90">
      {View}
    </div>
  );
};

export default LottieAnimation;
