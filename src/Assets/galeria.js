import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Galeria = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/v12.0/me/media?fields=id,media_type,media_url,caption&access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`
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
