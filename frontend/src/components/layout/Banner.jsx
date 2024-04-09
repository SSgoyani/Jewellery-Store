import React, { useState, useEffect } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import '../layout/Banner.css';
import img02 from '../../images/pexels-pixabay-265906.jpg';
import img01 from '../../images/pexels-pixabay-266621.jpg';
import img03 from '../../images/pexels-lalesh-aldarwish-168927.jpg';
import img04 from '../../images/pexels-fox-998521.jpg';
import img06 from '../../images/pexels-goran-vrakela-230290.jpg';
import img07 from '../../images/pexels-engin-akyurt-1457801.jpg';
import img08 from '../../images/pexels-taisuke-usui-2697598.jpg';
import img09 from '../../images/pexels-glauber-torquato-2219195.jpg';
import img10 from '../../images/mayank-gehlot-lsxBmX8Hmwc-unsplash.jpg';
import img11 from '../../images/sayak-bala-qdg5cHUuTCU-unsplash.jpg';

const images = [
  img01,
  img03,
  img02,
  img04,
  img10,
  img07,
  img11,
  img09,
  img08,
  img06,
];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    setIntervalId(timer);

    return () => clearInterval(timer); 
  }, [images.length]); 

  const handleNext = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevIndex) => {
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  return (
    <div className="carousel-container">
      <img
        className="carousel-image"
        src={images[currentImage]}
        alt="carousel"
      />
      <div className="carousel-buttons">
        <button onClick={handlePrev}>
          <BiLeftArrow />
        </button>
        <button onClick={handleNext}>
          <BiRightArrow />
        </button>
      </div>
    </div>
  );
};

export default Banner;
