
import './HomeStyle.css';
import './App.css'
import Header from './Navbar'
import ImageCarousel from './Carousel';
import Footer from './Footer';

function Home() {
  return (
    <div className="App">
      <Header/>
      <div className="Middle">
      <h1>Carousel de Imágenes</h1>
      <ImageCarousel/>
      </div>
      <div className='Bottom'>
        <div className='Blocks'>
          <div className='block'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed justo non tortor interdum commodo in in risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet facilisis diam. Etiam libero elit, posuere imperdiet vehicula nec, ornare in purus. Ut accumsan libero ullamcorper bibendum rhoncus. Fusce tincidunt diam elit, eget congue dolor laoreet rutrum. In aliquet ex vitae risus venenatis maximus. Nulla quis ipsum in arcu dictum interdum nec vel neque. Quisque a sagittis diam, quis dignissim massa. Vestibulum semper egestas nunc sit amet viverra. Curabitur ultrices massa eu efficitur pharetra. Nullam nunc ex, placerat id convallis a, suscipit eu lorem. Donec sit amet massa est. Duis fermentum mi vitae vehicula dictum. </p></div>
          <div className='block'><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed justo non tortor interdum commodo in in risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet facilisis diam. Etiam libero elit, posuere imperdiet vehicula nec, ornare in purus. Ut accumsan libero ullamcorper bibendum rhoncus. Fusce tincidunt diam elit, eget congue dolor laoreet rutrum. In aliquet ex vitae risus venenatis maximus. Nulla quis ipsum in arcu dictum interdum nec vel neque. Quisque a sagittis diam, quis dignissim massa. Vestibulum semper egestas nunc sit amet viverra. Curabitur ultrices massa eu efficitur pharetra. Nullam nunc ex, placerat id convallis a, suscipit eu lorem. Donec sit amet massa est. Duis fermentum mi vitae vehicula dictum.</p></div>
          <div className='block'><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed justo non tortor interdum commodo in in risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet facilisis diam. Etiam libero elit, posuere imperdiet vehicula nec, ornare in purus. Ut accumsan libero ullamcorper bibendum rhoncus. Fusce tincidunt diam elit, eget congue dolor laoreet rutrum. In aliquet ex vitae risus venenatis maximus. Nulla quis ipsum in arcu dictum interdum nec vel neque. Quisque a sagittis diam, quis dignissim massa. Vestibulum semper egestas nunc sit amet viverra. Curabitur ultrices massa eu efficitur pharetra. Nullam nunc ex, placerat id convallis a, suscipit eu lorem. Donec sit amet massa est. Duis fermentum mi vitae vehicula dictum.</p></div>
        </div>

      </div>
      <Footer/>  
    </div>
  );
}

export default Home;