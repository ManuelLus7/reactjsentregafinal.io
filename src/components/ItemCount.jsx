import React from 'react';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
    // Evitar que la cantidad sea menor que cero
    const cantidadNoNegativa = cantidad >= 0 ? cantidad : 0;

    return (
        <div>
            <div className="item-count">
                <button onClick={handleRestar}>-</button>
                <p>{cantidadNoNegativa}</p>
                <button onClick={handleSumar}>+</button>
            </div>
            <button className="agregar-al-carrito" onClick={handleAgregar}>
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;
