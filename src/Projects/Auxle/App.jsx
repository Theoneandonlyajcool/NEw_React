import Heading from "./Header";
import { useState } from "react";
import Body from "./Body";
import Sec from "./Sec";
// import Footer from "./Footer";
import Testimonial from "./Testimonials";
import Sec2 from "./Sec2";
import TestimonialStyle from "./TestimonialStyle";
import Mail from "./MailSec";
import Ending from "./Ending";

const App = () => {
  const [IsDark, SetIsDark] = useState(true);
  const [TestIdx, SetTestIdx] = useState(0);
  const chgText = IsDark ? "text-black" : "text-white";
  const chgbg = IsDark ? "bg-slate-400" : "bg-teal-600 justify-end";
  const Card_color = IsDark ? "bg-white" : "bg-slate-400/80";
  const maxIndex = Testimonial.length - 3;
  const testimonial_Col = IsDark
    ? "bg-slate-200 border border-gray-600"
    : "bg-slate-900/50 border border-gray-500";

  // const btn_Style =
  //   TestIdx > Testimonial.length ? "bg-red-500" : console.log(okay);

  const mapped = Testimonial.slice(TestIdx, TestIdx + 3).map((ele, idx) => {
    return <TestimonialStyle col={testimonial_Col} card={ele} key={idx} />;
  });

  return (
    <div
      className={` h-full scroll-smooth ${
        IsDark ? "bg-slate-200 text-black" : "bg-gray-800 text-white"
      }`}
    >
      <div>
        <Heading
          textclass={chgText}
          darkclass={chgbg}
          oncli={() => {
            SetIsDark(!IsDark);
          }}
          heading_Bg={IsDark}
        />
      </div>

      <Body />

      <Sec card={Card_color} />
      {/* <Footer /> */}
      <div className="mt-4">
        <div className="text-4xl font-bold text-center">
          What Learners Are Saying
        </div>
        <div className="flex w-full items-center justify-center gap-6">
          <div
            onClick={() => {
              if (TestIdx > 0) SetTestIdx(TestIdx - 1);
            }}
            disabled={TestIdx === 0}
            className={` flex justify-center items-center
          p-2  transition ease-in-out duration-300
          rounded-full text-4xl text-white
          ${
            TestIdx === 0
              ? "bg-teal-700 cursor-not-allowed"
              : "bg-teal-700 hover:bg-teal-800 cursor-pointer"
          }
        `}
          >
            <iconify-icon icon="jam:chevrons-left" />
          </div>

          {mapped}

          <div
            onClick={() => {
              if (TestIdx < maxIndex) SetTestIdx(TestIdx + 1);
            }}
            disabled={TestIdx >= maxIndex}
            className={`flex justify-center items-center
          p-2  transition ease-in-out duration-300
          rounded-full text-4xl text-white
          ${
            TestIdx >= maxIndex
              ? "bg-teal-700 cursor-not-allowed"
              : "bg-teal-700 hover:bg-teal-800 cursor-pointer"
          }
        `}
          >
            <iconify-icon icon="jam:chevrons-right" />
          </div>
        </div>
      </div>

      <div className="">
        <Sec2 />{" "}
      </div>

      <div className="">
        <Mail />
      </div>

      <Ending />
    </div>
  );
};

export default App;
