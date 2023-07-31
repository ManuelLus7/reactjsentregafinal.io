import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState('');
  const [pedido, setPedido] = useState(null); // Estado local para almacenar el detalle del pedido
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };
    console.log(pedido);

    const pedidosRef = collection(db, 'pedidos');

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      setPedido(pedido); // Guardar el detalle del pedido en el estado local
      vaciarCarrito();
    });
  };

  if (pedidoId) {
    return (
      <div className="container">
        <h1 className="main-title">¡Agradecemos Mucho Tú Compra!</h1>
        <h2 className="second-title">¡Tu orden ha sido enviada con Exito! y te lo estaremos enviando a la brevedad!</h2>
        <p>Tu número de pedido es: {pedidoId}</p>

        {/* Mostrar el detalle del pedido */}
        {pedido && (
          <div>
            <h2>Detalle del Cliente:</h2>
            <p>Cliente: {pedido.cliente.nombre}</p>
            <p>Correo electrónico: {pedido.cliente.email}</p>
            <p>Número de teléfono: {pedido.cliente.telefono}</p>
            <h3>Detalle de Productos:</h3>
            <ul>
              {pedido.productos.map((producto) => (
                <li key={producto.id}>
                  {producto.titulo} - Cantidad: {producto.cantidad}
                </li>
              ))}
            </ul>
            <p>Total: ${pedido.total}</p>
            <br></br>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="container" style={{ marginBottom: '40px' }}>
      <h1 className="main-title">Finalizar compra</h1>
      <div className="formulario-wrapper">
        <form className="formulario" onSubmit={handleSubmit(comprar)}>
          {/* Input para el nombre */}
          <input type="text" placeholder="Ingresa tu nombre" {...register('nombre', { required: true })} />

          {/* Input para el correo electrónico */}
          <input type="email" placeholder="Ingresa tu correo electrónico" {...register('email', { required: true })} />

          {/* Input para el número de teléfono */}
          <input type="tel" placeholder="Ingresa tu número de teléfono" {...register('telefono', { required: true })} />

          {/* Botón para enviar el formulario */}
          <button className="enviar" type="submit">
            Comprar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
