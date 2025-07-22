import { useState } from "react";

const App = () => {
  const [age, SetAge] = useState(20);
  const [error, SetErrror] = useState("");
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200  text-black">
      <div className="bg-white border border-slate-200 rounded-md p-8 w-full h-full max-h-[13rem]  max-w-[26rem] flex flex-col justify-center items-center ">
        <div className="flex flex-col items-center ">
          <label htmlFor="age-input" className="m-2">
            age
          </label>

          <input
            value={age}
            min={18}
            type="number"
            id="age-input"
            className="border bg-white text-black w-28 border-slate-500 rounded-lg py-1 px-3 "
            onChange={(e) => {
              const newnum = e.target.value;

              if (newnum >= 18) {
                SetErrror("");
              } else {
                SetErrror("Sorry you have to be 18 or older");
              }

              SetAge(Number(e.target.value));
            }}
          />
        </div>

        <div className="text-red-600 h-8 mt-4">{error}</div>
      </div>
    </div>
  );
};

export default App;
