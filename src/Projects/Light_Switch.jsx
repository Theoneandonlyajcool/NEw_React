// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut
// jkrlnljkthnrtnrrnturtut

import { useState } from "react";

const Light_switch = () => {
  const [isOn, SetIsOn] = useState(false);
  return (
    <div
      className={`flex justify-center items-center h-screen ${
        isOn ? "bg-yellow-100" : "bg-slate-600"
      }`}
    >
      <button
        onClick={() => {
          SetIsOn(!isOn);
        }}
      >
        <div className={`h-8 w-6  ${isOn ? "bg-gray-600" : "bg-white"}`}></div>
        <div className={`h-8 w-6  ${isOn ? "bg-white" : "bg-gray-600"}`}></div>
      </button>
    </div>
  );
};

export default Light_switch;
