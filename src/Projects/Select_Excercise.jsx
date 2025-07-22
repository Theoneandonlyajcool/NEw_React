import { color } from "framer-motion";
import { useState } from "react";

const App = () => {
  const [bgcolor, SetBgColor] = useState("bg-green-600");
  return (
    <div className={`flex h-screen justify-center items-center ${bgcolor}`}>
      <label htmlFor="color-select" className="mr-2 text-xl">
        Pick a Color :
      </label>
      <select
        id="color-select"
        className="p-2 text-xl rounded-lg bg-slate-400 text-black"
        value={bgcolor}
        onChange={(e) => {
          SetBgColor(e.target.value);
        }}
      >
        <option value="bg-red-600" className="">
          red
        </option>
        <option value="bg-blue-600">blue</option>
        <option value="bg-green-600">green</option>
        <option value="bg-yellow-600">yellow</option>
        <option value="bg-purple-600">purple</option>
      </select>
    </div>
  );
};

export default App;
