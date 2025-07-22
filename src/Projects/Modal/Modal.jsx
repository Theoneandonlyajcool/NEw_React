// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth

const Modal = (props) => {
  const { onClose } = props;
  return (
    <div className="fixed top-0 left-0  bg-stone-400/10 backdrop-blur-sm w-full h-full flex justify-center items-center">
      <div className="bg-white px-12 py-8 text-black flex flex-col items-center  rounded-xl">
        <div>
          <form action="button">
            {/* <label htmlFor="" className="font-bold text-lg">
              Full Name:
            </label>
            <br />
            <input
              type="text"
              placeholder="John Smith"
              className="bg-white border my-3 p-2 border-blue-700 rounded-2xl"
            />{" "}
            <br /> */}
            {/* Mail */}
            <label htmlFor="" className="font-bold text-lg ">
              Mail :
            </label>
            <br />
            <input
              type="text"
              placeholder="johnsmith12@gmail.com"
              className="bg-white border my-3 p-2 border-blue-700 rounded-2xl"
            />{" "}
            <br />
            {/* PassWords */}
            <label htmlFor="" className="font-bold text-lg ">
              PassWord :
            </label>
            <br />
            <input
              type="text"
              id="password"
              // placeholder="johnsmith12@gmail.com"
              className="bg-white border my-3 p-2 border-blue-700 rounded-2xl"
            />{" "}
            <br />
            {/* Confirm */}
            <label htmlFor="" className="font-bold text-lg ">
              Confirm Password :
            </label>
            <br />
            <input
              type="text"
              id="Confirm"
              // placeholder="johnsmith12@gmail.com"
              className="bg-white border my-3 p-2 border-blue-700 rounded-2xl "
            />
          </form>
        </div>{" "}
        <button
          className="w-full mt-6 bg-blue-700 hover:bg-blue-900 transition duration-300 ease-in-out "
          onClick={() => {
            const conf = document.getElementById("Confirm").value;
            const psw = document.getElementById("password").value;

            if (conf == psw) {
              onClose();
            } else {
              alert("Password's don't match");
            }
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Modal;
