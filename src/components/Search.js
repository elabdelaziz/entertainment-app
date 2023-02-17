import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Search({
  searchValue,
  setSearchValue,
  data,
  setFilterSearch,
}) {
  useEffect(() => {
    if (searchValue.length > 0) {
      setFilterSearch(
        data.filter(
          (item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.rating.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setFilterSearch([]);
    }
  }, [searchValue, data, setFilterSearch]);

  return (
    <div className="flex mb-[2rem] mt-[2.1rem]">
      <button className="mr-[20px]">
        <img className="w-[32px]" src="/assets/icon-search.svg" />
      </button>
      <input
        className="bg-transparent text-[20px] text-white font-[300] w-full outline-none"
        type="text"
        placeholder="Search for Movies or TV"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </div>
  );
}
