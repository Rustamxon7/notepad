import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div className='search'>
      <input className='search-input' type='text' placeholder='Search' />
      <button className='search-btn'>
        <BiSearch />
      </button>
    </div>
  );
};

export default Search;
