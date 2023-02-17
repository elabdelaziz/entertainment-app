import { useState } from 'react';
import AppLayout from '../components/AppLayout';
import MainCard from '../components/MainCard';
import Search from '../components/Search';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Bookmarked() {
  const [searchValue, setSearchValue] = useState('');
  const [filterSearch, setFilterSearch] = useState([]);
  const [bookmark] = useLocalStorage('bookmark', []);

  if (!bookmark) {
    return;
  }
  return (
    <AppLayout>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        data={bookmark}
        setFilterSearch={setFilterSearch}
      />
      <h2 className="text-white text-[26px] my-[2rem]">bookmarked</h2>
      {filterSearch.length === 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[1rem] max-[1271px]:gap-[1rem]">
          {bookmark.map((item, i) => (
            <MainCard key={i} item={item} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[1rem] max-[1271px]:gap-[1rem]">
          {filterSearch.map((item, i) => (
            <MainCard key={i} item={item} />
          ))}
        </div>
      )}
    </AppLayout>
  );
}
