import React from 'react';

interface IProjectInfo {
  projectInfo: {
    title: string;
    description: string;
  };
}

const ProjectInfoContainer: React.FC<IProjectInfo> = ({ projectInfo }) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="uppercase text-blueColor">{projectInfo.title}</h3>
      <p className="text-white">{projectInfo.description}</p>
    </div>
  );
};

export default ProjectInfoContainer;
