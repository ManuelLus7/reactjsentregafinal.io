import data from "../data/data.json";

// Creamos un objeto para almacenar los productos por su ID
const productosPorId = {};
data.forEach((producto) => {
    productosPorId[producto.id] = producto;
});

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    });
};

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        // Buscamos el producto directamente en el objeto productosPorId
        const item = productosPorId[id];

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontró el producto",
            });
        }
    });
};
