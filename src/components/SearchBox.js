import React from 'react';
import './SearchBox';

const SearchBox = ({searchField,searchChange}) =>{
    return(
        <div className='pa2'>
        
        <input className='pa3 ba b--green bg-light-blue inputbox'
        type='search' 
        placeholder='Search Products'
        onChange = {searchChange} /> 
        </div>
    );
}
export default SearchBox;