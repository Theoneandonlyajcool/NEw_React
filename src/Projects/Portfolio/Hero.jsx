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

import myImage from "./Work_pics/portfolio_image.jpeg";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white">
      <img
        src={myImage}
        alt="my_image"
        className="w-40 h-40 object-cover rounded-full"
      />
      <h1 className="text-5xl font-bold">
        Hi, I'm <span className="text-blue-500">A.J</span>
      </h1>
      <p className="text-lg mt-4">
        A React Frontend Developer | React Enthusiast
      </p>
      <button
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-500 hover:border-blue-400 transition duration-500 ease-in-out text-white rounded-lg hover:text-white hover:bg-blue-600"
      >
        View My Work
      </button>
    </section>
  );
};

export default Hero;
