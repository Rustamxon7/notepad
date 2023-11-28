import { FaFilter } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { FaEraser } from "react-icons/fa6";
import { MdMoreVert } from "react-icons/md";

const Filter = ({ data, onActiveNote }) => {
  const handleClick = (id) => {
    console.log(id);
    const currentNote = data.filter(function (note) {
      return note.id == id;
    });
    onActiveNote(currentNote[0]);
  };

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
          <div
            key={note.id}
            className="note"
            onClick={() => handleClick(note.id)}
          >
            <div className="note-text">
              <h1>{note.title}</h1>
              <p>{note.info}</p>
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
