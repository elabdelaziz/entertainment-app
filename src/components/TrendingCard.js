const TrendingCard = ({ item }) => {
  // if (!item) {
  //   return;
  // }
  return (
    <div className="relative flex min-w-[560px] mr-[1.6rem] h-fit max-h-[300px]">
      <img className="rounded-[8px]" src={item.thumbnail.trending.large} />
      <div className="absolute right-[5%] top-[5%] bg-[rgba(22,29,47,0.5)] w-[40px] h-[40px] flex items-center justify-center rounded-full">
        <img className="w-[14px]" src="/assets/icon-bookmark-empty.svg" />
      </div>
      <div className="absolute left-[5%] bottom-[5%]">
        <p className="text-white text-[1rem]">
          {item.year} &bull; {item.category} &bull; {item.rating}
        </p>
        <h2 className="text-white text-[1.5rem]">{item.title}</h2>
      </div>
    </div>
  );
};
export default TrendingCard;
