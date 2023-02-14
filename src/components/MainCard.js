const MainCard = ({ item }) => {
  return (
    <div className="flex flex-col">
      <div className="relative flex max-w-[560px] h-fit max-h-[300px]">
        <img className="rounded-[8px]" src={item.thumbnail.regular.large} />
        <div className="absolute right-[5%] top-[5%] bg-[rgba(22,29,47,0.5)] w-[40px] h-[40px] flex items-center justify-center rounded-full">
          <img className="w-[14px]" src="/assets/icon-bookmark-empty.svg" />
        </div>
      </div>
      <div className="">
        <p className="text-white text-[1rem]">
          {item.year} &bull; {item.category} &bull; {item.rating}
        </p>
        <h2 className="text-white text-[1.4rem]">{item.title}</h2>
      </div>
    </div>
  );
};
export default MainCard;
