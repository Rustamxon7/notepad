import Filter from './Filter';
import Search from './Search';

const Sidebar = ({data,  activeNote, onActiveNote}) => {
  return (
    <div className='sidebar'>
      {/* <Search setData={setData}
      data={data} /> */}
      <Filter data={data}
       activeNote={activeNote}
       onActiveNote={onActiveNote} />
    </div>
  );
};

export default Sidebar;
