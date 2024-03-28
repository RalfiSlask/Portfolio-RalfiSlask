import MongoDBLogo from '../../../assets/mongodb.svg';
import MySqlLogo from '../../../assets/mysql.svg';
import NodeLogo from '../../../assets/nodejs.svg';
import ExpressLogo from '../../../assets/express3.svg';

const Backend = () => {
  return (
    <>
      <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-0 skills-icon-container">
        <img
          src={MongoDBLogo}
          alt="mongodb"
          width="30"
          height="30"
          className="object-cover w-[16px] h-[32px]"
          loading="lazy"
        />
      </div>
      <div className="absolute translate-x-1/2 top-1/2 -translate-y-1/2 right-0 skills-icon-container">
        <img src={MySqlLogo} alt="mysql" width="30" height="30" loading="lazy" />
      </div>
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 skills-icon-container">
        <img
          src={NodeLogo}
          alt="node"
          width="30"
          height="30"
          className="object-cover w-[24px] h-[30px]"
          loading="lazy"
        />
      </div>
      <div className="absolute translate-y-1/2 bottom-0 left-1/2 -translate-x-1/2 skills-icon-container">
        <img src={ExpressLogo} alt="express" width="30" height="30" loading="lazy" />
      </div>
    </>
  );
};

export default Backend;
