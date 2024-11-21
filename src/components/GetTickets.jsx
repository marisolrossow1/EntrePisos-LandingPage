import React from 'react';
import { Container, Grid2, Typography, Box } from '@mui/material'
import palacioBarolo from '../assets/palacioBarolo.webp'
import { useTheme } from '@mui/material/styles'
import BaseButton from './BaseButton'

const GetTickets = () => {
    const theme = useTheme();

  return (
    <Container id="inicio">
      <Grid2 container spacing={4} sx={{ paddingTop: '5rem', display: 'flex', 
          alignItems: 'center' }}>
        {/* Contenedor de texto (izquierda) */}
        <Grid2 size={{ xs: 12, md: 6, lg: 6 }} sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: { xs: 'left', md: 'left', lg: 'left' }, 
            alignItems: { xs: 'left', md: 'flex-start' }
          }}>
          <Typography variant="h1" sx={{
                    color: theme.palette.primary.main, fontSize: '3rem', marginBottom: '1.2rem', fontWeight: '600',
                }}>
            SAVE THE DATE
          </Typography>
          <Typography variant="h2" sx={{
                    color: theme.palette.text.default, fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '400',
                }}>
            Conocé el Palacio Barolo de la mano de EntrePisos, el día 11/04 a las 15hs 
          </Typography>
          <BaseButton text="Conseguí tu entrada" sx={{
              width: { xs: '100%', sm: '100%', md: '80%', lg: '50%' }, display: 'flex' }} />
        </Grid2>
        {/* Contenedor de imagen (derecha) */}
        <Grid2 size={{ xs: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
            component="img"
            src={palacioBarolo}
            alt="Salón 1923, Palacio Barolo."
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

export default GetTickets;