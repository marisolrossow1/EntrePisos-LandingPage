import React from 'react';
import { Container, Grid2, Typography, Box } from '@mui/material'
import mockup from '../assets/mockup1.png'
import { useTheme } from '@mui/material/styles'
import BaseButton from './BaseButton'

const Download = () => {
    const theme = useTheme();

  return (
    <Container id="descargar">
      <Grid2 container spacing={4} sx={{ paddingTop: '10rem', display: 'flex', 
          alignItems: 'center' }}>
        {/* Contenedor de texto (izquierda) */}
        <Grid2 size={{ xs: 12, md: 6, lg: 6 }} sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: { xs: 'left', md: 'left', lg: 'left' }, 
            alignItems: { xs: 'left', md: 'flex-start' }
          }}>
          <Typography variant="h1" sx={{
                    color: theme.palette.primary.main, fontSize: '2.5rem', marginBottom: '1.5rem',
                }}>
              ¿Estás listo para transformar tu vida en el edificio?
          </Typography>
          <Typography variant="h2" sx={{
                    color: theme.palette.text.default, fontSize: '1.2rem', marginBottom: '2rem',
                }}>
              Con EntrePisos, la convivencia deja de ser un desafío y se convierte en algo simple y organizado. ¡Sumate ahora y hacé la diferencia!          </Typography>
          <BaseButton text="Descargá la app" sx={{
              width: { xs: '100%', sm: '70%', md: '80%', lg: '50%' }, display: 'flex', justifyContent: { xs: 'center' } }} />
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

export default Download;