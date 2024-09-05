import React from "react";

const SecondDiv = () => {
  const images = [
    { id: 1, name: "Vishal Kumar", src: "https://via.placeholder.com/150" },
    { id: 2, name: "Anonymous", src: "https://via.placeholder.com/150" },
    { id: 3, name: "John Doe", src: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="bg-purple-200 p-7 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Gallery</h2>
        <button className="p-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Add Photo
        </button>
      </div>

      <div className="flex items-center space-x-4">
        {/* Backward Arrow */}
        <button className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors duration-300">
          ◀
        </button>

        {/* Gallery Images */}
        <div className="flex space-x-4">
          {images.map((image) => (
            <div key={image.id} className="p-2 border rounded-lg bg-gray-100">
              <img
                src={image.src}
                alt={image.name}
                className="w-24 h-24 object-cover"
              />
              <p className="text-center mt-2 text-sm">{image.name}</p>
            </div>
          ))}
        </div>

        {/* Forward Arrow */}
        <button className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors duration-300">
          ▶
        </button>
      </div>
    </div>
  );
};

export default SecondDiv;
