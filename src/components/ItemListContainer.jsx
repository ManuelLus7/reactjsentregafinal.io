import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState('Productos');
    const { categoria } = useParams();

    useEffect(() => {
        // Función para obtener los productos desde Firestore
        const fetchProductos = async () => {
            try {
                const productosRef = collection(db, 'productos');
                const q = categoria ? query(productosRef, where('categoria', '==', categoria)) : productosRef;

                const querySnapshot = await getDocs(q);

                setProductos(
                    querySnapshot.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id };
                    })
                );
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        };

        // Llamamos a la función para obtener los productos
        fetchProductos();

        // Actualizamos el título según la categoría seleccionada (si existe)
        setTitulo(categoria ? `Productos de ${categoria}` : 'Productos');
    }, [categoria]);

    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    );
};

export default ItemListContainer;
