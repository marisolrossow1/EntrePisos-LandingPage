import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import { Box, Typography, Container, Grid2 } from "@mui/material"
import { useTheme } from '@mui/material/styles'
import BaseButton from "./BaseButton"
import heroSection from '../assets/heroSection.svg'
import palacioBarolo from '../assets/palacioBarolo.webp'

const HeroSlider = ({ benefits }) => {
    const theme = useTheme();

    return (
        <Splide
            options={{
                perPage: 1,
                autoplay: true,
                speed: 500,
                rewind: true,
                rewindByDrag: true,
                gap: "1.5rem",
                arrows: false,
                pagination: true,
            }}
        >

            <SplideSlide>
            <Container id="inicio">
                    <Grid2
                        container
                        spacing={4}
                        sx={{
                            paddingTop: '5rem',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        {/* Contenedor de texto (izquierda) */}
                        <Grid2
                            size={{ xs: 12, md: 6, lg: 6 }}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: { xs: 'left', md: 'left', lg: 'left' },
                                alignItems: { xs: 'left', md: 'flex-start' },
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    color: theme.palette.primary.main,
                                    fontSize: '3rem',
                                    marginBottom: '1.2rem',
                                    fontWeight: '600',
                                }}
                            >
                                ¡Estás invitado!
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    color: theme.palette.text.default,
                                    fontSize: '1.5rem',
                                    marginBottom: '2rem',
                                    fontWeight: '400',
                                }}
                            >
                                No te podés perder el evento de EntrePisos en el emblemático Palacio Barolo. ¡Entradas limitadas!
                            </Typography>
                            <BaseButton
                                text="Conseguí tu entrada"
                                sx={{
                                    width: { xs: '100%', sm: '100%', md: '80%', lg: '50%' },
                                    display: 'flex',
                                }}
                            />
                        </Grid2>
                        {/* Contenedor de imagen (derecha) */}
                        <Grid2
                            size={{ xs: 12, md: 6, lg: 6 }}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                component="img"
                                src={palacioBarolo}
                                alt="Salón 1923, Palacio Barolo."
                                sx={{
                                    width: { xs: '100%', md: '100%', lg: '80%' },
                                    maxHeight: '500px', // Limita la altura máxima
                                    objectFit: 'contain', // Mantiene proporciones
                                    display: { xs: 'none', sm: 'none', md: 'flex' },
                                }}
                            />
                        </Grid2>
                    </Grid2>
                </Container>
            </SplideSlide>

            <SplideSlide>
            <Container id="inicio">
                    <Grid2
                        container
                        spacing={4}
                        sx={{
                            paddingTop: '5rem',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        {/* Contenedor de texto (izquierda) */}
                        <Grid2
                            size={{ xs: 12, md: 6, lg: 6 }}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: { xs: 'left', md: 'left', lg: 'left' },
                                alignItems: { xs: 'left', md: 'flex-start' },
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    color: theme.palette.primary.main,
                                    fontSize: '3rem',
                                    marginBottom: '1.2rem',
                                    fontWeight: '600',
                                }}
                            >
                                Simplificá la vida en tu edificio
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    color: theme.palette.text.default,
                                    fontSize: '1.5rem',
                                    marginBottom: '2rem',
                                    fontWeight: '400',
                                }}
                            >
                                Una app diseñada para mejorar la convivencia entre vecinos y facilitar la gestión de los edificios.
                            </Typography>
                            <BaseButton
                                text="Descargá la app"
                                sx={{
                                    width: { xs: '100%', sm: '100%', md: '80%', lg: '50%' },
                                    display: 'flex',
                                }}
                            />
                        </Grid2>
                        {/* Contenedor de imagen (derecha) */}
                        <Grid2
                            size={{ xs: 12, md: 6, lg: 6 }}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                component="img"
                                src={heroSection}
                                alt="Ilustración de personas felices chocando los cinco."
                                sx={{
                                    width: { xs: '100%', md: '100%', lg: '80%' },
                                    maxHeight: '500px', // Limita la altura máxima
                                    objectFit: 'contain', // Mantiene proporciones
                                    display: { xs: 'none', sm: 'none', md: 'flex' },
                                }}
                            />
                        </Grid2>
                    </Grid2>
                </Container>
            </SplideSlide>

        </Splide>
    );
};

export default HeroSlider;