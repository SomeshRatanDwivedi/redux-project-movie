import React, { useEffect, useState } from 'react';
import { getSearchResult } from '../actions';
import MovieCart from './MovieCart';
import SearchResult from './SearchResult';

const Navbar = ({dispatch, result}) => {

     const [searchText, setSearchText]=useState('');
   
      
     console.log(result)

     const handleSearch=()=>{
         dispatch(getSearchResult(searchText))
     }

    return (
        <div className='nav'>
            <div className='search-container'>
                 <input autoComplete='off' name='search' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button id='search-btn' onClick={handleSearch}>Search</button>

            </div>

            {
                Object.keys(result).length !== 0  &&
                   <SearchResult movie={result} dispatch={dispatch}/>

            }
        </div>
    );
}

export default Navbar;
