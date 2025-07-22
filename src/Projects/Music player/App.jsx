// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh
// rffffffffffffffffffffffffhh

import { useState, useRef } from "react";
import Songs from "./Message";

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);

  const playSong = (songUrl, songTitle) => {
    setCurrentSong(songTitle);
    audioRef.current.src = songUrl;
    audioRef.current.play();
  };

  const The_Items = Songs.map((ele) => {
    const isActive = currentSong === ele.title;

    return (
      <div
        key={ele.title}
        className={`flex items-center justify-center ${
          isActive ? "bg-teal-800" : "bg-blue-700"
        } m-4 p-4 px-6 rounded-lg text-white transition-all duration-300`}
      >
        <button onClick={() => playSong(ele.url, ele.title)}>
          <i className="fa-solid fa-circle-play text-[2rem] mr-4 hover:scale-110 transition-transform"></i>
        </button>

        <div className="w-full flex gap-8 justify-between">
          <div>
            <div className="text-2xl font-bold">{ele.title}</div>
            <div>{ele.artist}</div>
          </div>
          <div className="flex flex-col items-end">
            <div>{ele.album}</div>
            <div>{ele.duration}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl">
        {The_Items}
        <audio ref={audioRef} controls className="hidden" />
      </div>
    </div>
  );
};

export default App;
