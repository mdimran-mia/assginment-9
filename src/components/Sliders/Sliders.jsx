import { useState, useEffect } from 'react';
import './Sliders.css';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Sliders = () => {
    const [slides, setSlides] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Fetch slides data from home.json on component mount
    useEffect(() => {
        fetch('/public/forSale.json')
            .then((response) => response.json())
            .then((data) => setSlides(data))
            .catch((error) => console.error("Error fetching JSON data:", error));
    }, []);

    // Auto-loop effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000); // 3 seconds per slide
        return () => clearInterval(interval);
    }, [slides.length]);

    // Handle specific slide selection
    const handleSlideClick = (index) => {
        setCurrentSlide(index);
    };

    // Navigate slides manually
    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="banner">
            {/* Banner Photo and Description */}
            {slides.length > 0 && (
                <div className="banner-main">
                    <img src={slides[currentSlide].image} alt="Current Slide" className="banner-image" />
                    <div className="banner-description bg-gray-300 opacity-75">
                        <p className='rubikWetPaint font-normal text-gray-800 text-3xl'>{slides[currentSlide].description}</p>
                    </div>
                </div>
            )}

            {/* Slide Thumbnails */}
            <div className="banner-thumbnails">
                {slides.map((slide, index) => (
                    <img
                        key={slide.id}
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        onClick={() => handleSlideClick(index)}
                        className={index === currentSlide ? 'active-slide' : ''}
                    />
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="banner-arrows">
                <button onClick={handlePrevSlide} className="text-4xl text-white">
                    <IoIosArrowDropleftCircle />
                </button>
                <button onClick={handleNextSlide} className="text-4xl text-white">
                    <IoIosArrowDroprightCircle />
                </button>
            </div>
        </div>
    );
};

export default Sliders;
