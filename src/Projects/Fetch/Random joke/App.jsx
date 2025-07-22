import JokeStyle from "./JokeStyle";
import { useEffect, useState } from "react";

const App = () => {
  const [showAnswer, setShowAnswer] = useState(true);
  const [joke, setJoke] = useState(null);

  const FetchJoke = () => {
    fetch("https://api.react-formula.com/learning-api/demos/random-joke/jokes")
      .then((response) => response.json())
      .then((data) => {
        setShowAnswer(false); // Hide answer when new joke is fetched
        setJoke(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    FetchJoke();
  }, []);

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <div className="flex flex-col items-center">
        {joke && <JokeStyle revealer={showAnswer} joke={joke} />}

        <div>
          {joke && (
            <button
              className={`bg-blue-700 py-3 px-4 rounded-xl text-white m-2 ${
                showAnswer ? "bg-green-700" : "bg-red-700"
              }`}
              onClick={() => setShowAnswer(!showAnswer)}
            >
              {showAnswer ? "Hide Answer" : "Reveal Answer"}
            </button>
          )}

          <button
            className="bg-gray-700 py-3 px-4 rounded-xl text-white m-2"
            onClick={FetchJoke}
          >
            New Joke
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
