import Filter from './Filter';
import Search from './Search';

const Sidebar = ({data, setData, activeNote, setActiveNote}) => {
  return (
    <div className='sidebar'>
      <Search setData={setData}
      data={data} />
      <Filter data={data}
       activeNote={activeNote}
       setActiveNote={setActiveNote} />
    </div>
  );
};

export default Sidebar;
