import React from 'react';
import { useForm } from 'react-hook-form';

const Contacto = () => {
    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    };

    return (
        <div className="container">
            <h1 className="main-title">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
                <div className="form-group">
                    {/* Input para el nombre */}
                    <label htmlFor="nombre">Nombre: </label>
                    <input
                        type="text"
                        id="nombre"
                        placeholder="Ingresa tu nombre"
                        {...register('nombre', { required: true })}
                    />
                </div>
                <div className="form-group">
                    {/* Input para el correo electrónico */}
                    <label htmlFor="email">Correo Electrónico: </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ingresa tu correo electrónico"
                        {...register('email', { required: true })}
                    />
                </div>
                <div className="form-group">
                    {/* Input para el número de teléfono */}
                    <label htmlFor="telefono">Número de Teléfono: </label>
                    <input
                        type="tel"
                        id="telefono"
                        placeholder="Ingresa tu número de teléfono"
                        {...register('telefono', { required: true })}
                    />
                </div>

                {/* Botón para enviar el formulario */}
                <button className="enviar" type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Contacto;
