import './Slider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carouselData from "./carouselData";
import Typewriter from './Typewriter';
import React, { useState } from "react";

function Slider() {
  // Use an object to track the loading state of each carousel item by index
  const [loadedItems, setLoadedItems] = useState({});

  const handleImageLoad = (index) => {
    setLoadedItems((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        timeInterval={5000}
        autoPlay={true}
        interval={4000}
        swipeable={false}
        infiniteLoop={true}
        stopOnHover={true}
        animationHandler={'fade'}
        preventMovementUntilSwipeScrollTolerance={true}
      >
        {carouselData.map((item, index) => {
          const isLoaded = loadedItems[index] || false;

          return (
            <div key={index} className="home-carousel-item">
              <div className="home-carousel-item-image">
                {/* Low-Resolution Image */}
                <img
                  src={item.img2} // Low-resolution image
                  alt="Placeholder"
                  className="carousel_low_image"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    filter: "blur(10px)",
                    opacity: isLoaded ? 0 : 1,
                    transition: "opacity 0.5s ease",
                  }}
                />

                {/* High-Resolution Image */}
                <img
                  src={item.img1} // High-resolution image
                  alt={item.alt}
                  onLoad={() => handleImageLoad(index)}
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: isLoaded ? 0.8 : 0,
                    transition: "opacity 0.5s ease",
                  }}
                />

                {/* Message with Typewriter Effect */}
                <div className="message">
                  <div>
                    <Typewriter text={item.legend} delay={100} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Slider;
