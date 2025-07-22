import { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);
  return (
    <div className="flex justify-center h-screen items-center gap-4">
      <button
        className="text-4xl bg-red-500 px-4 py-2"
        onClick={() => setcount(count - 1)}
      >
        -
      </button>
      <div className="text-neutral-400 text-4xl w-20 text-center border-2 border-white">
        {count}
      </div>
      <button
        className="text-4xl bg-emerald-500 px-4 py-2"
        onClick={() => setcount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
