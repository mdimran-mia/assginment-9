import { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import './Card.css';

const Card = () => {
    // State to hold areas data and for toggling between 'show all' or 'show limited'
    const [areas, setAreas] = useState([]);
    const [showAll, setShowAll] = useState(false);

    // Fetch the data from the JSON file and update the areas state
    useEffect(() => {
        fetch("/PropertiseByArea.json") // Make sure this path is correct based on your folder structure
            .then((res) => res.json())
            .then((data) => setAreas(data))
            .catch((error) => console.error("Error fetching data:", error)); // Handle errors
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    // Function to toggle between showing all cards or only the first 10
    const toggleShowAll = () => {
        setShowAll((prev) => !prev);
    };

    // Limit the displayed areas based on the `showAll` state
    const displayedAreas = showAll ? areas : areas.slice(0, 10);

    return (
        <div className="my-2 mx-auto">
            {/* Section Title */}
            <div className="text-center mt-8 mb-6">
                <h2 className="text-4xl font-bold mb-3">Properties by Area</h2>
                <p className="poppins my-2 mx-auto w-3/5">
                    Highlight the best of your properties by using the List Category shortcode.
                    You can list categories, types, cities, areas, and states of your choice.
                </p>
            </div>

            {/* Grid Display for Properties */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-5 my-3">
                {displayedAreas.map((area) => (
                    <Link
                        key={area.id}
                        to={`/area/${area.id}`} // Navigate to dynamic route for more details
                        className="p-2 shadow-lg rounded-md transform transition-transform duration-200 hover:scale-105"
                    >
                        {/* Property Image */}
                        <div
                            className="h-[200px] bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${area.image})` }}
                        >
                            {/* Location Info */}
                            <p className="absolute bottom-0 left-0 w-full flex items-center gap-2 text-white p-2 bg-black bg-opacity-40">
                                <MdLocationPin /> {area.location}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Button to Toggle Between Show All or Show Less */}
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

export default Card;
