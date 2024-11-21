import React from 'react';
import { Container, Grid2, Typography, Box } from '@mui/material';
import mockup from '../assets/mockup1.png';
import { useTheme } from '@mui/material/styles';
import Form from './Form';

const ContactUs = () => {
  const theme = useTheme();

  return (
    <Container id="comencemos">
      <Grid2 container spacing={4} sx={{
        paddingTop: '5rem', display: 'flex',
        alignItems: 'center'
      }}>
        {/* Contenedor de texto (izquierda) */}
        <Grid2 size={{ xs: 12, md: 6, lg: 6 }} sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: { xs: 'left', md: 'left', lg: 'left' },
          alignItems: { xs: 'left', md: 'flex-start' }
        }}>
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
            Comencemos
          </Typography>

          <Typography
            variant="h2"
            sx={{
              textAlign: "left",
              fontSize: '1.2rem',
              fontWeight: '400',
              marginBottom: '1.5rem',
            }}
          >
            Completá el formulario para conocer nuestra propuesta.
          </Typography>

          <Form />
        </Grid2>

        {/* Contenedor de imagen (derecha) */}
        <Grid2 size={{ xs: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box
            component="img"
            src={mockup}
            alt="Ilustración de personas felices chocando los cinco."
            sx={{
              width: { xs: '100%', md: '100%', lg: '80%' }, // Responsivo
              display: { xs: 'none', sm: 'none', md: 'flex' }
            }}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default ContactUs;