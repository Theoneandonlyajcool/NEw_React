import testimonials from "../testimonials";
import { useState } from "react";

import TestimonialCard from "./TestimonialCard";

const TestimonialCarousel = () => {
  const [StartIdx, SetStartIdx] = useState(0);

  const TestimonialItems = testimonials
    .slice(StartIdx, StartIdx + 3)
    .map((ele, idx) => <TestimonialCard testimonial={ele} key={idx} />);

  return (
    <div className="flex items-center ">
      <button
        onClick={() => {
          if (StartIdx > 0) {
            SetStartIdx(StartIdx - 1);
          } else {
          }
        }}
      >
        <i
          className={`fa-solid fa-chevron-left  py-2 px-4 rounded-lg text-4xl ${
            StartIdx == 0
              ? "bg-gradient-to-r from-red-300 to-red-900"
              : "bg-gradient-to-r from-green-300 to-green-900"
          }`}
        ></i>
      </button>
      <div className="flex m-4 justify-center flex-wrap ">
        {TestimonialItems}
      </div>
      <button
        onClick={() => {
          if (StartIdx < testimonials.length - 3) {
            SetStartIdx(StartIdx + 1);
          } else {
          }
        }}
      >
        <i
          class={`fa-solid fa-chevron-right  py-2 px-4 rounded-lg text-4xl ${
            StartIdx < testimonials.length - 3
              ? "bg-gradient-to-r from-green-300 to-green-900"
              : "bg-gradient-to-r from-red-300 to-red-900"
          }`}
        ></i>
      </button>
    </div>
  );
};

export default TestimonialCarousel;
