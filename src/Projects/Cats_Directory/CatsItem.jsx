const CatsItem = (props) => {
  const { cats } = props;
  return (
    <div className="bg-white w-[25rem] flex justify-around flex-col h-[14rem] rounded-xl overflow-clip text-black m-4">
      <div className="h-full relative flex justify-center gap-8">
        <div className="">
          <img
            src={cats.imageUrl}
            alt=""
            className="absolute top-10  left-4 w-28 object-cover border border-gray-200  h-28 rounded-full"
          />
        </div>
        <div className="flex  items-center w-full justify-between max-w-[6rem]">
          <div className="bg-rose-500 text-white p-2 -rotate-6 skew-y-12">
            {cats.name}
          </div>
          <div className="">{cats.age}</div>
        </div>
        <div className="absolute rotate-45 right-4  bottom-0  text-[8rem] top-0 text-gray-500/30">
          <i className="fa-solid fa-paw"></i>
        </div>
      </div>
      <div className="bg-purple-700 w-full h-full  flex items-center justify-center ">
        <div className=" w-full max-w-[15rem] ml-16 text-white flex justify-center ">
          <div>{cats.interests}</div>
        </div>
      </div>
    </div>
  );
};

export default CatsItem;
