import { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";

const App = () => {
  const [IsLoading, SetIsLoading] = useState(true);
  const [profiles, SetProfiles] = useState([]);

  const fetchprofiles = () => {
    fetch(
      "https://api.react-formula.com/learning-api/demos/teammates-project/profiles"
    )
      .then((response) => response.json())
      .then((data) => {
        SetProfiles(data);
        SetIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchprofiles();
  }, []);

  const profilecards = profiles.map((profile, idx) => (
    <ProfileCard key={idx} profile={profile} />
  ));

  return (
    <div className="flex bg-slate-200  justify-center h-full items-center ">
      {IsLoading ? (
        <i className=" fa-solid fa-spinner text-4xl animate-spin text-teal-400"></i>
      ) : (
        <div className="w-full max-w-lg">{profilecards}</div>
      )}
    </div>
  );
};

export default App;
