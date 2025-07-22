const QuoteItems = (props) => {
  const { quotes } = props;
  //   console.log();
  return (
    <div className="-500 w-full max-w-[40rem]">
      <div className=" bg-amber-200 border border-gray-400 py-6 px-14 rounded-xl ">
        <div className="text-4xl my-2 text-gray-800">"{quotes.quote}"</div>
        <div className="text-gray-500 flex justify-end">{quotes.name}</div>
      </div>
    </div>
  );
};

export default QuoteItems;
