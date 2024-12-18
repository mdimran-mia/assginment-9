import { useEffect, useState } from "react";

const Banner = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    fetch("/Home.json")
      .then((response) => response.json())
      .then((data) => {
        setSlides(data);
        if (data.length > 0) {
          setBackgroundImage(data[0].image);
        }
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides]);

  useEffect(() => {
    if (slides.length > 0) {
      setBackgroundImage(slides[currentSlide].image);
    }
  }, [currentSlide, slides]);

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
    setBackgroundImage(slides[index].image);
  };

  const getVisibleSlides = () => {
    if (slides.length < 3) return slides;
    if (currentSlide + 3 <= slides.length) {
      return slides.slice(currentSlide, currentSlide + 3);
    } else {
      return [...slides.slice(currentSlide), ...slides.slice(0, (currentSlide + 3) % slides.length)];
    }
  };

  return (
    <div
      className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-end pr-2 sm:pr-5 md:pr-10">
        <div className="flex space-x-2 overflow-hidden w-40 sm:w-60 md:w-80 lg:w-96 xl:w-[600px]">
          {getVisibleSlides().map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => handleSlideClick((currentSlide + index) % slides.length)}
              className="relative w-20 h-28 sm:w-28 sm:h-36 md:w-36 md:h-48 lg:w-48 lg:h-60 xl:w-56 xl:h-72 cursor-pointer bg-cover bg-center rounded-md"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-0 transition-all duration-300 flex items-end p-1 sm:p-2">
                <p className="text-white text-xs sm:text-sm">{slide.estate_title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 text-white space-y-1 sm:space-y-2">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">{slides[currentSlide]?.estate_title}</h2>
        <p className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-sm sm:text-base">{slides[currentSlide]?.description}</p>
      </div>
    </div>
  );
};

export default Banner;
