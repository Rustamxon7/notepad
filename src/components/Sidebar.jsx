import Filter from './Filter';
import Search from './Search';

const Sidebar = ({data, setData}) => {
  return (
    <div className='sidebar'>
      <Search setData={setData}
      data={data} />
      <Filter data={data} />
    </div>
  );
};

export default Sidebar;
