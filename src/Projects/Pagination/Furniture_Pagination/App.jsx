import PostItem from "./PostITems";
import post from "./items";
import { useState } from "react";

const page_size = 5;

const App = () => {
  const [Pageidx, SetPageIdx] = useState(0);
  const mapped = post
    .slice(page_size * Pageidx, page_size * (Pageidx + 1))
    .map((ele, idx) => {
      return <PostItem posts={ele} key={idx} />;
    });

  const numbtn = Math.ceil(post.length / page_size);

  const buttons = [];

  for (let i = 0; i < numbtn; i += 1) {
    buttons.push(
      <button
        className={`m-1 w-[3rem] h-[2rem] rounded-lg ${
          Pageidx === i
            ? "bg-blue-600/80 transition ease-in-out duration-300"
            : "bg-blue-600/30 transition ease-in-out duration-300"
        }`}
        onClick={() => {
          SetPageIdx(i);
        }}
      >
        {i + 1}
      </button>
    );
  }

  return (
    <div className="flex justify-center flex-col items-center ">
      <div className="w-full flex flex-col items-center">
        <div className="text-center  text-[2rem]">
          Autumn's Fabulous Furniture
        </div>

        <div className=" w-full flex justify-end px-8 py-2 border-b border-white">
          {buttons}
        </div>
      </div>

      <div>{mapped}</div>
    </div>
  );
};

export default App;
