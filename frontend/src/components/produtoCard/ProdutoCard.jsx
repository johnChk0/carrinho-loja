// imports
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BsCartPlusFill } from "react-icons/bs";

// Context
import AppContext from "../../context/AppContext";

// Utils
import formatCurrency from "../../utils/formatCurrency";

// Estilos
import "./ProdutoCard.css";

function ProdutoCard({ data }) {
  const { id, title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    const itemExist = cartItems.some(item=> item.id === id);
    if(itemExist){
      alert("ESTE ITEM JÀ FOI ADICIONADO AO CARRINHO");
      return;
    }
    setCartItems([...cartItems, data]);
  };

  return (
    <section className="produto__card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt={title}
        className="card__image"
      />
      <div className="card__infos">
        <h2 className="card__preco">{formatCurrency(price, "BRL")}</h2>
        <h2 className="card__title">{title}</h2>
      </div>
      <button
        type="button"
        className="button__add-cart"
        onClick={handleAddCart}
      >
        <BsCartPlusFill />
      </button>
    </section>
  );
}

ProdutoCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProdutoCard;
