// Sign in form

import { useState } from "react";

const Form = () => {
  const [Username, SetUsername] = useState("");
  const [Password, SetPassword] = useState("");
  return (
    <div className="flex justify-center items-center h-screen text-black bg-white ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form Submitted");
        }}
        className="flex flex-col overflow-clip border border-gray-400  rounded-lg"
      >
        <div className="flex flex-col px-4 py-6 ">
          <div className="flex flex-col">
            <div className="font-bold text-3xl text-center mb-2">Sign in</div>
            <input
              type="text"
              className="my-2 bg-white border border-gray-400 p-3 text-gray-700 rounded-xl"
              placeholder="Enter username"
              value={Username}
              onChange={(e) => {
                SetUsername(e.target.value);
              }}
            />
            <input
              type="password"
              className="my-2 bg-white border border-gray-400 p-3 text-gray-700 rounded-xl"
              placeholder="Enter password"
              value={Password}
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <button className="bg-blue-500 p-2 text-white text-2xl font-bold">
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default Form;
