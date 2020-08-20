import React from 'react';
import Header from '../componenets/Header';
import Search from '../componenets/Search';
import Categories from '../componenets/Categories';
import Carrusel from '../componenets/Carrusel';
import CarruselItem from '../componenets/CarruselItem';
import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Search />

    <Categories>
      <Carrusel>
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
      </Carrusel>
    </Categories>
  </div>
);

export default App;
