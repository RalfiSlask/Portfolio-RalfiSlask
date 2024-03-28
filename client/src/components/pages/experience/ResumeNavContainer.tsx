import DownloadLogo from '../../../assets/downloadblack.svg';
import OpenLogo from '../../../assets/arrowopenblack.svg';
import SwedenFlag from '../../../assets/icons/sweden.png';
import EnglishFlag from '../../../assets/icons/england.png';

const ResumeNavContainer = () => {
  return (
    <div className="flex flex-col gap-6 w-full items-center bg">
      <div className="flex items-center gap-4 border-b border-solid border-white border-opacity-30 pb-4">
        <h2>View Full Resume</h2>
      </div>
      <div className="flex items-center justify-between px-4 w-full h-full bg-white shadow-shadow-white-icon-hover py-4 rounded-xl text-secondaryBG">
        <div className="flex flex-col items-center gap-4">
          <img src={SwedenFlag} alt="sweden" width="40" height="35" className="rounded-md" />

          <div className="flex gap-4 items-center">
            <a
              href="/CV_Matthias.pdf"
              download="CV_Matthias.pdf"
              className="shadow-shadow-white-icon bg-[#f3f3f3] download-icon hover:shadow-shadow-white-icon-hover transition-shadow duration-300 w-[40px] h-[40px] rounded-md flex justify-center items-center"
            >
              <img src={DownloadLogo} alt="download" height="25" width="25" loading="lazy" />
            </a>
            <a
              href="/CV_Matthias.pdf"
              target="_blank"
              className="shadow-shadow-white-icon bg-[#f3f3f3] open-icon hover:shadow-shadow-white-icon-hover transition-shadow duration-300 w-[40px] h-[40px] rounded-md flex justify-center items-center"
            >
              <img src={OpenLogo} alt="download" height="25" width="25" loading="lazy" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 h-full">
          <img src={EnglishFlag} alt="england" width="35" height="35" loading="lazy" />

          <div className="flex gap-4 items-center">
            <a
              href="/CV_Matthias_English.pdf"
              download="CV_Matthias_English.pdf"
              className="shadow-shadow-white-icon bg-[#f3f3f3] download-icon hover:shadow-shadow-white-icon-hover transition-shadow duration-300 w-[40px] h-[40px] rounded-md flex justify-center items-center"
            >
              <img src={DownloadLogo} alt="download" height="25" width="25" loading="lazy" />
            </a>
            <a
              href="/CV_Matthias_English.pdf"
              target="_blank"
              className="shadow-shadow-white-icon bg-[#f3f3f3] open-icon hover:shadow-shadow-white-icon-hover transition-shadow duration-300 w-[40px] h-[40px] rounded-md flex justify-center items-center"
            >
              <img src={OpenLogo} alt="download" height="25" width="25" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeNavContainer;
