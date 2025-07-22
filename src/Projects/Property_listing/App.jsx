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

import Properties from "./Properties";

const App = () => {
  const propertiesItems = Properties.map((property, idx) => {
    return (
      <div
        key={idx}
        className="w-80 bg-white text-black rounded-lg shadow-md m-4 overflow-hidden"
      >
        <img
          src={property.imageUrl}
          alt="images"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="font-bold text-lg">{property.address}</div>
          <div className="text-gray-600">
            {property.city}, {property.state}
          </div>
          <div className="flex justify-between items-center mt-3 text-blue-500">
            <div className="flex items-center">
              <i className="fa-solid fa-bed mr-2"></i> {property.bedrooms}
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-toilet mr-2"></i> {property.bathrooms}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-wrap justify-center p-6">{propertiesItems}</div>
  );
};

export default App;
