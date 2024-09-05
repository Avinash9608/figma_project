import React, { useState } from "react";

const FirstDiv = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabs = ["About", "Experience", "Recommended"];

  return (
    <div className="bg-purple-200 p-7 rounded-lg shadow-md mb-4">
      {/* Tab Buttons */}
      <div className="flex space-x-5 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`p-2 text-white font-bold rounded-lg transition-colors duration-300 ${
              activeTab === tab ? "bg-black" : "bg-gray-800 hover:bg-blue-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-4">
        <p className="text-gray-700 mt-7">
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
          working at this awesome company for 3 years now.
        </p>
        <p className="text-gray-700 mt-7">
          I was born and raised in Albany, NY & have been living in Santa Carla
          for the past 10 years with my wife Tiffany and my 4-year-old twin
          daughters, Emma and Ella. Both of them are just starting school, so my
          calendar is usually blocked between 9-10 AM. This is a...
        </p>
      </div>
    </div>
  );
};

export default FirstDiv;
