import React, { useState } from "react";
import Modal from "react-modal";

export default function Extra() {
  const images = [
    "/residential/Scene 21.jpg",
    "/img/52.jpg",
    "/residential/Scene 36_1.jpg",
    "/residential/3.jpg",
    "/img/Scene 10.jpg",
    "/residential/3.jpg",
    "/residential/4.jpg",
    "/residential/5.jpg",
    "/residential/14.jpg",
    "/residential/c1.jpg",
    "/residential/Scene 21.jpg",
    "/residential/Scene 37.jpg",
    "/residential/Scene 35_1.jpg",
    "/residential/Scene 30(1).jpg",
    "/corporate/1.jpg",
    "/corporate/1-1.jpg",
    "/corporate/2-1.jpg",
    "/corporate/3.jpg",
    "/corporate/r-4.jpg",
    "/corporate/r-10.jpg",
    "/corporate/r-9.jpg",
    "/img/Scene 1.jpg",
    "/img/Scene 4.jpg",
    "/img/Scene 3_3(1).jpg",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };



  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      goToNext();
    } else if (event.key === "ArrowLeft") {
      goToPrev();
    }
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (!touchStartX) return;

    const touchEndX = event.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;

    if (diffX > 50) {
      goToNext();
    } else if (diffX < -50) {
      goToPrev();
    }

    setTouchStartX(null);
  };

  return (
    <div>

      <div className="pr-sec-1">
        {images.map((src, index) => (
          <div className="pr_img-container" key={index} onClick={() => openModal(index)}>
            <img src={src} alt={`Scene ${index + 1}`} className="pr_img" />
            <div className="lock-icon">
              {/* <i className="fas fa-lock"></i> */}
              <img src="/img/lock.gif" alt="" />
            </div>
          </div>
        ))}
      </div>


      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        onAfterOpen={() => window.addEventListener("keydown", handleKeyDown)}
        onAfterClose={() => window.addEventListener("keydown", handleKeyDown)}
      >
        <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} className="touch-img">

          <button onClick={closeModal} className="close-model" >
            ✕
          </button>
          <button onClick={goToPrev} className="arrow-buttons" style={{ left: "10px" }} >
            {/* ◀ */}
            <i class="fa-solid fa-chevron-left"></i>
          </button>

          <img src={images[currentImageIndex]} alt="" className="model-img" />

          <button onClick={goToNext} className="arrow-buttons" style={{ right: '10px' }} >
            {/* ▶ */}
            <i class="fa-solid fa-chevron-right"></i>
          </button>




        </div>


      </Modal>



    </div>
  );
}
