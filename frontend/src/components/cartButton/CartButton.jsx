// Imports
import React, { useContext } from 'react';
import { BsCartFill } from "react-icons/bs";

//Context
import AppContext from '../../context/AppContext';

//Estilos
import './CartButton.css'

function CartButton(){
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);


    return(
        <>
          <button 
            type="button" 
            className='cart__button' 
            onClick={()=>setIsCartVisible(!isCartVisible)}>
            <BsCartFill />
            {cartItems.length > 0 && <span className="cart__status">{cartItems.length}</span>}
          </button>
           
        </>
    )
}
export default CartButton;