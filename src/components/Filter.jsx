import { FaFilter } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { FaEraser } from "react-icons/fa6";
import { MdMoreVert } from "react-icons/md";

<<<<<<< HEAD

function handleClick () {
    
  console.log(getTitle);
 }

const Filter = ({ data }) => {
=======
const Filter = ({ data, setActiveNote}) => {

  const handleClick = (id) =>{
    console.log(id);
    const currentNote  = data.filter(function (note) {
      return note.id == id
    })
    setActiveNote(currentNote[0])
  }



>>>>>>> 5127c28de5de1ad43a8c9e9ba073c0e4a852a1af
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
<<<<<<< HEAD
          <div className="note">
            <div className="note-text" onClick={handleClick}>
=======
          <div className="note" onClick={() => handleClick(note.id)}>
            <div className="note-text">
>>>>>>> 5127c28de5de1ad43a8c9e9ba073c0e4a852a1af
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
