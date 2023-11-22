import { FaFilter } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { FaEraser } from "react-icons/fa6";
import { MdMoreVert } from "react-icons/md";


function handleClick () {
    
  console.log(getTitle);
 }

const Filter = ({ data }) => {
  console.log(data);
  return (
    <div className="filter">
      <div className="filter-title">
        <FaFilter />
        <p>Filtro</p>
      </div>
      <div className="filter-hashtags">
        <button className="include">#Node.js</button>
        <button className="include">#Laravel</button>
        <button className="include-color">#HTML</button>
        <button className="include-color">PostgreSQL</button>
        <button className="include">#CSS</button>
      </div>
  

      <div className="notes">
        {data.map((note) => (
          <div className="note">
            <div className="note-text" onClick={handleClick}>
              <h1>{note.title}</h1>
              <p>
               {note.info}
              </p>
            </div>
            <div className="more-info">
              <button>
                <MdMoreVert />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="more-btns">
        <button className="more-btn">
          <FaPenToSquare className="update" /> update
        </button>
        <button className="more-btn">
          <FaEraser className="delete" /> delete
        </button>
      </div>
    </div>
  );
};

export default Filter;
