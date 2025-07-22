// frrrrrrrrrrr
// ttttttttttttttttttt
// dehejroiehrjiohjroie
// dehejroiehrjiohjroie
// dehejroiehrjiohjroie
// dehejroiehrjiohjroie
// dehejroiehrjiohjroie
// dehejroiehrjiohjroie
// dehejroiehrjiohjroie
// dehejroiehrjiohjroie
// dehejroiehrjiohjroie
// dehejroiehrjiohjroie
// dehejroiehrjiohjroie
// dehejroiehrjiohjroie
// dehejroiehrjiohjroie
// dehejroiehrjiohjroie

const QuoteBox3 = (props) => {
  const { quote } = props;
  //   console.log(quote);
  return (
    <div className="flex flex-col m-8 items-start">
      <div className=" bg-rose-400 p-8 text-xl text-white rounded-t-lg rounded-br-lg">
        {quote.text}
      </div>
      <div className="bg-rose-100 w-[250px] flex flex-col px-4 py-2 border-x-2 border-b-2 rounded-b-lg border-rose-300">
        <div className="text-red-500 text-xl">{quote.author}</div>
        <div className="text-rose-400">{quote.bio}</div>
      </div>
    </div>
  );
};

export default QuoteBox3;
