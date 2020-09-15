import React from 'react';
import Search from '../componenets/Search';
import Categories from '../componenets/Categories';
import Carrusel from '../componenets/Carrusel';
import CarruselItem from '../componenets/CarruselItem';
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {
  const initalState = useInitialState(API);
  return initalState.length === 0 ? <h1>Loading...</h1> : (
    <>
      <Search />

      {initalState.mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carrusel>
            <CarruselItem />
          </Carrusel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carrusel>
          {initalState.trends.map(item =>
            <CarruselItem key={item.id} {...item} />
          )}
        </Carrusel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carrusel>
          {initalState.originals.map(item =>
            <CarruselItem key={item.id} {...item} />
          )}
        </Carrusel>
      </Categories>

    </>
  );
};
export default Home;
