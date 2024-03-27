import React from 'react';

const SkillButton: React.FC<{ text: string }> = ({ text }) => {
  return <button className="shadow-shadow-oval px-2 py-1 rounded-full bg-secondaryBG text-blueColor">{text}</button>;
};

export default SkillButton;
