// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt

import Square from "./Checkered_gird";

const App = () => {
  const squares = [];

  for (let i = 0; i < 400; i += 1) {
    squares.push(<Square key={i} i />);
  }

  return (
    <div className=" flex justify-center">
      <div className="border border-white  w-[602px] h-[602px] flex flex-wrap mt-4">
        {squares}
      </div>
    </div>
  );
};

export default App;
