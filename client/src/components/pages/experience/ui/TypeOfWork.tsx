const TypeOfWork: React.FC<{ work: string }> = ({ work }) => {
  return (
    <p className="text-[1rem] sm:text-[1.25rem] md:text-[1.5rem]">
      <span className="text-blueColor">- </span> {work}
    </p>
  );
};

export default TypeOfWork;
