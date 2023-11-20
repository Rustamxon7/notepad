import { BiSearch } from "react-icons/bi";

const Search = ({ setData, data }) => {
  const searchNote = (e) => {
    e.preventDefault();
    const getTitle = e.target.value
    console.log(getTitle);

    const newNotes = data.filter(function (note) {
      return note.title.toLowerCase().includes(getTitle)
    })
    console.log(newNotes);

    setData(newNotes)
  };

  return (
    <div className="search">
      <input className="search-input" type="text" placeholder="Search"  onChange={(e) => searchNote(e)}/>
      <button type="button" className="search-btn">
        <BiSearch className="searching" />
      </button>
    </div>
  );
};

export default Search;
