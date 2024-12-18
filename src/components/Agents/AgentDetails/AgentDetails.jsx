import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StarRating from "../../StarRating/StarRating";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const AgentDetails = () => {
    const { id } = useParams();
    const [agent, setAgent] = useState(null);

    useEffect(() => {
        fetch("/agents.json") // Ensure the path is correct
            .then((res) => res.json())
            .then((data) => {
                const selectedAgent = data.find((agent) => agent.id === parseInt(id));
                setAgent(selectedAgent);
            });
    }, [id]);

    if (!agent) {
        return <div className="text-center py-10">Loading agent details...</div>;
    }

    // Parse contact info from facilities
    const contactLinks = agent.facilities.reduce((links, facility) => {
        if (facility.startsWith("Facebook")) {
            links.facebook = facility.split(": ")[1];
        } else if (facility.startsWith("Instagram")) {
            links.instagram = facility.split(": ")[1];
        } else if (facility.startsWith("Twitter")) {
            links.twitter = facility.split(": ")[1];
        } else if (facility.startsWith("Email")) {
            links.email = `mailto:${facility.split(": ")[1]}`;
        }
        return links;
    }, {});

    return (
        <div className="container mx-auto py-12 px-4">
            <h2 className="text-4xl font-bold text-center mb-6">{agent.estate_title}</h2>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="flex justify-center items-center">
                    <img
                        src={agent.image}
                        alt={agent.estate_title}
                        className="w-full h-[300px] max-w-[400px] object-cover rounded-md"
                    />
                </div>

                {/* Right Column */}
                <div className="p-6">
                    <p className="text-gray-500 text-lg mb-4">{agent.segment_name}</p>
                    <p className="text-gray-700 mb-4">{agent.description}</p>
                    <div className="mb-4">
                        <p>
                            <strong>Experience:</strong> {agent.price}
                        </p>
                        <p>
                            <strong>Languages:</strong> {agent.area}
                        </p>
                        <p>
                            <strong>Location:</strong> {agent.location}
                        </p>
                    </div>

                    <div className="flex items-center mt-4">
                        <StarRating rating={parseFloat(agent.status)} />
                        <span className="ml-2 text-gray-600">({agent.status})</span>
                    </div>

                    <div className="mt-6 border-t pt-4">
                        <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
                        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-6 md:space-y-0">
                            <div className="flex items-center space-x-4">
                                {contactLinks.facebook && (
                                    <Link
                                        to={contactLinks.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaFacebook className="text-blue-600 text-3xl hover:text-blue-800 transition" />
                                    </Link>
                                )}
                                {contactLinks.instagram && (
                                    <Link
                                        to={contactLinks.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaSquareInstagram className="text-pink-500 text-3xl hover:text-pink-700 transition" />
                                    </Link>
                                )}
                                {contactLinks.twitter && (
                                    <Link
                                        to={contactLinks.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaSquareXTwitter className="text-blue-400 text-3xl hover:text-blue-600 transition" />
                                    </Link>
                                )}
                                {contactLinks.email && (
                                    <Link
                                        to={contactLinks.email}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IoIosMail className="text-3xl text-red-500 hover:text-red-700 transition" />
                                    </Link>
                                )}
                            </div>
                            <Link to="/" className="inline-flex justify-center items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 transition-all duration-300">
                            <IoIosArrowRoundBack /> Back to home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentDetails;
