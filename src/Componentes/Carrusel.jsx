import { useRef, useEffect, useState } from "react";
import sonic from "../styles/imgs/Sonic.avif";
import mario from "../styles/imgs/mario.avif";
import terraria from "../styles/imgs/Terraria.avif";
import dreamland from "../styles/imgs/DreamLand.avif";
import "../styles/carrusel.css";
import Footer from "./Footer";

export default function Carrusel() {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [sonic, mario, terraria, dreamland];

  const updateCarousel = (index) => {
    const track = trackRef.current;
    if (track) {
      const width = track.children[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${index * width}px)`;
    }
  };

  const next = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
    updateCarousel(newIndex);
  };

  const prev = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
    updateCarousel(newIndex);
  };

  useEffect(() => {
    const handleResize = () => updateCarousel(currentIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  return (
    <>
      <div className="carousel">
        <div className="carousel-track" ref={trackRef}>
          {items.map((img, idx) => (
            <img
              src={img}
              key={idx}
              alt={`Mapa ${idx}`}
              className="carousel-item"
            />
          ))}
        </div>
        <button className="carousel-button prev" onClick={prev}>
          &#10094;
        </button>
        <button className="carousel-button next" onClick={next}>
          &#10095;
        </button>
      </div>
      <Footer />
    </>
  );
}
