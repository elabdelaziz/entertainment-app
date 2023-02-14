import AppLayout from '../components/AppLayout';
import MainCard from '../components/MainCard';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Movies() {
  const [movies] = useLocalStorage('movies', []);

  if (!movies) {
    return;
  }
  return (
    <AppLayout>
      <h2 className="text-white text-[26px] my-[2rem]">Movies</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[1rem]">
        {movies.map((movie, i) => (
          <MainCard key={i} item={movie} />
        ))}
      </div>
    </AppLayout>
  );
}
