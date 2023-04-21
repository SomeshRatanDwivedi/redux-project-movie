import React from 'react';
import { addSingleMovie } from '../actions';

const SearchResult = ({ movie, dispatch }) => {

    const handleClick=()=>{
        dispatch(addSingleMovie(movie))
    }
    return (
        <div className='movie-card search-list'>
            <div className='left'>
                <img src={movie.Poster} />
            </div>
            <div className='right'>
                <h2 className='title'>
                    {movie.Title}
                </h2>

                <div className='plot'>
                    {movie.Plot}
                </div>

                <div className='footer'>
                    <div className='rating'>
                        {movie.imdbRating}
                    </div>
            
                    <button className='favourite-btn' onClick={handleClick}>
                        Add to the list
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;
