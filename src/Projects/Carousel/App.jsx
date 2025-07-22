import TestimonialCarousel from "./TestimonialCarousel";

const App = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-5xl  flex flex-col items-center">
        <div className="text-3xl text-neutral-600 border-b-4 border-b-orange-600">
          Customer's love Al's autos
        </div>

        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default App;
