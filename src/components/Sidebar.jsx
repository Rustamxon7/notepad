import Filter from "./Filter";
import Search from "./Search";

const Sidebar = ({
  searchResult,
  dispatch,
  data,
  activeNote,
  onActiveNote,
}) => {
  return (
    <div className="sidebar">
      <Search dispatch={dispatch} data={data} />
      <Filter
        searchResult={searchResult}
        data={data}
        activeNote={activeNote}
        onActiveNote={onActiveNote}
      />
    </div>
  );
};

export default Sidebar;
