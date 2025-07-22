const Sec2 = () => {
  return (
    <div>
      <div>
        <div className="mt-12">
          <div className="text-center mb-4">
            <h1 className="font-extrabold">Popular Learning Tracks</h1>
          </div>

          <div className="flex text-black w-full justify-center">
            <div className="flex justify-center gap-8 flex-wrap w-full">
              {/* Parent cont */}
              <div className="bg-white w-full  max-w-[25rem] h-full max-h-[10rem] mb-10 rounded-lg">
                <div>
                  <div className="flex flex-col justify-between p-4">
                    <div className="font-bold text-2xl my-2">
                      Web Development Essentials
                    </div>
                    <div>
                      Learn HTML CSS & JS by building a portfolio website
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-teal-500 to-teal-800 w-full py-2 text-white text-xl rounded-b-lg">
                    Start learning
                  </button>
                </div>
              </div>

              <div className="bg-white w-full max-w-[25rem] h-full max-h-[10rem] mb-10 rounded-lg">
                <div>
                  <div className="flex flex-col justify-between p-4">
                    <div className="font-bold text-2xl my-2">
                      React Crash Course
                    </div>
                    <div>
                      Build android apps, interactive UI's with modern react &
                      hooks
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-teal-500 to-teal-800 w-full py-2 text-white text-xl rounded-b-lg">
                    Start learning
                  </button>
                </div>
              </div>

              <div className="bg-white w-full max-w-[25rem] mb-10 rounded-lg">
                <div>
                  <div className="flex flex-col justify-between p-4">
                    <div className="font-bold text-2xl my-2">
                      Python for beginners
                    </div>
                    <div>
                      Write you first script in python build a calculator and
                      more
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-teal-500 to-teal-800 w-full py-2 text-white text-xl rounded-b-lg">
                    Start learning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec2;
