// Imports
import React, { useState, useContext } from 'react';
import { FaSearch } from "react-icons/fa";

// Estilos
import './SearchBar.css'

//Api
import fetchProdutos from '../../api/fetchProdutos';

//Context
import AppContext from '../../context/AppContext';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');
  const {setProdutos, setLoading} = useContext(AppContext);

  const handleSearch = async (event) =>{
    event.preventDefault();
    setLoading(true)
    const produtos = await fetchProdutos(searchValue)
    setProdutos(produtos)
    setLoading(false)
    setSearchValue('')
  };

  return (  
    <>
      <form className='search-bar' 
      onSubmit={handleSearch}>
        <input 
          type="search" 
          value={searchValue}
          placeholder='Buscar produtos'
          className='search__input'
          name="" 
          id="" 
          required
          onChange={({target}) => setSearchValue(target.value)}
        />

        <button className="search__button">
          <FaSearch />
        </button>
      </form>
    </>
  );
}

export default SearchBar;

