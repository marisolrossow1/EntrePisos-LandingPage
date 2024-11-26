import React from "react";
import { Container, Grid2, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import AccordionComponent from "./Accordion";

const Faqs = () => {
  const theme = useTheme();

  return (
    <Container sx={{ paddingTop: "5rem", marginBottom: "5rem" }} id="preguntas-frecuentes">
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
            Preguntas Frecuentes
          </Typography>
        </Grid2>
      </Grid2>

        {/* Accordion */}

    <Grid2 sx={{ marginTop: '2rem' }}>
      <AccordionComponent />
    </Grid2>


    </Container>
  );
};

export default Faqs;