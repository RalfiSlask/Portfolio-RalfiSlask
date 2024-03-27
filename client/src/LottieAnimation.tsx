import { useLottie } from 'lottie-react';
import animationData from './data/Matthias.json';

const LottieAnimation = () => {
  const options = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(options);

  return <div className="w-[400px] opacity-90">{View}</div>;
};

export default LottieAnimation;
