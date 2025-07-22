const ResturantItem = (props) => {
  const { item } = props;

  const showPromo = item.promotion ? (
    <span className="absolute top-0 left-0  my-1 bg-rose-500 p-1 px-6 rounded-r-full text-white">
      Promotion
    </span>
  ) : (
    ""
  );

  return (
    <div className="bg-white  rounded-lg overflow-clip   m-8 text-black relative">
      <img src={item.image} alt="image" className="w-64 h-40 object-cover" />
      <div className="px-2  py-2">
        <div className="flex   justify-between ">
          <div className="font-bold text-xl">{item.name}</div>
          <div className="flex items-center gap-1 text-rose-500">
            <i class="fa-solid fa-star"></i>
            {item.rating}
          </div>
        </div>

        <div className="text-base text-gray-600 flex items-center gap-1">
          <i class="fa-solid fa-location-dot"></i>
          {item.location}
        </div>
        <div className="text-base text-gray-600">{"$".repeat(item.cost)}</div>
        <div>{showPromo}</div>
      </div>
    </div>
  );
};

export default ResturantItem;
