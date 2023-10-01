import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./CarouselStyle.css"

const ImageCarousel = () => {
  const settings = {
    dots: false, // No mostrar puntos de navegación
    infinite: true, // Bucle infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 3, // Número de imágenes visibles a la vez
    slidesToScroll: 1, // Número de imágenes para avanzar/retroceder
  };

  return (
    <div className="image-carousel">
      <Slider {...settings}>
        <div>
          <img src="public/torta1.png" alt="Imagen 1" />
        </div>
        <div>
          <img src="public/torta2.png" alt="Imagen 2" />
        </div>
        <div>
          <img src="public/torta3.png" alt="Imagen 3" />
        </div>
        {/* Agrega más imágenes aquí */}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
