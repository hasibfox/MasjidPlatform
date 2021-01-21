import React, { useEffect, useState} from 'react';
import './ImageSlider.css';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';
import { useRef } from 'react';



const ImageSlider = ( {slides}) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(
    () => {
    const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1));
      };

    timeout.current = setTimeout(nextSlide, 2000);

    return function() {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current,length]
  );

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout,current);
    }
    setCurrent(current === length-1 ? 0 : current + 1)
    console.log(current)
  }

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout,current);
    }
    setCurrent(current === 0 ? length-1 : current - 1)
    console.log(current)
  }
  if (!Array.isArray(slides) || slides.length <=0) {
    return null
  }
  return (
    <>
   
      <div className="carousel-container">
    
        <div className="carousel-wrapper">
          {slides.map((slide,index) => {
            return (
              <div className="HeroSlide" key={index}>
                {index === current && (
                  <div className="HeroSlider">
                    <img className="HeroImage" 
                    src={slide.image} alt={slide.alt}
                    >
                    </img>
                    <div className="SliderButtons">
            <IoArrowBack onClick={prevSlide} className="PrevArrow"></IoArrowBack>
            <IoArrowForward onClick={nextSlide} className="NextArrow"></IoArrowForward>
          </div>
                </div>
                )}
                
              </div>
            )
          })}
          
        </div>
      </div>
    </>
  )
}

export default ImageSlider
