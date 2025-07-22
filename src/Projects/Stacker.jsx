// gbjfkhbjhgdfhgfhgjgfhjh
// gbjfkhbjhgdfhgfhgjgfhjh
// gbjfkhbjhgdfhgfhgjgfhjh

// gbjfkhbjhgdfhgfhgjgfhjh

// gbjfkhbjhgdfhgfhgjgfhjh
// gbjfkhbjhgdfhgfhgjgfhjh
// gbjfkhbjhgdfhgfhgjgfhjh
// gbjfkhbjhgdfhgfhgjgfhjh
// gbjfkhbjhgdfhgfhgjgfhjh
// gbjfkhbjhgdfhgfhgjgfhjh

// gbjfkhbjhgdfhgfhgjgfhjh

// gbjfkhbjhgdfhgfhgjgfhjh
// gbjfkhbjhgdfhgfhgjgfhjh
// gbjfkhbjhgdfhgfhgjgfhjh

// gbjfkhbjhgdfhgfhgjgfhjh
// gbjfkhbjhgdfhgfhgjgfhjh
// gbjfkhbjhgdfhgfhgjgfhjh

// gbjfkhbjhgdfhgfhgjgfhjh

// gbjfkhbjhgdfhgfhgjgfhjh
// gbjfkhbjhgdfhgfhgjgfhjh
// gbjfkhbjhgdfhgfhgjgfhjh
// gbjfkhbjhgdfhgfhgjgfhjh
// gbjfkhbjhgdfhgfhgjgfhjh
// gbjfkhbjhgdfhgfhgjgfhjh

// gbjfkhbjhgdfhgfhgjgfhjh

// gbjfkhbjhgdfhgfhgjgfhjh
// gbjfkhbjhgdfhgfhgjgfhjh
// gbjfkhbjhgdfhgfhgjgfhjh

import { useState } from "react";

const Stack = () => {
  const [numBlocks, setNumBlocks] = useState(2);

  const blocks = [];
  for (let i = 0; i < numBlocks; i += 1) {
    blocks.push(<div className="w-24 h-8 bg-green-400 m-2 " key={i}></div>);
  }

  console.log(blocks);
  return (
    <div className="flex flex-col  h-screen items-center justify-end">
      <div className="border-b-4 border-neutral-500 p-2">{blocks}</div>
      <div>
        <button
          className="m-2 bg-red-700"
          onClick={() => {
            if (numBlocks > 0) {
              setNumBlocks(numBlocks - 1);
            }
          }}
        >
          {" "}
          Remove button
        </button>
        <button
          className="m-2 bg-green-800"
          onClick={() => {
            if (numBlocks < 10) {
              setNumBlocks(numBlocks + 1);
            }
          }}
        >
          Add button
        </button>
      </div>
    </div>
  );
};

export default Stack;
