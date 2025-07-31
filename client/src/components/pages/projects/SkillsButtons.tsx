import SkillButton from './SkillButton';

const SkillsButtons: React.FC<{ skills: string[] }> = ({ skills }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {skills.map((skill, index) => {
        return <SkillButton key={index} text={skill} />;
      })}
    </div>
  );
};

export default SkillsButtons;
