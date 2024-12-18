import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import Agents from "../../components/Agents/Agents";
import "./Contact.css";

const Contact = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex gap-5 items-center justify-center py-10 px-4 mt-5">
                {/* Header Section */}
                <div className="text-start mb-10">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Residential Super Home</h2>
                    <div className="overflow-hidden  design">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <img
                            src="https://img.freepik.com/premium-photo/natureinspired-dream-house-investing-miniature-wooden-haven-amidst-lush-greenery_983420-70416.jpg"
                            alt="cover image"
                            className="w-full object-cover transform group-hover:scale-105 transition duration-300 ease-in-out rounded-md"
                        />
                    </div>
                </div>

                {/* Contact Info Section with Animation */}
                <div className="contact-card bg-white px-6 rounded-lg shadow-lg max-w-lg w-full py-10 relative">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Residential Super Home</h2>
                    <p className="text-gray-800 mb-4">
                        Discover your dream living experience at *Super Residential Home*. With our state-of-the-art facilities, serene surroundings, and premium services, we offer the perfect blend of comfort and luxury. Whether you are seeking a peaceful retreat or a vibrant community, we provide a home that suits your lifestyle.
                    </p>
                    {/* Phone */}
                    <div className="flex items-center mb-4">
                        <FaPhoneVolume className="text-blue-500 text-2xl mr-3" />
                        <span className="text-gray-700 text-lg">+88 01770061407</span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center mb-4">
                        <IoIosMail className="text-red-500 text-2xl mr-3" />
                        <span className="text-gray-700 text-lg">imranmia2017@gmail.com</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-start space-x-4 mt-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-blue-600 text-3xl hover:text-blue-800 transition" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaSquareInstagram className="text-pink-500 text-3xl hover:text-pink-700 transition" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaSquareXTwitter className="text-blue-400 text-3xl hover:text-blue-600 transition" />
                        </a>
                    </div>
                </div>
            </div>
            <Agents />
        </div>
    );
};

export default Contact;
