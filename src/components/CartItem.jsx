import React from 'react';

const CartItem = ({ producto }) => {
  return (
    <div className="producto-detalle">
      <h3>{producto.titulo}</h3>
      <p>Precio unit: ${producto.precio}</p>
      <p>Cantidad: {producto.cantidad}</p>
      <p>Precio total: ${producto.precio * producto.cantidad}</p>
    </div>
  );
};

export default CartItem;
