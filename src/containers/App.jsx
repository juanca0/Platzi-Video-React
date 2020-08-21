import React from 'react';
import Header from '../componenets/Header';
import Search from '../componenets/Search';
import Categories from '../componenets/Categories';
import Carrusel from '../componenets/Carrusel';
import CarruselItem from '../componenets/CarruselItem';
import Footer from '../componenets/Footer';
import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Search />

    <Categories title='Mi Lista'>
      <Carrusel>
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
      </Carrusel>
    </Categories>

    <Categories title='Tendencias'>
      <Carrusel>
        <CarruselItem />
        <CarruselItem />
      </Carrusel>
    </Categories>

    <Categories title='Originales de Platzi Video'>
      <Carrusel>
        <CarruselItem />
      </Carrusel>
    </Categories>

    <Footer />
  </div>
);

export default App;
