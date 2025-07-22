import catsInfo from "./Initial_Cats";
import CatsItem from "./CatsItem";
import { useState } from "react";
import { image } from "framer-motion/client";
const App = () => {
  const [cats, SetCats] = useState(catsInfo);
  const [name, SetName] = useState("");
  const [age, SetAge] = useState(0);
  const [imageurl, SetImageurl] = useState("");
  const [interests, SetInterests] = useState("");

  const mapped = catsInfo.map((ele, idx) => {
    return <CatsItem cats={ele} key={idx} />;
  });

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Form start */}
      <form
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          const newcats = { name, age, imageurl, interests };
          console.log(["Adding cats", newcats]);
        }}
        className="bg-slate-200 shadow-2xl flex  flex-col m-4 rounded-xl overflow-clip"
      >
        <div className="border border-blue-600 bg-purple-700 flex justify-center py-2 text-xl font-bold">
          Create a cat profile
        </div>
        <div className="px-4 py-4">
          <div className="my-2  ">
            <label htmlFor="Name " className="text-gray-700 text-xl">
              Name
            </label>
            <input
              type="text"
              id="Name"
              value={name}
              onChange={(e) => {
                SetName(e.target.value);
              }}
              required
              placeholder="Enter name"
              className="bg-white  text-black rounded-lg p-2 w-full border border-gray-300 focus:outline focus:outline-purple-600"
            />
          </div>

          <div className="flex gap-2 mb-2">
            <div className="flex flex-col ">
              <label htmlFor="Age" className="text-gray-700 text-xl">
                Age
              </label>
              <input
                id="Age"
                type="number"
                value={age}
                onChange={(e) => {
                  SetAge(Number(e.target.value));
                }}
                required
                min={1}
                max={25}
                placeholder=""
                className="bg-white focus:outline focus:outline-purple-600 text-black w-16  border border-gray-300  rounded-lg p-2 "
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="Image" className="text-gray-700 text-xl">
                Image Url
              </label>
              <input
                id="Image"
                type="text"
                value={imageurl}
                onChange={(e) => {
                  SetImageurl(e.target.value);
                }}
                required
                className="bg-white focus:outline focus:outline-purple-600 text-black rounded-lg border border-gray-300 p-2"
                placeholder="Enter image url"
              />
            </div>
          </div>
          <div className=" flex flex-col">
            <label htmlFor="Interests" className="text-gray-700 text-2xl ">
              Interests
            </label>
            <textarea
              name=""
              id="Interests"
              value={interests}
              onChange={(e) => {
                SetInterests(e.target.value);
              }}
              required
              maxLength={100}
              className=" w-full bg-white focus:outline focus:outline-purple-600 text-black rounded-lg border border-gray-300 p-2"
              placeholder="Your cats interest"
            ></textarea>
          </div>

          <div className=" mt-4 ">
            <button className="bg-rose-500 w-full py-2 rounded-lg">
              Create
            </button>
          </div>
        </div>
      </form>
      {/* form end */}
      <div>{mapped}</div>
    </div>
  );
};

export default App;
