import React from "react";
import FirstDiv from "./components/FirstDiv";
import SecondDiv from "./components/SecondDiv";

function App() {
  return (
    <div className="h-screen p-4 bg-gray-500 flex">
      {/* Left side div */}
      <div className="w-1/2 bg-gray-200 p-6 rounded-lg shadow-md">
        {/* Content for the left side div */}
        <p className="text-gray-700">
          Here are the official instructions: keep the left half of the screen
          empty (but it should be responsive for laptop, not mobile) focus on
          the two widgets on the right hand side the first widget has three
          tabs: "about me", "experiences" & "recommended", these should be
          clickable In the gallery widget more photos can be added by clicking
          the "add image" button Assignment will be scored based on the below
          parameters: make the components responsive (for laptop screens;
          everything above 768px width) replicate the exact UI; with exact
          paddings, margins, shadows, interactions (if any) ensure that the two
          widgets are accurately alligned with each other (relative right, left
          paddings)
        </p>
      </div>

      {/* Right side div */}
      <div className="w-2/3 pl-4 flex flex-col space-y-6">
        {/* First div: About, Experience, Recommended */}
        <FirstDiv />

        {/* Second div: Gallery and Add Photo button */}
        <SecondDiv />
      </div>
    </div>
  );
}

export default App;
