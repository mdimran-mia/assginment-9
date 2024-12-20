import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaLocationDot, FaBed, FaBath, FaPhoneVolume } from "react-icons/fa6";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

const AreaPropertiesDetailedProperties = () => {
    const { id } = useParams();
    const {state} = useLocation()
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [property, setProperty] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    useEffect(() => {
        fetch("/PropertiseByArea.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to load properties data");
                }
                return response.json();
            })
            .then((data) => {
                let foundProperty = data.find(item => String(item.id) === state.rootId).properties.find( p => String(p.id)=== state.propertyId)

                if (!foundProperty) {
                    throw new Error("Property not found");
                }

                setProperty(foundProperty);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    const openModal = (image) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage("");
    };

    if (loading) {
        return (
            <div className="text-center my-10">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"></div>
                <p className="mt-4 text-gray-600">Loading property details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 my-10">
                <p>Error: {error}</p>
            </div>
        );
    }

    if (!property) {
        return (
            <div className="text-center text-gray-600 my-10">
                <p>Property not found.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-12 px-4 mt-10 max-w-[960px]">
            <h2 className="text-4xl font-bold text-center mb-8">{property.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start bg-white shadow-lg rounded-lg overflow-hidden">
                <button
                    className="w-full h-[300px] md:h-full bg-gray-200 rounded-md overflow-hidden"
                    onClick={() => openModal(property.image)}
                >
                    <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover cursor-pointer"
                    />
                </button>
                <div className="p-6">
                    <p className="text-lg font-semibold text-gray-600 mb-2 flex items-center gap-2"><FaLocationDot />{property.location}</p>
                    <p className="text-xl font-bold text-gray-800 mb-4">{property.price}</p>
                    <div className="text-sm text-gray-500 flex items-center gap-2 mb-2">
                        <FaBed title={`${property.bedrooms} Bedrooms`} /> {property.bedrooms} <span className="font-bold">,</span>
                        <FaBath title={`${property.bathrooms} Bathrooms`} /> {property.bathrooms} <span className="font-bold">,</span>
                        <BsArrowsFullscreen title={`${property.size} Area`} /> {property.size}
                    </div>
                    <p className="text-gray-700 leading-7 mb-4">{property.description}</p>
                    <div className="flex items-center mb-4">
                        <FaPhoneVolume className="text-blue-500 text-2xl mr-3" />
                        <span className="text-gray-700 text-lg">+88 01770061407</span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center mb-4">
                        <IoIosMail className="text-red-500 text-3xl mr-3 " />
                        <span className="text-gray-700 text-lg">{property.contact}</span>
                    </div>
                    {/* Back to Previous Page Button */}
                    <button
                        onClick={() => navigate(-1)} // Navigate to the previous page
                        className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
                    >
                        Back to Previous Page
                    </button>
                </div>

            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative w-[90%] max-w-[800px] h-[500px] bg-white rounded-lg overflow-hidden">
                        <button
                            className="absolute top-0 right-0 p-4 text-white"
                            onClick={closeModal}
                        >
                            <span className="text-xl">&times;</span>
                        </button>
                        <img
                            src={modalImage}
                            alt="Modal"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            )}

        </div>
    );
};

export default AreaPropertiesDetailedProperties;
