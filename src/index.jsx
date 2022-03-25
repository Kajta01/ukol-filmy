import React from 'react';

import {movies} from './movies.js'
import { render } from 'react-dom';
import './style.css';


import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';

const App = () => {
  return(
    <>
      <Header/>
      <MovieList movies={movies}/>
      
    </>
);
}

render(<App />, document.querySelector('#app'));
