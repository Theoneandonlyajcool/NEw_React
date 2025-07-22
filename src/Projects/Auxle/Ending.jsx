const Ending = () => {
  return (
    <div className="text-white flex flex-col justify-center bg-teal-700 px-4 ">
      {/* More like about section */}
      <div className="flex justify-between items-center gap-2 my-6 ">
        <div className="flex flex-col  w-full max-w-[27rem]  ">
          <div className="flex  items-center">
            <img
              src="/New_Auxle-removebg-preview.png"
              alt=""
              className="w-[4rem] h-[4rem] object-cover bg-teal-700  rounded-full "
            />
            <h1 className="font-extrabold ">Auxle</h1>
          </div>

          <p>
            Auxle empowers learners to master programming through interactive,
            clear, and structured content
          </p>
        </div>
        {/* product */}
        <div>
          <div className="font-bold text-2xl mb-2  underline">Product</div>
          <ul className=" flex flex-col gap-2">
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition ease-in-out duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition ease-in-out duration-300"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition ease-in-out duration-300"
              >
                Integrations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition ease-in-out duration-300"
              >
                Changelog
              </a>
            </li>
          </ul>
        </div>
        {/* Resources */}
        <div>
          <div className="font-bold text-2xl mb-2 underline">Resources</div>
          <ul className=" flex flex-col gap-2">
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition ease-in-out duration-300"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition ease-in-out duration-300"
              >
                Tutorials
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition ease-in-out duration-300"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition ease-in-out duration-300"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
        {/* Company */}
        <div className="">
          <div className="font-bold text-2xl mb-2 underline">Company</div>
          <ul className=" flex flex-col gap-2">
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition ease-in-out duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition ease-in-out duration-300"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition ease-in-out duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition ease-in-out duration-300"
              >
                Partners
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-4  w-full max-w-[20rem]">
        <div>
          <i className="fa-brands fa-twitter text-2xl hover:text-blue-500 transition ease-in-out duration-300 cursor-pointer"></i>
        </div>
        <div>
          <i
            className="fa-brands fa-instagram text-2xl hover:text-pink-500 transition ease-in-out duration-300 cursor-pointer"
            onClick={() => {
              open("https://www.instagram.com/ajcool347/", "_blank");
            }}
          ></i>
        </div>
        <div>
          <i className="fa-brands fa-linkedin-in text-2xl hover:text-blue-700 transition ease-in-out duration-300 cursor-pointer"></i>
        </div>
        <div>
          <i
            className="fa-brands fa-github text-2xl hover:text-gray-700 transition ease-in-out duration-300 cursor-pointer"
            onClick={() => {
              open(
                "https://github.com/Theoneandonlyajcool/My-first-project",
                "_blank"
              );
            }}
          ></i>
        </div>
      </div>

      {/* Policy and so on */}
      <div className="w-full">
        <div className="bg-gray-50 h-[1px] w-full my-2"></div>
        <div className="flex justify-between items-center">
          <div>
            <i class="fa-regular fa-copyright"></i> 2025 Auxle. All right
            reserved{" "}
          </div>
          <div>
            <ul className="flex  w-[30rem] max-w-[28rem] justify-between ">
              <li>
                <a href="#" className="hover:text-gray-300 underline">
                  Privacy Policy{" "}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 underline">
                  Terms of service{" "}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 underline">
                  Cookie Settings{" "}
                </a>
              </li>
            </ul>
          </div>{" "}
        </div>
        <div className="bg-gray-50 h-[1px] w-full my-2"></div>
      </div>
    </div>
  );
};

export default Ending;
