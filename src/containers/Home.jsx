import React from 'react';
import { connect } from 'react-redux';
import Search from '../componenets/Search';
import Categories from '../componenets/Categories';
import Carrusel from '../componenets/Carrusel';
import CarruselItem from '../componenets/CarruselItem';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search />

      {myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carrusel>
            {myList.map(item =>
              <CarruselItem key={item.id} {...item} />,
            )}
          </Carrusel>
        </Categories>

      )}

      <Categories title='Tendencias'>
        <Carrusel>
          {trends.map(item =>
            <CarruselItem key={item.id} {...item} />
          )}
        </Carrusel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carrusel>
          {originals.map(item =>
            <CarruselItem key={item.id} {...item} />
          )}
        </Carrusel>
      </Categories>

    </>
  );
};

const mapStateProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateProps, null)(Home);
