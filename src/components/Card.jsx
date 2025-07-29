const Card = (props) => {
  const { image, name, stack, desc } = props;
  return (
    <div className=" flex flex-col bg-white border border-blue-500 w-[20rem] h-[23rem] rounded-3xl overflow-clip mt-2 mb-2">
      <div className="bg-blue-500/50 w-[100%] h-[50%] rounded-b-3xl relative">
        <img
          src={image}
          className="w-[7rem] rounded-full h-[7rem] absolute -bottom-10 border-2 border-blue-500 left-[6.5rem] object-cover"
          alt=""
        />
      </div>
      <div className=" flex justify-center items-end  h-2/4">
        <div className=" flex flex-col items-center  w-full max-w-[15rem]">
          <h1 className="font-bold text-2xl">{name}</h1>
          <p className="text-[1.2rem]">{stack}</p>
          <div className="w-full bg-blue-400 h-[2px] mt-1 mb-1"></div>
          <p className="text-[.8rem] text-center">{desc}</p>
          {/* Icons */}
          <div className=" w-full flex justify-center gap-4">
            <i className=" text-blue-600 text-2xl fa-brands fa-linkedin"></i>
            <i className=" text-gray-800 text-2xl fa-brands fa-github"></i>
            <i className="text-blue-800 text-2xl fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
