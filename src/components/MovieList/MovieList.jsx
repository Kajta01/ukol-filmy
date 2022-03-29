import React from 'react';

import Movie from '../Movie/Movie';

const MovieList = ({movies}) => {
    return (
        <div className='MovieList'>
        {movies.map( (movie) =>(
            <Movie
            key = {movie.title}
            title={movie.title}
            poster={movie.poster}
            year={movie.year}
            rating={movie.rating}
            director={movie.director}
            genre={movie.genre}
            cast={movie.cast}
            />
           ))}
        </div>
    );
}

export default MovieList;