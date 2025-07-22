import quotes from "./Quotes";
import QuoteItems from "./QuoteItems";
import { useState } from "react";

const App = () => {
  const [Idx, SetIdx] = useState(1);
  // console.log(quotes.length);
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="mb-5 font-bold text-4xl">Quote of the day</div>
      <div>
        <QuoteItems quotes={quotes[Idx]} />
      </div>
      <button
        className="my-6 bg-gradient-to-r from-blue-500 to-blue-900 py-2 px-6 rounded-lg"
        onClick={() => {
          if (Idx === quotes.length) {
          } else {
            SetIdx((Idx + 1) % quotes.length);
          }
        }}
      >
        New Quote
      </button>
    </div>
  );
};

export default App;
