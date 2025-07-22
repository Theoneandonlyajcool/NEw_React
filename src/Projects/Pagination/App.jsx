import { useState } from "react";
import posts from "./Post";
import PostItem from "./PostItem";

const page_size = 9;

const App = () => {
  const [PageIdx, SetPageIdx] = useState(0);
  const postmapping = posts
    .slice(page_size * PageIdx, page_size * (PageIdx + 1))
    .map((post, idx) => {
      return <PostItem key={idx} post={post} />;
    });

  const numpages = Math.ceil(posts.length / page_size);

  const buttons = [];
  for (let i = 0; i < numpages; i += 1) {
    buttons.push(
      <button
        onClick={() => {
          SetPageIdx(i);
        }}
        key={i}
        className="bg-blue-900 hover:bg-blue-600  hover:w-[2.5rem] hover:h-[2.5rem] text-lg hover:text-xl transition ease-in-out duration-1000  text-white rounded-lg m-2 w-[2rem] h-[2rem] "
      >
        {i + 1}
      </button>
    );
  }

  return (
    <div className="flex flex-col justify-center  items-center my-4 py-20">
      <div className=" w-full max-w-5xl  items-center justify-center  flex flex-wrap <">
        {/* <PostItem post={posts[0]} /> */}

        {postmapping}
      </div>

      <div>{buttons}</div>
    </div>
  );
};

export default App;
