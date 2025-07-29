import Btn from "./components/button";
import Card from "./components/Card";
import teamMembers from "./Array";

const App = () => {
  const mapped = teamMembers.map((ele) => {
    return (
      <Card
        image={ele.picture}
        name={ele.name}
        stack={ele.stack}
        desc={ele.description}
      />
    );
  });

  return (
    <div className="flex  h-fit justify-center items-center flex-col">
      <div className=" w-full flex flex-wrap justify-around max-w-[70rem] mt-4 mb-4">
        {mapped}
      </div>
    </div>
  );
};

export default App;

// import { useState, useEffect } from "react";
// const App = () => {
//   const [Api_D, Apidata] = useState([]);
//   const [load, Setisload] = useState(true);
//   const [username, SetUsername] = useState("Guest");
//   const [text, SetText] = useState("Anything");

//   const fetchData = async () => {
//     Setisload(true);
//     const res = await fetch("http://localhost:5000/messages");
//     const data = await res.json();
//     Apidata(data);
//     Setisload(false);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   console.log(Api_D);

//   const mapped = Api_D.map((ele, idx) => {
//     return (
//       <div
//         className="border m-2 rounded-md border-gray-500 w-[40rem] h-[6rem] flex  flex-col  justify-center pl-4 gap-2"
//         key={idx}
//       >
//         <div className="font-bold">{ele.name}</div>
//         <div>{ele.Message}</div>
//       </div>
//     );
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted");
//     fetch("http://localhost:5000/messages", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name: username, Message: text }),
//     }).then(() => {
//       fetchData();
//     });
//   };

//   return (
//     <div
//       className={`flex  flex-col  justify-center items-center ${
//         load ? "h-[100vh]" : "h-fit"
//       }`}
//     >
//       {load ? (
//         <div>
//           <i className="fa-solid fa-spinner text-5xl text-blue-500 animate-spin"></i>
//         </div>
//       ) : (
//         <div className="flex flex-col items-center">
//           <div>{mapped}</div>

//           <form
//             action="submit"
//             onSubmit={handleSubmit}
//             className="my-4 flex gap-2  h-[4.5rem] p-4"
//           >
//             <input
//               type="text"
//               placeholder="name"
//               className="outline-none bg-slate-300/20 rounded-md px-2 w-[5rem] py-1 shadow-inner"
//               value={username}
//               onChange={(e) => SetUsername(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Enter message"
//               className="outline-none bg-slate-300/20 rounded-md px-2 w-[15rem] py-1 shadow-inner "
//               value={text}
//               onChange={(e) => SetText(e.target.value)}
//             />
//             <button className="bg-gradient-to-tr from-blue-500 to-blue-700 rounded-md text-white px-5 ">
//               Post
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
