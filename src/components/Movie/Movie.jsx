import React from 'react';

const Movie = ({title,poster,year,rating,director,genre,cast}) => {
    return(
        <div className='Movie'>
            <h2>{title}</h2>
            <img src={poster}></img>
            <p>Rok vydání: {year}</p>
            <p>Hodnocení: {rating}</p>
            <p>Režije: {director}</p>
            <p>Žánr: {genre}</p>
        </div>

    );
}

export default Movie;