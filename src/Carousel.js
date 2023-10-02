import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./CarouselStyle.css"


const ImageCarousel = () => {
  const settings = {
    dots: true, //  mostrar puntos de navegación
    infinite: true, // Bucle infinito
    autoplay:true,
    autoplaySpeed:3000,
    speed: 500, // Velocidad de transición
    slidesToShow: 3, // Número de imágenes visibles a la vez
    slidesToScroll: 1, // Número de imágenes para avanzar/retroceder
  };

  return (
    <div className="image-carousel">
      <Slider {...settings}>
        <div>
          <img src="torta1.jpg" alt="Imagen 1" width="100%"/>
        </div>
        <div>
          <img src="torta2.jpg" alt="Imagen 2" width="100%"/>
        </div>
        <div>
          <img src="torta3.jpg" alt="Imagen 3" width="100%"/>
        </div>
        <div>
          <img src="torta4.png" alt="Imagen 4" width="100%"/>
        </div>
        <div>
          <img src="torta5.png" alt="Imagen 5" width="100%"/>
        </div>
        <div>
          <img src="torta6.png" alt="Imagen 6 " width="100%"/>
        </div>
        {/* Agrega más imágenes aquí */}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
