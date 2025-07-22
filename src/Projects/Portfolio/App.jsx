// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt
// rlhthrtuhthrtoihrt

// import { useState } from "react";
// import Toggle from "./Toogle_Button";

// const App = () => {
//   const [IsOn, SetIsOn] = useState(true);
//   return (
//     <div
//       className={`flex justify-center  p-4 ${
//         IsOn ? "bg-gray-700 text-white" : "bg-white text-black"
//       }`}
//     >
//       <div className=" w-full max-w-2xl">
//         <div className="flex justify-center">
//           <Toggle />
//           <button
//             className={` ${
//               IsOn
//                 ? "bg-white border-2 border-black text-black "
//                 : " bg-black text-white"
//             }`}
//             onClick={() => {
//               SetIsOn(!IsOn);
//             }}
//           >
//             Dark Mode
//           </button>
//         </div>
//         <p className="my-4">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
//           facere minima sunt ea? Quas eos sunt vel. Dolor sed unde in! Ad
//           dolores aperiam, nobis odit quis fugit explicabo iste perspiciatis.
//           Laboriosam nam, iste voluptate delectus omnis iusto magni repudiandae
//           dolore sapiente quo! Ducimus esse aliquid delectus repellendus neque,
//           error laboriosam enim hic vel aliquam molestias ratione cum officia
//           harum vero consequuntur commodi, veniam recusandae nam dolorem. Totam,
//           quas maxime, quam recusandae voluptatibus laboriosam corrupti soluta
//           nulla molestiae, vitae fugit cumque consequatur maiores. Voluptates,
//           reiciendis. Temporibus, provident iste repellendus quasi quisquam
//           voluptates officia quo! Unde, velit commodi. Maiores, repellendus
//           quibusdam.
//         </p>
//         <p className="my-4">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
//           corrupti quod officiis pariatur magnam officia debitis unde! Voluptate
//           rerum sed sunt ducimus exercitationem cupiditate iusto, voluptatem
//           quisquam dolor alias culpa, aut, eum tempore? Mollitia quis facere
//           eius enim rerum ipsam, non velit? Commodi praesentium odit natus
//           recusandae possimus esse explicabo officiis nesciunt eaque, sunt non
//           dolorem ducimus voluptas eos numquam culpa quis nobis aspernatur omnis
//           sit. Laudantium numquam eum a rerum repellat officiis, accusamus
//           doloremque natus minima aspernatur. Sapiente quasi doloribus
//           recusandae a? Ad necessitatibus, similique nulla ducimus dolorum
//           architecto reiciendis quas tempore quisquam blanditiis ipsa velit
//           repellat? Totam, officia?
//         </p>
//         <p className="my-4">
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
//           voluptate laudantium? Voluptates blanditiis in nemo, dolore at commodi
//           nam sapiente magni quidem error. Eveniet est possimus quia nam dolores
//           quidem veritatis dicta iste. Deleniti culpa alias a earum error
//           provident optio quibusdam facere fugit! Provident reiciendis quas
//           dolor esse odio, dolore quo voluptatum exercitationem explicabo minima
//           corrupti autem, fuga cumque vitae dignissimos aut dolorum doloremque
//           dolores nulla molestias delectus officiis non libero obcaecati.
//           Voluptate natus commodi sunt aut repellat quaerat beatae inventore,
//           eligendi ut hic. Ut magnam obcaecati suscipit. Ut voluptatem officia
//           et odit sequi? Quas architecto suscipit similique officia.
//         </p>
//         <p className="my-4">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae natus
//           asperiores saepe architecto recusandae accusantium vel quibusdam, odit
//           iure beatae minus soluta quam officiis minima sequi ipsa eligendi amet
//           impedit aut. Error neque veniam dolores? At porro dolor mollitia,
//           veniam repellendus exercitationem officia, nostrum libero blanditiis
//           sed itaque natus voluptatum ad sequi possimus dolores rerum suscipit
//           cum explicabo. Consectetur illo nulla porro soluta quibusdam
//           reiciendis, a dolorem eveniet voluptatibus fugiat laboriosam laborum
//           molestiae, cum quod cupiditate dicta velit nemo unde delectus quis.
//           Ipsam hic eaque, dicta nulla incidunt aspernatur, officia sunt modi
//           voluptate molestiae possimus, delectus consequatur laborum et tenetur!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default App;

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
