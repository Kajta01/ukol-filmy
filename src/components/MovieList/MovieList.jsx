import React from 'react';

import Movie from '../Movie/Movie';

const MovieList = ({movies}) => {
    return (
        movies.map( (movie) =>(
            <Movie
            key = {movie.title}
            title={movie.title}
            poste={movie.poste}
            year={movie.year}
            rating={movie.rating}
            director={movie.director}
            genre={movie.genre}
            cast={movie.cast}
            />
           ))
    );
}

export default MovieList;