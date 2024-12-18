import { useEffect, useState, useRef } from "react";

const HappyClient = () => {
  const [clients, setClients] = useState([]);
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Fetch JSON data
  useEffect(() => {
    fetch('/happyClient.json')
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Infinite scrolling logic
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 1; // Adjust speed here (lower number = faster)

    const scrollContent = () => {
      if (isPaused) return;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollSpeed;
      }
    };

    const interval = setInterval(scrollContent, 20);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="w-full bg-gray-100 py-8 overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Happy Clients</h2>

      {/* Sliding Container */}
      <div
        ref={scrollContainerRef}
        className="relative flex items-center overflow-hidden whitespace-nowrap"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Duplicate clients list for infinite loop effect */}
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-4 p-4 md:p-6 bg-white shadow-lg rounded-lg text-center w-[280px] sm:w-[300px] md:w-[350px] lg:w-[400px] transition-transform hover:-translate-y-2"
          >
            {/* Client Image */}
            <img
              src={client.photo}
              alt={client.name}
              className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full mb-4"
            />
            {/* Client Details */}
            <h3 className="text-lg md:text-xl font-semibold">{client.name}</h3>
            <p className="text-gray-500 text-xs md:text-sm">{client.location}</p>
            {/* Full Review */}
            <p className="text-gray-700 mt-3 italic text-sm md:text-base text-wrap">{client.review}</p>
            <p className="text-yellow-500 mt-2 text-sm">Rating: {client.rating} ★</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyClient;
