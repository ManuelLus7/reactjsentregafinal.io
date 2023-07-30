import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemListContainer = () => {
  // Estado para almacenar la lista de productos obtenidos de Firebase
  const [productos, setProductos] = useState([]);

  // Estado para almacenar el título de la lista (por defecto "Productos")
  const [titulo, setTitulo] = useState('Productos');

  // Obtener el parámetro "categoria" de la URL utilizando useParams de react-router-dom
  const { categoria } = useParams();

  // UseEffect para realizar una consulta a Firestore y obtener los productos
  useEffect(() => {
    // Referencia a la colección "productos" en Firestore
    const productosRef = collection(db, "productos");

    // Si se especifica una categoría en la URL, agregar una cláusula "where" a la consulta
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

    // Obtener los documentos (productos) de Firestore según la consulta
    getDocs(q)
      .then((resp) => {
        // Almacenar los productos obtenidos en el estado "productos"
        setProductos(
          resp.docs.map((doc) => {
            // Mapear cada documento a un objeto que incluye los datos y el ID del producto
            return { ...doc.data(), id: doc.id };
          })
        );
      });
  }, [categoria]); // Ejecutar el useEffect cuando cambia la categoría

  return (
    <div>
      {/* Pasar la lista de productos y el título al componente ItemList */}
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;

