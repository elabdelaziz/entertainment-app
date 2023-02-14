import AppLayout from '../components/AppLayout';
import MainCard from '../components/MainCard';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Series() {
  const [tv] = useLocalStorage('tv', []);

  if (!tv) {
    return;
  }
  return (
    <AppLayout>
      <h2 className="text-white text-[26px] my-[2rem]">TV</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[1rem]">
        {tv.map((item, i) => (
          <MainCard key={i} item={item} />
        ))}
      </div>
    </AppLayout>
  );
}
