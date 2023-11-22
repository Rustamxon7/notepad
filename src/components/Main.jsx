import { AiFillFolder } from "react-icons/ai";
import { TbClockHour5 } from "react-icons/tb";
// import {data} from '../data/data'

const Main = ({ activeNote }) => {
  console.log(activeNote);
  const hero = activeNote

  return (
    <div className="dashboard">
      <div className="main">
        <div className="main-title">
          <h1>{hero.title}</h1>
          <div className="folder">
            <p>
              <AiFillFolder className="time" /> Coding
            </p>
            <p>
              <TbClockHour5 className="time" />
              Editado a 21min
            </p>
          </div>
        </div>
        <hr />
        <div className="dashboard-edit">
          <div className="dashboard-hashtags">
            <p>{hero.hashtags}</p>
          </div>
          <p className="lorem">{hero.info}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
