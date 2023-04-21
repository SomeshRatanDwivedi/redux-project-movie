import React from 'react';
import { addFavourite, removeFavourite } from '../actions';

const MovieCart = ({ movie, dispatch, isMovieFavourite }) => {

    const handleClickFavourite=()=>{
        dispatch(addFavourite(movie))
    }

    const handleClickUnFavourite = () => {
        dispatch(removeFavourite(movie))
    }
    return (
        <li className='movie-card'>
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

                      {
                        isMovieFavourite?
                            <button className='unfavourite-btn' onClick={handleClickUnFavourite}>
                                Unfavourite
                            </button>:
                            <button className='favourite-btn'onClick={handleClickFavourite}>
                                Favaurite
                            </button>
                      }
                </div>
            </div>
        </li>
    );
}

export default MovieCart;
