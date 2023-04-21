import React, { useEffect, useState} from 'react';
import MovieCart from './MovieCart';
import { data } from '../data';
import { addMovie } from '../actions';



const Home = ({ store }) => {
    

    const [isMovieTab, setIsMovieTab]=useState(true)

     const moviesObj=store.getState().movies;
  

    let movies = isMovieTab ? moviesObj.list : moviesObj.favourites;

    useEffect(() => {
       
        store.dispatch(addMovie(data))
       
    }, [])

    const isMovieFavourite=(movie)=>{
        const {favourites}=moviesObj;
        const index=favourites.indexOf(movie);
        return index!==-1;
    }
 

    return (
        <div className='main'>
            <div className='tabs'>
                <div className={isMovieTab?'tab active-tabs':'tab'} onClick={()=>setIsMovieTab(!isMovieTab)}>
                    Movies
                </div>
                <div  className={!isMovieTab?'tab active-tabs':'tab'} onClick={()=>setIsMovieTab(!isMovieTab)}>
                    Favourite
                </div>

            </div>

            <ul>
                {
                    movies.map(movie => {
                        return <MovieCart key={movie.imdbID} movie={movie} dispatch={store.dispatch} isMovieFavourite={isMovieFavourite(movie)} />
                    })
                }
            </ul>



        </div>
    );
}

export default Home;
