const Mail = () => {
  return (
    <div className="bg-white flex justify-center  text-black mt-8">
      <div className=" flex my-3 flex-col items-center">
        <div className="font-bold text-6xl">Ready to level up?</div>
        <div className="text-gray-800 text-3xl my-2">
          Join thousands of learners on the tech journey
        </div>
        <div>
          <form
            className="flex i"
            action="submit"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              required
              type="mail"
              placeholder="Enter your email"
              className="bg-white py-2 px-4 border border-gray-600 rounded-l-xl focus:outline focus:border-none focus:outline-teal-700 "
            />
            <button className="bg-teal-700 text-white px-4 rounded-r-xl ">
              {" "}
              Start Learning
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mail;
