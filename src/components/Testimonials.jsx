import React from "react";
import { Container, Grid2, Typography, Paper } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Slider from './TestimonialSlider'

const Testimonials = () => {
  const theme = useTheme();

  return (
    <Container sx={{ paddingTop: "5rem", marginBottom: "5rem" }} id="testimonios">
      {/* Títulos */}
      <Grid2 container columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 30 }}>
        <Grid2 size={{ xs: 12, md: 7 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "600",
              fontSize: "2rem",
              textAlign: "left",
              color: theme.palette.primary.main,
              marginBottom: { xs: '1rem', sm: '1rem' }
            }}
          >
            Lo que dicen los vecinos y administradores que usan EntrePisos
          </Typography>
        </Grid2>
      </Grid2>

      {/* Carrusel */}

    <Grid2 sx={{ marginTop: { xs: '2rem', sm: '2rem', md: '4rem', lg: '4rem' } }}>
      <Slider />
    </Grid2>

    </Container>
  );
};

// Componente para cada testimonio
function Item(props) {
  return (
    <Paper
      square
      elevation={3}
      sx={{
        padding: "1rem",
        minWidth: "250px",  // Asegura un tamaño consistente para cada tarjeta
        height: "100%",
      }}
    >
      <Typography variant="h6">{props.item.number}</Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "600", margin: "0.5rem 0" }}
      >
        {props.item.opinion}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: '400' }}>
        {props.item.author}
      </Typography>
    </Paper>
  );
}

export default Testimonials;