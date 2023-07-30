import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState('');
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
            vaciarCarrito();
        });
    };

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">¡Muchas gracias por tu compra!</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        );
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
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
    );
};

export default Checkout;
