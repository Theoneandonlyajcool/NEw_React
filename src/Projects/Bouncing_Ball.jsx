import { useState } from "react";

const App = () => {
  const [checked, Setchecked] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <i
        className={`fa-solid fa-basketball mb-4 text-4xl text-blue-700 ${
          checked ? "animate-bounce" : ""
        }`}
      ></i>
      <div>
        <input
          id="bounce-checkbox"
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            Setchecked(e.target.checked);
          }}
        />

        <label htmlFor="bounce-checkbox" className="ml-2">
          click to bounce ball
        </label>
      </div>
    </div>
  );
};

export default App;
