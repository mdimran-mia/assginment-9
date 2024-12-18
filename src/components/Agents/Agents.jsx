import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import "./Agents.css"

const Agents = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        fetch('agents.json')
            .then((res) => res.json())
            .then((data) => setAgents(data));
    }, []);

    return (
        <div className="container mx-auto py-12 px-4">
            <h2 className="text-4xl font-bold text-center mb-10">Our Agents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {agents.map((agent) => (
                    <Link
                        key={agent.id}
                        to={`/agent/${agent.id}`}
                        className="block design"
                    >
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out group">
                            {/* Agent Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={agent.image}
                                    alt={agent.estate_title}
                                    className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
                                />
                            </div>

                            {/* Agent Info */}
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-600">
                                    {agent.estate_title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-4">{agent.segment_name}</p>
                                <div className="flex items-center mb-4">
                                    <StarRating rating={parseFloat(agent.status)} />
                                    <span className="ml-2 text-gray-600">({agent.status})</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Agents;
