import './MoviesContainer.css';
import React from 'react';
import MoviePoster from '../MoviePoster/MoviePoster';

function MoviesContainer( { movies = [], addUpVote, addDownVote, onMovieClick } ) {
  if (!Array.isArray(movies) || movies.length === 0) {
    return <p>Loading movies...</p>;
  }
  
  return (
      <section className='MoviesContainer'>
        { movies.map( movie => (
          <MoviePoster 
            key={ movie.id }
            id={ movie.id }
            title={ movie.title }
            poster={ movie.poster_path }
            voteCount={ movie.vote_count }
            onClick={ onMovieClick }
            addUpVote={ addUpVote }
            addDownVote={ addDownVote }
            />
        )) }
      </section>
  );
}
  
export default MoviesContainer;