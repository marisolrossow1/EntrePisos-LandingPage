import React from "react"
import { Container, Grid2, Typography, Box, Paper } from "@mui/material"
import { useTheme } from '@mui/material/styles'
import mockup1 from '../assets/mockup1.png'

const Benefits2 = () => {
    const theme = useTheme();

    const items = [
        {
            number: "01",
            title: "Fácil de usar para todos",
            subtitle: "No necesitás ser un experto en tecnología. La app es clara, intuitiva y rápida de entender.",
        },
        {
            number: "02",
            title: "Enfoque en los vecinos",
            subtitle: "Mejorá la comunicación, tomá decisiones en grupo y evitá malentendidos con herramientas pensadas para el día a día en tu edificio.",
        },
        {
            number: "03",
            title: "Herramientas para los administradores",
            subtitle: "Gestioná expensas, avisos y reservas sin complicaciones, y tené todo organizado en un solo lugar.",
        },
    ];

    return (
        <Container sx={{ marginTop: "10rem", marginBottom: "5rem" }}>
            {/* Títulos */}
            <Grid2 container columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 30 }}>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: "semibold",
                            fontSize: "2rem",
                            textAlign: "left",
                            color: theme.palette.primary.main,
                            marginBottom: { xs: '1rem', sm: '1rem' }
                        }}
                    >
                        Todo lo que necesitás para convivir mejor
                    </Typography>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: "left",
                            fontSize: '1.2rem',
                        }}
                    >
                        En EntrePisos pensamos en todos: vecinos y administradores. La app está diseñada para resolver problemas reales y hacer que la convivencia sea más simple y organizada.
                    </Typography>
                </Grid2>
            </Grid2>

            {/* Beneficios e imagen */}
            <Container disableGutters container spacing={4} sx={{ marginTop: "4rem" }}>
                {/* Beneficios e imagen */}
                <Grid2 container spacing={4} sx={{ marginTop: "3rem" }}>
                    {/* Columna izquierda: ítems de texto */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        {items.map((item, index) => (
                            <Box key={index} sx={{ marginBottom: "2rem" }}>
                                <Grid2 container>
                                    {/* Número */}
                                    <Grid2 size={2}>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontWeight: "bold",
                                                fontSize: "2.5rem",
                                                color: theme.palette.primary.main,
                                                textAlign: "left",
                                            }}
                                        >
                                            {item.number}
                                        </Typography>
                                    </Grid2>
                                    {/* Título y subtítulo */}
                                    <Grid2 size={10}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: "semibold",
                                                fontSize: "1.5rem",
                                                marginBottom: "0.5rem",
                                                color: theme.palette.text.primary,
                                                textAlign: "left",
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: theme.palette.text.secondary,
                                                fontSize: "1rem",
                                                textAlign: "left",
                                            }}
                                        >
                                            {item.subtitle}
                                        </Typography>
                                    </Grid2>
                                </Grid2>
                            </Box>
                        ))}
                    </Grid2>

                    {/* Columna derecha: imagen */}
                    <Grid2
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            component="img"
                            src={mockup1}
                            alt="Celular con la aplicación de EntrePisos."
                            sx={{
                                width: "100%",
                                maxWidth: "500px", // Tamaño máximo para limitar el ancho
                                height: "auto", // Mantener proporción
                            }}
                        />
                    </Grid2>
                </Grid2>
            </Container>
        </Container>


    );
};

export default Benefits2;