// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk
// rfoktorkyoykoyyk

import { useState } from "react";

const Square = () => {
  const [isLight, SetIsLight] = useState(true);
  return (
    <div
      className={`bg-stone-400 h-[30px] w-[30px] border border-stone-800 cursor-pointer ${
        isLight ? "bg-stone-400" : "bg-stone-700"
      }`}
      id="The_Square"
      onClick={() => {
        SetIsLight(!isLight);
      }}
    ></div>
  );
};

export default Square;
