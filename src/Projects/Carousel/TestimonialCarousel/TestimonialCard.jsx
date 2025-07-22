import testimonials from "../testimonials";

const TestimonialCard = (props) => {
  const { testimonial } = props;
  return (
    <div className="flex flex-col items-center w-64 m-4">
      <div className="flex flex-col items-center bg-gradient-to-r from-orange-300 to-red-500  w-64 rounded-t-lg p-2">
        <img
          src={testimonial.portrait}
          alt=""
          className="w-24  h-[6rem]  rounded-full"
        />
        <div>{testimonial.name}</div>
      </div>

      <div className="flex flex-col items-center border bg-slate-100 text-black border-neutral-300 px-4 py-6 rounded-b-lg">
        <div className="text-orange-500">
          {testimonial.rating}
          <i className="fa-solid fa-star t mx-1"></i>
        </div>
        <div className="leading-relaxed">{testimonial.text}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
