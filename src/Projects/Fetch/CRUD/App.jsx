import { useState, useEffect } from "react";
const App = () => {
  const [Api_D, Apidata] = useState([]);
  const [load, Setisload] = useState(true);
  const [username, SetUsername] = useState("Guest");
  const [text, SetText] = useState("Anything");

  const fetchData = async () => {
    Setisload(true);
    const res = await fetch("http://localhost:5000/messages");
    const data = await res.json();
    Apidata(data);
    Setisload(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(Api_D);

  const mapped = Api_D.map((ele, idx) => {
    return (
      <div
        className="border m-2 rounded-md border-gray-500 w-[40rem] h-[6rem] flex  flex-col  justify-center pl-4 gap-2"
        key={idx}
      >
        <div className="font-bold">{ele.name}</div>
        <div>{ele.Message}</div>
      </div>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    fetch("http://localhost:5000/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: username, Message: text }),
    }).then(() => {
      fetchData();
    });
  };

  return (
    <div
      className={`flex  flex-col  justify-center items-center ${
        load ? "h-[100vh]" : "h-fit"
      }`}
    >
      {load ? (
        <div>
          <i className="fa-solid fa-spinner text-5xl text-blue-500 animate-spin"></i>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div>{mapped}</div>

          <form
            action="submit"
            onSubmit={handleSubmit}
            className="my-4 flex gap-2  h-[4.5rem] p-4"
          >
            <input
              type="text"
              placeholder="name"
              className="outline-none bg-slate-300/20 rounded-md px-2 w-[5rem] py-1 shadow-inner"
              value={username}
              onChange={(e) => SetUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter message"
              className="outline-none bg-slate-300/20 rounded-md px-2 w-[15rem] py-1 shadow-inner "
              value={text}
              onChange={(e) => SetText(e.target.value)}
            />
            <button className="bg-gradient-to-tr from-blue-500 to-blue-700 rounded-md text-white px-5 ">
              Post
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;

// Webera

// const App = () => {
//   return (
//     <div className="bg-slate-800 text-white" >
//       <header className="border-2 border-red-900 flex justify-center">
//         {/* Container */}
//         <div className="border-2 border-green-500 flex w-full max-w-[80rem] justify-between items-center">
//           {/* Logos */}
//           <div className="flex items-center ">
//             <img
//               src="/public/download-removebg-preview.png"
//               alt=""
//               className="w-[3rem] border-2 border-red-500"
//             />
//             <h1 className="text-4xl font-bold">Webera</h1>
//           </div>

//           {/* Links */}
//           <div className="border-2 border-yellow-600 w-full max-w-[30rem]">
//             <ul className="flex justify-between">
//               <li className="cursor-pointer">
//                 Devops<i class="fa-solid fa-chevron-down"></i>
//               </li>
//               <li className="cursor-pointer">
//                 Resources<i class="fa-solid fa-chevron-down"></i>
//               </li>
//               <li className="cursor-pointer">Blog</li>
//               <li className="cursor-pointer">About us</li>
//             </ul>
//           </div>

//           {/* contact */}
//           <div>
//             <button className="border border-gray-300 py-1 px-4 rounded-md">
//               Contact us
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main */}
//       <main></main>
//     </div>
//   );
// };

// export default App;
