export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE'
export const ADD_SEARCH_RESULT ='ADD_SEARCH_RESULT'
export const ADD_SINGLE_MOVIE ='ADD_SINGLE_MOVIE'

export function addMovie(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addSingleMovie(movie) {
    return {
        type: ADD_SINGLE_MOVIE,
        movie
    }
}


export function addFavourite(movie) {
    return {
        type: ADD_FAVOURITE,
        movie
    }
}


export function removeFavourite(movie) {
    return {
        type: REMOVE_FAVOURITE,
        movie
    }
}


export function getSearchResult(movieName) {
    const url = `https://www.omdbapi.com/?apikey=6b519265&t=${movieName}`;
    return function (dispatch) {
        fetch(url)
            .then(data => data.json())
            .then(data =>{
                dispatch(addMovieSearchResult(data))
            })

    }
}


export function addMovieSearchResult(movie){
     return{
        type:ADD_SEARCH_RESULT,
        movie
     }
}