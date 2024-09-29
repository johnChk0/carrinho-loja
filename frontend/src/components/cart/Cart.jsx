//Imports
import React, { useContext } from 'react';

//Context
import AppContext from '../../context/AppContext';

//Utils
import formatCurrency from '../../utils/formatCurrency';

//Componentes
import CartItem from '../cartItem/CartItem';

//estilos
import './Cart.css'


function Cart() {

  const { cartItems, isCartVisible } = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc
  }, 0)

  return ( 
    <>
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className='cart-items'>
        {cartItems.map((cartIten, index) => <CartItem key={cartIten.id} data={cartIten}/>)}
        
      </div>
      <div className="cart-resume">
        <h2>
          {formatCurrency(totalPrice, 'BRL')}
        </h2>
      </div>
    </section>
      
    </>
   );
}

export default Cart;