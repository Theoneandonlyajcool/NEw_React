import { useState } from "react";

const App = () => {
  const [Text, SetText] = useState("Hello");
  return (
    <div className="bg-red-700/80 h-screen flex flex-col  justify-center items-center">
      <div className="text-white font-bold text-6xl mb-6">{Text}</div>
      <input
        type="text"
        className="bg-slate-700 p-3 rounded-lg border border-white"
        value={Text}
        onChange={(e) => {
          SetText(e.target.value);
        }}
      />
    </div>
  );
};

export default App;
