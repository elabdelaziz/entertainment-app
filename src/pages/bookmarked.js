import AppLayout from '../components/AppLayout';
import MainCard from '../components/MainCard';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Bookmarked() {
  const [bookmark] = useLocalStorage('bookmark', []);

  if (!bookmark) {
    return;
  }
  return (
    <AppLayout>
      <h2 className="text-white text-[26px] my-[2rem]">bookmarked</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[1rem] max-[1271px]:gap-[1rem]">
        {bookmark.map((item, i) => (
          <MainCard key={i} item={item} />
        ))}
      </div>
    </AppLayout>
  );
}
