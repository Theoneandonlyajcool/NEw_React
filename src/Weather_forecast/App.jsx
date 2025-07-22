import { useState, useEffect } from "react";
import Styling from "../../../WeatherStyling";

const App = () => {
  const [Weather_Days, SetWeather_Days] = useState([]);
  const [IsLoading, SetIsLoading] = useState(true);

  const Fetch_Weather = async () => {
    SetIsLoading(true);
    const response = await fetch(
      "https://api.react-formula.com/learning-api/demos/weather-forecast/weather"
    );
    const data = await response.json();
    SetWeather_Days(data);
    SetIsLoading(false);
  };

  useEffect(() => {
    Fetch_Weather();
  }, []);

  console.log(Weather_Days);

  const mapped = Weather_Days.map((ele, idx) => {
    return <Styling weather={ele} key={idx} />;
  });

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <button
        className="bg-blue-400 py-2 px-4 rounded absolute top-4 right-4"
        onClick={() => {
          Fetch_Weather();
          // alert("clicked");
        }}
      >
        refresh
      </button>

      <div className="flex flex-col items-center w-full max-w-[26rem] ">
        {IsLoading ? (
          <div>
            {" "}
            <i className=" text-5xl text-blue-400 animate-spin fa-solid fa-spinner"></i>
          </div>
        ) : (
          <div className="flex">{mapped}</div>
        )}
      </div>
    </div>
  );
};

export default App;

("https://api.react-formula.com/learning-api/demos/weather-forecast/weather");
