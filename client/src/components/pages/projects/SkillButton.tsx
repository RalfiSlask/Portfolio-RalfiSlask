const SkillButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <button className="shadow-shadow-icon px-4 py-2 text-[0.85rem]  rounded-full text-blueColor font-medium">
      {text}
    </button>
  );
};

export default SkillButton;
