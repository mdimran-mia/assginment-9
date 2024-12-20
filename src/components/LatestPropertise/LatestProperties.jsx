import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import "./LatestPropertise.css";

const LatestProperties = () => {
  const [properties, setProperties] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [error, setError] = useState(null);

  const colors = [
    "#03a9f4", // Blue
    "#e91e63", // Pink
    "#4caf50", // Green
    "#ff9800", // Orange
    "#9c27b0", // Purple
    "#00bcd4", // Cyan
    "#ff5722", // Deep Orange
    "#607d8b", // Blue Grey
  ];

  useEffect(() => {
    fetch("/forSale.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load properties data");
        }
        return response.json();
      })
      .then((data) => setProperties(data))
      .catch((err) => setError(err.message));
  }, []);

  const toggleShowAll = () => setShowAll(!showAll);

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="w-4/5 mx-auto my-10">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">Latest Properties</h2>

        <p className="text-md w-4/5 mx-auto text-center mb-7">
          Discover a diverse selection of properties designed to match every lifestyle and budget. From modern apartments to spacious family homes and luxurious villas, each listing is carefully curated to meet your needs. Explore homes that combine comfort, elegance, and prime locations, making it easier than ever to find your dream residence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {(showAll ? properties : properties.slice(0, 8)).map((property, index) => {
          const color = colors[index % colors.length];
          return (
            <Link
              key={property.id}
              to={`/property/${property.id}`}
              style={{ "--animation-color": color }}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 relative">
                <div
                  className="h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url(${property.image})` }}
                ></div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-gray-600 flex items-center gap-2">
                    <FaLocationDot /> {property.location}
                  </p>
                  <p className="text-gray-800 font-bold">{property.price}</p>
                  <div className="text-sm text-gray-500 inline-flex items-center gap-2">
                    <FaBed title={`${property.bedrooms} Bedrooms`} /> {property.bedrooms}{" "}
                    <span className="font-bold">,</span>
                    <FaBath title={`${property.bathrooms} Bathrooms`} /> {property.bathrooms}{" "}
                    <span className="font-bold">,</span>
                    <BsArrowsFullscreen title={`${property.size} Area`} /> {property.size}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="text-center my-4">
        <button
          onClick={toggleShowAll}
          className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default LatestProperties;
