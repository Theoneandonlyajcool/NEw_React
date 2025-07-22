// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh

import { useState } from "react";

const Card = (props) => {
  const [IsFlipped, SetIsFlipped] = useState(false);
  console.log(props.value);
  return (
    <div
      className="flex cursor-pointer"
      onClick={() => SetIsFlipped(!IsFlipped)}
    >
      {IsFlipped ? (
        <div className="border-4 border-red-700 bg-red-200 w-[230px] m-4 h-[350px] rounded-lg flex justify-center items-center">
          <i className="text-red-500 text-[4rem] fa-solid fa-dice-d6"></i>
        </div>
      ) : (
        <div
          className={`border-4  border-red-700 rounded-lg m-4 w-[230px] h-[350px] bg-white text-[4rem] flex flex-col justify-between items-center p-2 ${props.color} `}
        >
          <div className=" text-black  w-full ">{props.value}</div>
          <div className="">{props.icon}</div>
          <div className=" text-black w-full flex justify-end ">
            {props.value}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
