import React from "react";
import { Container, Grid2, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const Video = () => {
  const theme = useTheme();

  return (
    <Container sx={{ marginTop: { xs: '7rem', sm: '7rem', md: '10rem', lg: '10rem'} }} id="video">
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
            EntrePisos hace todo más fácil en edificios y PHs.
          </Typography>
        </Grid2>
      </Grid2>

      {/* Video */}

    <Grid2>

    <div
          style={{
            position: 'relative',
            paddingTop: '56.25%',  // Mantiene la relación de aspecto 16:9
            height: 0,
            overflow: 'hidden',
            maxWidth: '100%',
          }}
        >
          <iframe
            title="Video de YouTube"
            src="https://www.youtube.com/embed/1EzUHh6TMgw?si=pHm0Zm9pQD-u31j3?&mute=1&showinfo=0"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',  // Reducción del tamaño
              height: '80%', // Reducción del tamaño
              border: 'none',
            }}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

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

export default Video;