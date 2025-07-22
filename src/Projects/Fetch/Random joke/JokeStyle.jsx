const JokeStyle = (props) => {
  const { revealer, joke } = props;

  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className="text-6xl font-bold mb-4">{joke.question}</div>
      <div className=" w-[28rem] h-[5rem]  flex items-center justify-center ">
        {revealer == true ? (
          <div className="text-blue-500 text-3xl my-3">{joke.answer}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default JokeStyle;

("https://api.react-formula.com/learning-api/demos/random-joke/jokes");
