import logo from './logo.svg';
import './App.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

function App() {
  return (
    <>
      <Splide>
        <SplideSlide>
          <img src={logo} alt="Imagem 1"/>
        </SplideSlide>
        <SplideSlide>
          <img src={logo} alt="Imagem 2"/>
        </SplideSlide>
      </Splide>
    </>
  );
}

export default App;
