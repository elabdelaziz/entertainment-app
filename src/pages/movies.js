import { useState } from 'react';
import AppLayout from '../components/AppLayout';
import MainCard from '../components/MainCard';
import Search from '../components/Search';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Movies() {
  const [searchValue, setSearchValue] = useState('');
  const [filterSearch, setFilterSearch] = useState([]);
  const [movies] = useLocalStorage('movies', []);

  console.log(filterSearch);

  if (!movies) {
    return;
  }
  return (
    <AppLayout>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        data={movies}
        setFilterSearch={setFilterSearch}
      />
      <h2 className="text-white text-[26px] my-[2rem]">Movies</h2>
      {filterSearch.length === 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[1rem]">
          {movies.map((movie, i) => (
            <MainCard key={i} item={movie} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[1rem]">
          {filterSearch.map((movie, i) => (
            <MainCard key={i} item={movie} />
          ))}
        </div>
      )}
    </AppLayout>
  );
}
