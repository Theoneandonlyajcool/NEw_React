const Style = (props) => {
  const { stock } = props;

  const pricediff = stock.current_price - stock.previous_price;
  const percent_Change = (pricediff / stock.previous_price) * 100;

  console.log(percent_Change);

  return (
    <div className="bg-white shadow-xl justify-between p-4 items-center m-8 rounded-lg flex  h-[8rem]">
      <div className="flex flex-col  h-full justify-around ">
        <div className="text-xl text-neutral-600">{stock.name}</div>
        <div className="text-2xl font-bold text-blue-400">{stock.symbol}</div>
      </div>

      <div className=" h-full flex flex-col justify-around items-center">
        <div
          className={`rounded-full py-2 px-4  ${
            stock.previous_price > stock.current_price
              ? "bg-red-200 text-red-700"
              : " bg-green-200 text-green-700"
          }`}
        >
          {percent_Change.toFixed(2)}%
        </div>
        <div className="text-2xl text-neutral-700 font-bold">
          ${stock.current_price / 100}
        </div>
      </div>
    </div>
  );
};

export default Style;
