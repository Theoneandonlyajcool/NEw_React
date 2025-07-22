import { useState } from "react";

const Heading = (props) => {
  const { textclass, darkclass, oncli, heading_Bg } = props;
  const [IsModal, SetIsModal] = useState(false);
  const [Mail, SetMail] = useState("mail");
  const [Password, Setpassword] = useState("hello");
  return (
    <div
      className={` ${
        heading_Bg
          ? "bg-slate-200 text-black fixed"
          : "bg-gray-800 text-white fixed"
      } w-full  py-[0.3rem] flex justify-center flex-col`}
    >
      <div className="flex justify-center items-center py-2 px-2  w-full max-w-[85rem]">
        <div className="w-full  max-w-7xl flex  justify-between items-center">
          <div className="font-bold text-6xl flex  items-center">
            <img
              src="/New_Auxle-removebg-preview.png"
              className="w-[4rem] h-[4rem] object-cover bg-gradient-to-r from-teal-500 to-teal-800 rounded-full"
              alt=""
            />
            <div>Auxle</div>
          </div>
          <div className="w-full max-w-[28rem] flex items-center justify-between">
            <div
              className="flex  w-full max-w-[18rem] 
          justify-between"
            >
              <ul className="flex  w-full  justify-between ">
                <li>
                  <a
                    href="#"
                    className={`${textclass} hover:text-teal-500 transition ease-in-out duration-300`}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`${textclass} hover:text-teal-500 transition ease-in-out duration-300`}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`${textclass} hover:text-teal-500 transition ease-in-out duration-300`}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <button
                className="bg-gradient-to-r cursor-pointer  from-teal-500 to-teal-900 hover:bg-teal-950  py-2 px-6 rounded-lg text-white transition ease-in-out duration-200"
                onClick={() => {
                  SetIsModal(true);
                }}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="absolute top-0 z-10   flex  w-full max-w-[20rem] justify-center items-center ">
          <div className="w-full  flex justify-center max-w-[20rem]">
            <div className="flex border border-gray-300 bg-slate-400/15 py-2 px-4 rounded-b-lg w-full max-w-[13rem] justify-around bg-">
              <div
                onClick={() => oncli()}
                className={` py-1 px-2 w-[5rem] h-[2rem] rounded-xl flex items-center transition ease-in-out duration-500 cursor-pointer ${darkclass}`}
              >
                <div className="bg-white p-3 transition ease-in-out duration-700  rounded-full"></div>
              </div>
              <button className="font-bold text-base">Dark mode</button>
            </div>
          </div>
        </div>
      </div>

      {IsModal ? (
        <div className="fixed top-0 left-0 z-50 bg-gray-700/70 h-full w-full  backdrop-blur-md flex justify-center items-center ">
          <div className=" p-2 px-6 bg-white  rounded-xl">
            <form
              action="submit"
              onSubmit={(e) => {
                e.preventDefault();
                SetIsModal(false);
              }}
              className=""
            >
              <div className="text-2xl font-bold text-black my-3 ">Sign in</div>
              <div className="flex flex-col ">
                <input
                  type="mail"
                  // value={Mail}
                  placeholder="Email address"
                  className="bg-white p-2 px-4 text-xl text-gray-900 rounded-xl border focus:border-none focus:outline focus:outline-teal-500  border-gray-600 my-2"
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="bg-white p-2 px-4 text-xl text-gray-900 rounded-xl border focus:border-none focus:outline focus:outline-teal-500 border-gray-600 my-2"
                  required
                />
              </div>
              <button className="w-full border border-blue-400 bg-gradient-to-r from-teal-400 to-teal-700 py-2  my-2 rounded-lg text-white text-2xl">
                Submit
              </button>
              <div
                className="w-full flex justify-end text-gray-600 cursor-pointer mt-4 hover:text-teal-700"
                onClick={() => {
                  SetIsModal(false);
                }}
              >
                cancel
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* <div className="fixed top-0 z-10 flex w-full justify-center items-center ">
        <div className="flex border border-gray-300 bg-slate-400/15 py-2 px-4 rounded-b-lg w-full max-w-[13rem] justify-around bg-">
          <div
            onClick={() => oncli()}
            className={` py-1 px-2 w-[5rem] h-[2rem] rounded-xl flex items-center transition ease-in-out duration-500 ${darkclass}`}
          >
            <div className="bg-white w-[1.2rem] h-[1rem] rounded-full"></div>
          </div>
          <button className="font-bold text-base">Dark mode</button>
        </div>
      </div> */}
    </div>
  );
};

export default Heading;
