import { useState, useEffect } from "react";
import Style from "./StylingStocks";

const App = () => {
  const [Stocks, SetStocks] = useState([]);
  const [IsLoading, SetISLoading] = useState(true);
  // const FetchData = () => {
  //   fetch(
  //     "https://api.react-formula.com/learning-api/demos/stocks-project/stocks"
  //   )
  //     .then((respon) => respon.json())
  //     .then((data) => {
  //       SetStocks(data);
  //       SetISLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(`There was an error ${error}`);
  //     });
  // };

  const FetchData = async () => {
    const response = await fetch(
      "https://api.react-formula.com/learning-api/demos/stocks-project/stocks"
    );
    const data = await response.json();
    SetStocks(data);
    SetISLoading(false);
  };

  useEffect(() => {
    FetchData();
  }, []);

  console.log(Stocks[1]);

  const mapped = Stocks.map((ele, idx) => {
    return <Style key={idx} stock={ele} />;
  });

  return (
    <div
      className={`${
        IsLoading ? "h-screen" : "h-full"
      } flex flex-col justify-center items-center  bg-slate-100 `}
    >
      {IsLoading ? (
        <i className=" text-5xl text-blue-400 animate-spin fa-solid fa-spinner"></i>
      ) : (
        <div className="w-full max-w-lg">{mapped}</div>
      )}
    </div>
  );
};

export default App;
