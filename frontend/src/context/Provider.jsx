//Imports
import React, { useState } from 'react';
import propTypes from 'prop-types';

//Context
import AppContext from './AppContext';

function Provider({children}) {


  const [produtos, setProdutos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const value = {
    produtos,
    setProdutos,
    loading, 
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
  }

  return (  
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>

  );
}

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;


export default Provider;

