import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomeStyle.css';
import './App.css';
import Header from './Navbar';
import ImageCarousel from './Carousel';
import Footer from './Footer';

function Home() {
  const [characterData, setCharacterData] = useState({});

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/1/')
      .then(response => {
        setCharacterData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="Middle">
        <h1>Carousel de Imágenes</h1>
        <ImageCarousel />
      </div>
      <div className='Bottom'>
        <div className='Blocks'>
          <div className='block'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed justo non tortor interdum commodo in in risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet facilisis diam. Etiam libero elit, posuere imperdiet vehicula nec, ornare in purus. Ut accumsan libero ullamcorper bibendum rhoncus. Fusce tincidunt diam elit, eget congue dolor laoreet rutrum. In aliquet ex vitae risus venenatis maximus. Nulla quis ipsum in arcu dictum interdum nec vel neque. Quisque a sagittis diam, quis dignissim massa. Vestibulum semper egestas nunc sit amet viverra. Curabitur ultrices massa eu efficitur pharetra. Nullam nunc ex, placerat id convallis a, suscipit eu lorem. Donec sit amet massa est. Duis fermentum mi vitae vehicula dictum. </p>
          </div>
          <div className='block'>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed justo non tortor interdum commodo in in risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet facilisis diam. Etiam libero elit, posuere imperdiet vehicula nec, ornare in purus. Ut accumsan libero ullamcorper bibendum rhoncus. Fusce tincidunt diam elit, eget congue dolor laoreet rutrum. In aliquet ex vitae risus venenatis maximus. Nulla quis ipsum in arcu dictum interdum nec vel neque. Quisque a sagittis diam, quis dignissim massa. Vestibulum semper egestas nunc sit amet viverra. Curabitur ultrices massa eu efficitur pharetra. Nullam nunc ex, placerat id convallis a, suscipit eu lorem. Donec sit amet massa est. Duis fermentum mi vitae vehicula dictum.</p>
          </div>
          <div className='block'>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed justo non tortor interdum commodo in in risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet facilisis diam. Etiam libero elit, posuere imperdiet vehicula nec, ornare in purus. Ut accumsan libero ullamcorper bibendum rhoncus. Fusce tincidunt diam elit, eget congue dolor laoreet rutrum. In aliquet ex vitae risus venenatis maximus. Nulla quis ipsum in arcu dictum interdum nec vel neque. Quisque a sagittis diam, quis dignissim massa. Vestibulum semper egestas nunc sit amet viverra. Curabitur ultrices massa eu efficitur pharetra. Nullam nunc ex, placerat id convallis a, suscipit eu lorem. Donec sit amet massa est. Duis fermentum mi vitae vehicula dictum.</p>
          </div>
        </div>
      </div>
      {/* Aquí se muestra la información del personaje de Rick and Morty */}
      <div className='APIData'>
          <h2>Información del personaje de Rick and Morty:</h2>
          <h4>uso de prueba de la API</h4>
          <p>Nombre: {characterData.name}</p>
          <p>Especie: {characterData.species}</p>
          <p>Estado: {characterData.status}</p>
          <p>Genero: {characterData.gender}</p>
          {/* Agrega más datos según lo que necesites */}
        </div>
        
      <Footer />
    </div>
  );
}

export default Home;
