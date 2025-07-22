const Weather_Icons = {
  Sunny: <i className="fa-solid fa-sun text-4xl text-yellow-500"></i>,
  "Partly Cloudy": (
    <i className="text-gray-400 text-4xl fa-solid fa-cloud-sun bg-gradient-to-r from-yellow-100 via-yellow-300 to-gray-700 bg-clip-text text-transparent"></i>
  ),
  Cloudy: <i className="text-4xl text-gray-600 fa-solid fa-cloud"></i>,
  Rain: (
    <i className="text-4xl text-neutral-500 fa-solid fa-cloud-rain bg-gradient-to-t from-blue-500 via-gray-500 to-gray-500 bg-clip-text text-transparent"></i>
  ),
  Snow: <i className="text-blue-400 text-4xl fa-solid fa-snowflake"></i>,
};

const Styling = (props) => {
  const { weather } = props;

  return (
    <div className="m-4 bg-white w-[9rem] border rounded-lg flex flex-col justify-between items-center h-[9rem] p-3 shadow-2xl">
      <div className="text-xl font-bold">{weather.day}</div>
      <div>
        {/* <i className="fa-solid fa-sun text-4xl text-yellow-500"></i> */}
        {Weather_Icons[weather.description]}
      </div>

      <div className=" w-full flex  justify-between">
        <div className="text-stone-800">{weather.high_temp}&deg;f</div>
        <div className="text-stone-400">{weather.low_temp}&deg;f</div>
      </div>
    </div>
  );
};

export default Styling;
