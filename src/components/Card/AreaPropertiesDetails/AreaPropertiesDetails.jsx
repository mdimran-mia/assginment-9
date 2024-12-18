import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed, FaBath } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";

const AreaPropertiesDetails = () => {
    const { id } = useParams(); // Get area id from route params
    const [area, setArea] = useState(null); // Holds the selected area's details
    const [error, setError] = useState(null); // Holds any fetch or processing error
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch area properties data
        fetch("/PropertiseByArea.json") // Update the path if necessary
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch properties data");
                }
                return res.json();
            })
            .then((data) => {
                // Match area by id (ensure `id` matches JSON format: string or number)
                const selectedArea = data.find((area) => String(area.id) === id);
                if (selectedArea) {
                    setArea(selectedArea);
                } else {
                    setError("Area not found.");
                }
            })
            .catch((error) => {
                setError(error.message);
            });
    }, [id]); // Re-run effect when id changes

    // Show error message if any error occurs
    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    // Show loading message while data is being fetched
    if (!area) {
        return <p className="text-center">Loading...</p>;
    }

    return (
        <div className="my-5 w-4/5 mx-auto">
            {/* Display area name */}
            <h2 className="text-3xl font-bold text-center mb-5">
                Properties in {area?.location || "Unknown Area"}
            </h2>
            <p className="text-md w-4/5 mx-auto text-center mb-7">

                Discover a diverse selection of properties designed to match every lifestyle and budget. From modern apartments to spacious family homes and luxurious villas, each listing is carefully curated to meet your needs. Explore homes that combine comfort, elegance, and prime locations, making it easier than ever to find your dream residence.
            </p>

            {/* Properties grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {area.properties.map((property) => (
                    <Link
                        key={property.id}
                        to={`/properties/${property.id}`} // Link to individual property details
                        className="block p-4 shadow-lg rounded-lg transform transition-transform duration-200 hover:scale-105"
                    >
                        {/* Property image */}
                        <img
                            src={property.image}
                            alt={property.title}
                            className="h-[200px] w-full object-cover rounded-md mb-4"
                        />

                        {/* Property details */}
                        <p className="font-bold text-xl">{property.price}</p>
                        <h3 className="text-lg font-semibold">{property.title}</h3>
                        <p className="inline-flex items-center gap-2 font-semibold text-md">
                            <FaLocationDot /> {property.location}
                        </p>
                        <div className="text-sm text-gray-500 flex items-center gap-2">
                            <FaBed title={`${property.bedrooms} Bedrooms`} /> {property.bedrooms} <span className="font-bold">,</span>
                            <FaBath title={`${property.bathrooms} Bathrooms`} /> {property.bathrooms} <span className="font-bold">,</span>
                            <BsArrowsFullscreen title={`${property.size} Area`} /> {property.size}
                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-end">
                {/* Back to Previous Page Button */}
                <button
                    onClick={() => navigate(-1)} // Navigate to the previous page
                    className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                    Back to Previous Page
                </button>
            </div>
        </div>
    );
};

export default AreaPropertiesDetails;
