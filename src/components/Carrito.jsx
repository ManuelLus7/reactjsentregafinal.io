import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const styles = {
  marginBottom: '40px',
};

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito, aumentarCantidad, disminuirCantidad } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container" style={styles}>
      <h1 className="main-title">Carrito</h1>

      {/* Mostrar los productos en el carrito */}
      {carrito.length > 0 ? (
        carrito.map((prod) => (
          <div key={prod.id} className="producto-detalle">
            <br />
            <h3>{prod.titulo}</h3>
            <p>Precio unit: ${prod.precio}</p>
            <p>Precio total: ${prod.precio * prod.cantidad}</p>
            <div className="item-count">
              <button onClick={() => disminuirCantidad(prod.id)}>-</button>
              <span>Cant: {prod.cantidad}</span>
              <button onClick={() => aumentarCantidad(prod.id)}>+</button>
            </div>
            <br />
          </div>
        ))
      ) : (
        <h2>El carrito se encuentra vacío</h2>
      )}

      {/* Mostrar el precio total, botón de vaciar carrito y enlace a Finalizar compra */}
      {carrito.length > 0 && (
        <>
          <h2>Precio total: ${precioTotal()}</h2>
          <button className="agregar-al-carrito" onClick={handleVaciar}>
            Vaciar
          </button>
          <Link className="enviar" to="/checkout">
            Finalizar compra
          </Link>
          <br />
          <br />
        </>
      )}
    </div>
  );
};

export default Carrito;
