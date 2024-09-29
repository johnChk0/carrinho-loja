// Imports
// import { BrowserRouter as Link } from 'react-router-dom';
import React from 'react';

//Estilos
import './header.css'

//Componentes
import SearchBar from '../searchbar/SearchBar';
import CartButton from '../cartButton/CartButton';

function Header(){
    return(
        <>
        <header className='header'>

                <SearchBar/>
                <CartButton/>
        </header>
           
        </>
    )
}
export default Header;