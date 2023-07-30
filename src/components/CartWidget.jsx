import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div>
            {/* Enlace al carrito con el número de productos en el carrito */}
            <Link className="cart-widget-link" to="/carrito">
                <FontAwesomeIcon icon={faShoppingCart} /> {/* Utilizamos el icono importado */}
                <span className="cart-widget-count">{cantidadEnCarrito()}</span>
            </Link>
        </div>
    );
};

export default CartWidget;
