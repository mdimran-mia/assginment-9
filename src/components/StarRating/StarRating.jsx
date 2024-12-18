import PropTypes from "prop-types";

const StarRating = ({ rating }) => {
    const totalStars = 5;

    return (
        <div className="flex items-center space-x-1">
            {[...Array(totalStars)].map((_, index) => {
                // Calculate how much of each star should be filled based on the rating
                const fillPercentage = Math.min(Math.max(rating - index, 0), 1) * 100;

                return (
                    <div key={index} className="relative w-6 h-6 text-gray-300">
                        {/* Base star (empty) */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            className="absolute inset-0 w-full h-full"
                        >
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        {/* Filled part of the star */}
                        <div
                            className="absolute inset-0 overflow-hidden"
                            style={{ width: `${fillPercentage}%` }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="gold"
                                className="w-full h-full"
                            >
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

// PropTypes definition for validation
StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default StarRating;
