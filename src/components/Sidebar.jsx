import Filter from './Filter';
import Search from './Search';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Search />
      <Filter />
    </div>
  );
};

export default Sidebar;
