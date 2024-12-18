import { useState } from 'react';

const Descriptions = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => setShowMore(!showMore);

    return (
        <div className='w-4/5 mx-auto my-2'>
            <div>
                {/* Use the correct class name here */}
                <h2 className="text-2xl text-clip text-gray-900 text-center rubikWetPaint">About</h2>
            </div>
            <p className='poppins'>
                This residential website offers an intuitive and stylish platform for discovering and exploring properties. Designed with user-friendly navigation and a responsive layout, it allows users to browse property listings, view detailed descriptions, and access essential features like a login portal and interactive property gallery. With a focus on residential real estate, this site is optimized to provide a seamless experience on both desktop and mobile devices, making home searching easier and more enjoyable.
                {showMore && (
                    <span>
                        {" "}The website includes components such as a Navbar for easy navigation, a Banner with featured properties, an Estate Listings section for available properties, an Estate Details page with in-depth information, a 404 Error Page for navigation support, and protected routes for secure access. Additionally, Firebase authentication ensures safe login and registration processes.
                    </span>
                )}
                <button onClick={handleShowMore} className="text-blue-500 ms-1">
                    {showMore ? "Show Less" : "Show More"}
                </button>
            </p>
        </div>
    );
};

export default Descriptions;
