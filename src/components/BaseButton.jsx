import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

/**
 * BaseButton
 * Botón personalizado reutilizable que muestra un indicador de carga.
 * 
 * @param {function} handleClick - Función a ejecutar cuando se hace clic en el botón.
 * @param {string} text - Texto a mostrar en el botón.
 * 
 * @returns {JSX.Element} Un botón con un indicador de carga si está en proceso.
 */
const BaseButton = ({ text = 'Enviar', sx = {} }) => {
    const theme = useTheme();

    return (
        <Button
            type="button"
            // onClick={handleClick}
            variant="contained"
            sx={{ color: theme.palette.background.default, backgroundColor: '#FF5200', borderRadius:'0px', boxShadow: 'none', textTransform: 'none', letterSpacing: '0.5px', fontSize: '1.2rem',
                width: 'auto',
                fontWeight: '500',
                ...sx,
            '&:hover': {
                backgroundColor: '#FF8226',
                color: '#0E0E0E',
                boxShadow: 'none', 
                ...sx,
            }, }}
        >
            {text}
        </Button>
    );
};

export default BaseButton;