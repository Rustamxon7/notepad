import { BiSearch } from "react-icons/bi";

import { notes } from "../data/data";

const Search = ({ setData, data }) => {
  const searchNote = (e) => {
    e.preventDefault();
    const getTitle = e.target.value.toLowerCase();
    console.log(getTitle);

    const newNotes = notes.filter(function (note) {
      return note.title.toLowerCase().includes(getTitle);
    });
    console.log(newNotes);

    setData(newNotes);
  };
  

  return (
    <div className="search">
<<<<<<< HEAD
      <input className="search-input" type="text" placeholder="Search" onChange={(e) => searchNote(e) }/>
=======
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        onChange={(e) => searchNote(e)}
      />
>>>>>>> 5127c28de5de1ad43a8c9e9ba073c0e4a852a1af
      <button type="button" className="search-btn">
        <BiSearch className="searching" onClick={() => searchNote} />
      </button>
    </div>
  );
};

export default Search;
