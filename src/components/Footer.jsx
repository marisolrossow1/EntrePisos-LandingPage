import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import logoFooter from '../assets/logoNav.svg';

function Footer() {
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: theme.palette.background.default,
                py: 2, // Padding vertical general
            }}
        >
            <Box
                sx={{
                    width: '100%', // Ocupa el ancho total
                    display: 'flex',
                    justifyContent: 'center', // Centra el contenedor principal
                }}
            >
                <Box
                    sx={{
                        width: '1138px', // Ancho fijo
                        px: 2, // Padding horizontal interno
                    }}
                >
                    {/* Contenedor principal */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between', // Logo a la izquierda y links a la derecha
                            flexWrap: 'wrap', // Ajuste responsivo
                            gap: 2, // Espaciado entre elementos en pantallas pequeñas
                            mb: 1, // Margen inferior para el Divider
                            paddingTop: '7rem', // Como lo tenías originalmente
                        }}
                    >
                        {/* Logo */}
                        <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
                            <img src={logoFooter} alt="EntrePisos" style={{ height: 40 }} />
                        </Box>

                        {/* Menú de navegación */}
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 3, // Espaciado horizontal entre los enlaces
                                flexWrap: 'wrap', // Soporte para pantallas pequeñas
                                [`@media (max-width: 768px)`]: {
                                    flexDirection: 'column', // Coloca los links en columna
                                    alignItems: 'flex-start', // Alinea los links a la izquierda
                                    gap: 1.5, // Ajusta el espacio entre los links
                                },
                            }}
                        >
                            {['Inicio', 'Beneficios', 'Testimonios', 'Preguntas Frecuentes', 'Comencemos', 'Descargar'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                                    underline="none"
                                    sx={{
                                        color: theme.palette.text.primary,
                                        fontWeight: 500,
                                        textTransform: 'none',
                                        fontFamily: theme.typography.fontFamily, // Usar tipografía del tema
                                        '&:hover': {
                                            color: theme.palette.primary.main,
                                        },
                                    }}
                                >
                                    {item}
                                </Link>
                            ))}
                        </Box>
                    </Box>

                    {/* Divider (como lo tenías) */}
                    <Divider sx={{ borderColor: theme.palette.divider, my: 1, paddingTop: '1rem' }} />

                    {/* Derechos reservados (con padding-top original) */}
                    <Typography
                        variant="body2"
                        sx={{
                            color: theme.palette.text.secondary,
                            textAlign: 'left',
                            paddingTop: '1rem', // Como lo tenías originalmente
                            fontFamily: theme.typography.fontFamily, // Usar tipografía del tema
                        }}
                    >
                        Todos los derechos reservados
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;