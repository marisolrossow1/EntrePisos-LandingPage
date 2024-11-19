import React, { useState } from 'react';
import BaseButtonSubmit from '../components/BaseButtonSubmit';
import BaseInput from '../components/BaseInput';
import { Grid2 } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Form() {
    const theme = useTheme();
    
    // Estado para manejar los valores del formulario
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Función para manejar cambios en los campos de entrada
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues({
            ...formValues,
            [id]: value
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario (reenvío de página)

        // Aquí podrías hacer un llamado a una API o cualquier otra acción
        console.log("Formulario enviado con éxito");

        // Vaciar los campos después de enviar el formulario
        setFormValues({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <form 
            className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md space-y-4 mt-6"
            onSubmit={handleSubmit} // Añadido el manejador de submit
        >
            <Grid2 container spacing={2}>
                {/* Nombre */}
                <Grid2 size={12}>
                    <BaseInput
                        id="name"
                        label="Nombre"
                        placeholder="Ingresa tu nombre"
                        required={true}
                        value={formValues.name}
                        onChange={handleChange}
                    />
                </Grid2>

                {/* Correo electrónico */}
                <Grid2 size={12}>
                    <BaseInput
                        id="email"
                        label="Correo Electrónico"
                        placeholder="Ingresa tu correo electrónico"
                        required={true}
                        type="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </Grid2>

                {/* Celular */}
                <Grid2 size={12}>
                    <BaseInput
                        id="phone"
                        label="Celular"
                        placeholder="Ingresa tu número de celular"
                        required={true}
                        type="tel"
                        value={formValues.phone}
                        onChange={handleChange}
                    />
                </Grid2>

                {/* Mensaje */}
                <Grid2 size={12}>
                    <BaseInput
                        id="message"
                        label="Mensaje"
                        placeholder="Escribe tu mensaje"
                        required={true}
                        multiline
                        rows={4}
                        value={formValues.message}
                        onChange={handleChange}
                    />
                </Grid2>
            </Grid2>

            {/* Botón Enviar */}
            <div className="flex justify-center mt-4">
                <BaseButtonSubmit 
                    type="submit"
                    text="Enviar"
                    sx={{
                        marginTop: '1rem',
                        width: '100%',
                        backgroundColor: theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.light,
                            color: theme.palette.background.default, 
                        },
                    }}
                />
            </div>
        </form>
    );
}