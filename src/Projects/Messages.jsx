import { useState } from "react";

const Messages = () => {
  const [text, SetText] = useState("");
  const [messages, setMessages] = useState(["Hey programmers", "What is up"]);

  const messageItems = messages.map((ele, idx) => {
    return (
      <div className="" key={idx}>
        <div className="border  border-gray-500 px-6 py-3 m-2 rounded-xl ">
          {ele}
        </div>
      </div>
    );
  });

  // console.log(text);

  return (
    <div className="flex flex-col items-center justify-center ">
      <form
        action=""
        className="m-8 flex"
        onSubmit={(e) => {
          e.preventDefault();
          setMessages([...messages, text]);
          SetText("");
        }}
      >
        <input
          type="text"
          className="bg-white py-4 px-4 border-2 border-gray-700 rounded-xl text-gray-900 focus:outline-double focus:outline-blue-700"
          value={text}
          onChange={(e) => {
            SetText(e.target.value);
          }}
        />

        <button className="bg-blue-700 px-6 py-2 rounded-xl ml-2">Send</button>
      </form>
      <div className="w-full max-w-sm">{messageItems}</div>
    </div>
  );
};

export default Messages;
