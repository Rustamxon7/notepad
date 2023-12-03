import { BiSearch } from "react-icons/bi";
const Search = ({ dispatch, data }) => {
  const searchNote = (e) => {
    e.preventDefault();
    const getTitle = e.target.value.toLowerCase();

    const newNotes = data.filter(function (note) {
      return note.title.toLowerCase().includes(getTitle);
    });

    dispatch({ type: "SEARCH", payload: newNotes });
  };

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        onChange={(e) => searchNote(e)}
      />
      <button type="button" className="search-btn">
        <BiSearch className="searching" onClick={() => searchNote} />
      </button>
    </div>
  );
};

export default Search;
