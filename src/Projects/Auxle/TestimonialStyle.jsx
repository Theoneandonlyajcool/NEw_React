const TestimonialStyle = (props) => {
  const { card, col } = props;
  return (
    <div className="mt-6">
      <div className=" flex justify-center ">
        <div
          className={`rounded-xl  w-full   max-w-[20rem] flex flex-col mb-4   px-4 py-[1.1rem] ${col}`}
        >
          <div className="flex w-full justify-center">
            <img
              src={card.image}
              alt=""
              className="w-[6rem] h-[6rem] rounded-full object-cover"
            />
          </div>
          <div className="text-[1.3rem]">"{card.quote}"</div>
          <div className="text-teal-300 mt-2 ">
            <div className="font-bold text-2xl">{card.name}</div>
            <div>{card.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialStyle;
