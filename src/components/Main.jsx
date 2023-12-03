/* eslint-disable react/prop-types */
import { AiFillFolder } from "react-icons/ai";
import { TbClockHour5 } from "react-icons/tb";

const Main = ({ activeNote, data, dispatch }) => {
  const hero = activeNote;

  const handleEditNoteTitle = (title) => {
    const editedNotes = data.map((note) =>
      note.id === activeNote.id ? { ...note, title: title } : note
    );
    dispatch({ type: "EDIT_NOTE", payload: editedNotes });
  };

  const handleEditNoteInfo = (info) => {
    const editedNotes = data.map((note) =>
      note.id === activeNote.id ? { ...note, info: info } : note
    );
    dispatch({ type: "EDIT_NOTE", payload: editedNotes });
  };

  return (
    <div className="dashboard">
      <div className="main">
        <div className="main-title">
          <h1
            contentEditable={true}
            suppressContentEditableWarning={true}
            onInput={(e) => handleEditNoteTitle(e.currentTarget.textContent)}
          >
            {hero.title}
          </h1>
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
          <p
            className="lorem"
            contentEditable={true}
            suppressContentEditableWarning={true}
            onInput={(e) => handleEditNoteInfo(e.currentTarget.textContent)}
          >
            {hero.info}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
