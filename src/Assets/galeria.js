import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Galeria = () => {
  const [images, setImages] = useState([]);

  // En un entorno de producción, NO debes almacenar el token de acceso de esta manera.
  const accessToken = "IGQWRNTThGV0gyMDNNS01vUlZAHMzRRQkFxYnJIallRWm16X3hCNVRFMWdiX0kwRVRjZAmRaTEZAxRjNnaWY2ZAm5VaktoVDBvTVR2d2MtcVEwOVJFSzJucHo2WS05V243Q1RXSzBGSXR5Ym4tVUVoSzJkcFk1VW1VeE0ZD";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/v12.0/me/media?fields=id,media_type,media_url,caption&access_token=${accessToken}`
        );

        setImages(response.data.data);
      } catch (error) {
        console.error('Error fetching Instagram images:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Instagram Galería</h1>
      <div className="row">
        {images.map((image) => (
          <div key={image.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={image.media_url} className="card-img-top" alt={image.caption} />
              <div className="card-body">
                <p className="card-text">{image.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
