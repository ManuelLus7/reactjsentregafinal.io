import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // Función para obtener el detalle del producto por su ID desde Firestore
        const fetchItemDetail = async () => {
            try {
                const docRef = doc(db, 'productos', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    // Si el documento existe, configuramos el estado del item
                    setItem({ ...docSnap.data(), id: docSnap.id });
                } else {
                    console.log('El documento no existe.');
                }
            } catch (error) {
                console.error('Error al obtener el detalle del producto:', error);
            }
        };

        // Llamamos a la función para obtener el detalle del producto
        fetchItemDetail();
    }, [id]);

    return (
        <div>
            {item ? (
                // Renderizamos el componente ItemDetail cuando el item tiene información
                <ItemDetail item={item} />
            ) : (
                // Mostramos un mensaje de carga o error mientras se obtiene la información del producto
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
