const Body = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      {/* Main Heading */}
      <div className="flex gap-2 text-8xl font-bold mt-16">
        <div>Learn.</div>
        <div>Build.</div>
        <div>Grow.</div>
      </div>

      {/* Subtext */}
      <div>
        <p className="text-xl text-gray-500 my-2">
          Welcome to Auxle, Your Tech Learning Companion
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center items-center mb-8">
        <div>
          <button className="bg-gradient-to-r from-teal-500 to-teal-800 py-2 px-4 rounded-lg  text-white">
            Browse Courses
          </button>
        </div>

        <div>
          <button className="bg-white py-2 px-4 rounded-lg border border-gray-300 text-gray-900">
            Join the community
          </button>
        </div>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-0 animate-bounce">
        <i className="fa-solid fa-chevron-down text-6xl text-teal-700"></i>
      </div>

      <div
        className="fixed right-2 bottom-2 animate-pulse bg-gradient-to-t from-teal-400 to-teal-700 w-[4rem] h-[4rem] flex justify-center rounded-full items-center cursor-pointer"
        onClick={() => {
          open("https://web.whatsapp.com/", "_blank");
        }}
      >
        {/* <i
          className="fa-solid  text-3xl  text-white  fa-phone"
          onClick={() => {
            alert("Contact clicked");
          }}
        ></i>
       */}

        <iconify-icon
          icon="mage:message-dots-round-fill"
          className="text-white text-5xl"
        ></iconify-icon>
      </div>
    </div>
  );
};

export default Body;
