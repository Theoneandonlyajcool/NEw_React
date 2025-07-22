// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth
// rdfiuhurhrjth

import { useState } from "react";
import Recipe from "./CookieRecipe";
import Modal from "./Modal";

const App = () => {
  const [isModalOpen, SetisModalOpen] = useState(false);
  return (
    <div>
      <div className="bg-blue-700 py-4 flex justify-center">
        <div className=" flex justify-between w-full max-w-4xl">
          <div className="text-3xl">Aj's Recipe</div>
          <button
            className=""
            onClick={() => {
              SetisModalOpen(true);
            }}
          >
            {" "}
            <i className="fa-solid fa-right-to-bracket mr-2"></i>Sign in
          </button>
        </div>
      </div>
      <Recipe />
      {isModalOpen && (
        <Modal
          onClose={() => {
            SetisModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default App;
