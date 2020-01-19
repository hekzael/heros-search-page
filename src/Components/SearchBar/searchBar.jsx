import React, { useContext } from "react";
import { Context } from '../Context';
import './nav-css.css';
import logo from './marvel.svg';

const SearchBar = () => {
 /*  const searchBarContext = useContext(Context); */
  const {
    handleChangeQuery,
    handleSumbitSearch,
    searchQuery,
  } =  useContext(Context);

  return(
    <div className='search-bar-container'>
      <div className= 'logo-container'>
        <img src={logo} className='logo' alt='Logo' />
      </div>
      <div className='search'>
        <i className='fa fa-search icon-search'></i>
        <input 
          type='text'
          value = { searchQuery } 
          id = 'search'
          placeholder = 'Search hero...'
          onChange = { (e) => handleChangeQuery(e) }
          onKeyPress = { (e) => handleSumbitSearch(e) }
        />
      </div>
      
    </div>
  )
  
};

export default SearchBar;