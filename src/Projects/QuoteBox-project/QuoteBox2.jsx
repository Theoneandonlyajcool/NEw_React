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

const QuoteBox2 = (props) => {
  const { quote } = props;
  console.log(quote);
  return (
    <div className="flex m-8">
      <div className="bg-blue-700 flex flex-col rounded-l-lg items-center justify-center p-6 gap-2">
        <div className="text-3xl w-[200px] text-gray-200">{quote.author}</div>
        <div className="w-[200px] text-blue-400">{quote.bio}</div>
      </div>
      <div className=" bg-white text-stone-500 text-lg border-2 w-[300px] rounded-r-full   p-4 border-slate-500 flex justify-center items-center">
        <div>{quote.text}</div>
      </div>
    </div>
  );
};

export default QuoteBox2;
