//Imports
import React, {useContext} from 'react';
import propTypes from 'prop-types';
import { BsCartDash } from "react-icons/bs";

//Context
import AppContext from '../../context/AppContext';

//Utils
import formatCurrency from '../../utils/formatCurrency';

//estilos
import './CartItem.css'



function CartItem({data}) {
  
  const {id, thumbnail, title, price} = data;
  const { cartItems, setCartItems } = useContext(AppContext)
  const handleRemoveItem = () =>{
    const updateItems = cartItems.filter((item) => item.id != id)
    setCartItems(updateItems)
  }

  return ( 
    <section className='cart-item'>
      <img 
        src={thumbnail} 
        alt="Imagem do Produto" 
        className='cart-item-image'/>

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button 
          type="button" 
          className="button__remove-item"
          onClick={handleRemoveItem}>
            <BsCartDash />
        </button>
      </div>

    </section>
   );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object,
}.isRequired;
