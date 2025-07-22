const Sec = (props) => {
  const { card } = props;
  return (
    <div className=" w-full h-full flex justify-center flex-col my-2">
      <div className="flex w-full justify-center ">
        <div className="font-extrabold text-5xl mb-8">Why Auxle?</div>
      </div>

      {/* Cards */}
      <div className="flex w-full justify-center gap-6 mb-8">
        {/* First card */}
        <div
          className={` text-black border border-slate-300 w-[17rem] rounded-xl p-4  flex flex-col justify-center items-center ${card}`}
        >
          <div>
            <i className="fa-regular fa-lightbulb text-4xl text-teal-600"></i>
          </div>
          <div className="text-2xl  my-2">
            {" "}
            <div className="font-bold mb-2">Hands on projects</div>
            <div className="text-base leading-[1.6rem] text-gray-800">
              Learn by building real apps and solving real problems
            </div>
          </div>
        </div>

        <div
          className={` text-black border border-slate-300 w-[17rem] rounded-xl p-4  flex flex-col justify-center items-center ${card}`}
        >
          <div>
            <i class="fa-solid fa-location-dot text-4xl text-teal-600"></i>
          </div>
          <div className="text-2xl  my-2  flex flex-col justify-center items-center w-full ">
            <div className="">
              <div className="font-bold mb-2">Beginner-Friendly</div>
              {/* <div className=" flex justify-center">Paths</div>s */}

              <div className="text-base  text-gray-800">
                <div>Step-by-step guidance no experience needed</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={` text-black border border-slate-300 w-[17rem] rounded-xl p-4  flex flex-col justify-center items-center ${card}`}
        >
          <div>
            <i className="fa-solid fa-users text-teal-600 text-4xl"></i>
          </div>
          <div className="text-2xl  my-2">
            <div className="font-bold mb-2">Community support</div>{" "}
            <div>
              <div className="text-base leading-[1.6rem] text-gray-800">
                Ask questions, get feedback, and grew together
              </div>
            </div>
          </div>
        </div>

        <div
          className={` text-black border border-slate-300 w-[17rem] rounded-xl p-4  flex flex-col justify-center items-center ${card}`}
        >
          <div>
            <i class="fa-solid fa-chart-line text-4xl text-teal-600"></i>
          </div>
          <div className="text-2xl my-2">
            <div className="mb-2 font-bold">Track your progress</div>{" "}
            <div>
              <div className="text-base leading-[1.6rem] text-gray-800">
                Save lessons, earn badges, and celebrate milestones
              </div>
            </div>{" "}
          </div>
        </div>
      </div>

      {/* Second Card

       */}
    </div>
  );
};

export default Sec;
