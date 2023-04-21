
import { combineReducers } from "redux";
import { ADD_FAVOURITE, ADD_MOVIES, ADD_SEARCH_RESULT, ADD_SINGLE_MOVIE, REMOVE_FAVOURITE } from "../actions";


const initialMoviesState={
    list:[],
    favourites:[]
}

export function movies(state=initialMoviesState, action){
    
     switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            };
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites: [action.movie,...state.favourites]
            }
        case REMOVE_FAVOURITE:
            return {
                ...state,
                favourites:state.favourites.filter(movie=>movie.imdbRating!=action.movie.imdbRating)
            }
        case ADD_SINGLE_MOVIE:
            return {
                ...state,
                list:[action.movie, ...state.list]
            }

        default:
            return state;
     }
}


const initialSearchState={
    searchResult:{}
}

export function search(state=initialSearchState, action){
    

    switch (action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                searchResult:action.movie
            }

        default:
            return state;
    }
}



// export default function rootReducer(state=initialRootReducer, action){
//     return {
//         movies:movies(state.movies, action),
//         search:search(state.search, action)
//     }
// }


export default combineReducers({movies, search})
