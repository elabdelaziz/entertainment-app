import Head from 'next/head';
import { useEffect, useState } from 'react';
import dataList from '../../data.json';
import AppLayout from '../components/AppLayout';
import MainCard from '../components/MainCard';
import RecommendedCard from '../components/RecommendedCard';

export default function Home() {
  const [data, setData] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);
  const [tv, setTv] = useState([]);
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setData(dataList);
  }, []);

  useEffect(() => {
    setLoading(true);
    data.map((item) => {
      item.category === 'Movie' &&
        setMovies((oldMovies) => [...oldMovies, item]);
      item.category === 'TV' && setTv((oldCat) => [...oldCat, item]);
      item.isTrending && setTrending((oldTrending) => [...oldTrending, item]);
      item.isRecommended && setRecommended((oldRec) => [...oldRec, item]);
    });
    setLoading(false);
  }, [data]);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex bg-bgColor overflow-x-hidden px-[2rem] w-full max-w-[unset]">
        <AppLayout>
          <div className="flex mb-[2rem] mt-[2.1rem]">
            <button className="mr-[20px]">
              <img className="w-[32px]" src="/assets/icon-search.svg" />
            </button>
            <input
              className="bg-transparent text-[20px] font-[300] w-full"
              type="text"
              placeholder="Search for Movies or TV"
              value=""
            />
          </div>
          <h2 className="text-white text-[26px] my-[2rem]">Trending</h2>
          <section className="flex h-fit overflow-x-scroll pb-[10px]">
            {trending.map((show, i) => (
              <MainCard key={i} item={show} />
            ))}
          </section>

          <section className="mt-[3rem]">
            <h2 className="text-white text-[26px] my-[2rem]">Recommended</h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[clamp(1.25rem,1%,1%)_clamp(1rem,2%,2%)] max-[1271px]:gap-[1rem]">
              {recommended.length > 0 &&
                recommended.map((show, i) => (
                  <RecommendedCard key={i} item={show} />
                ))}
            </div>
          </section>
        </AppLayout>
      </main>
    </>
  );
}
