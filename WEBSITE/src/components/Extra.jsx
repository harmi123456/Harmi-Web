import React, { useEffect, useRef, useState } from "react";

export default function AutoSlider() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideToIndex = (index) => {
    const slider = sliderRef.current;
    const totalSlides = slider.children.length;

    // Ensure the index loops correctly
    const newIndex = (index + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);

    // Scroll to the calculated position
    slider.scrollTo({
      left: slider.offsetWidth * newIndex,
      behavior: "smooth",
    });
  };

  // Auto sliding logic
  useEffect(() => {
    const interval = setInterval(() => {
      slideToIndex(currentIndex + 1);
    }, 100); // Automatically scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div className="slider-track" ref={sliderRef}>
        <div className="slider-item" style={{ background: "#ff7f7f" }}>
          <h1>Slide 1</h1>
        </div>
        <div className="slider-item" style={{ background: "#7fafff" }}>
          <h1>Slide 2</h1>
        </div>
        <div className="slider-item" style={{ background: "#7fff7f" }}>
          <h1>Slide 3</h1>
        </div>
        <div className="slider-item" style={{ background: "#ffff7f" }}>
          <h1>Slide 4</h1>
        </div>
      </div>

      {/* Manual Controls */}
      <button
        className="slider-control prev"
        onClick={() => slideToIndex(currentIndex - 1)}
      >
        &#8249; {/* Left Arrow */}
      </button>
      <button
        className="slider-control next"
        onClick={() => slideToIndex(currentIndex + 1)}
      >
        &#8250; {/* Right Arrow */}
      </button>
    </div>
  );
}
