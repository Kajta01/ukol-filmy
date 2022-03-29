import React from 'react';
import Actor from '../Actor/Actor';
import './style.css';

const Movie = ({title,poster,year,rating,director,genre,cast}) => {
    return(
        <>
        <div className='Movie'>
            <img src={`./assets/${poster}`} ></img>
            <div className='Info'>
            <h2>{title}</h2>
            
            <p>Rok vydání: {year}</p>
            <p>Hodnocení: {rating}</p>
            <p>Režije: {director}</p>
            <p>Žánr: {genre}</p>
        
        <div className='Actors'>
            <h3>V hlavních rolích</h3>
        {cast.map( (act) => (
            <Actor
            key = {act.name}
            name={act.name}
            as={act.as}
            />
        ))}
        </div>
        </div>
        </div>
        </>
    );
}

export default Movie;