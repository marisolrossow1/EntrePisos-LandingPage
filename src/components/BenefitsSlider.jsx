import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import { Box, Typography } from "@mui/material"
import { useTheme } from '@mui/material/styles'

const BenefitsSlider = ({ benefits }) => {
  const theme = useTheme();

  return (
    <Splide
      options={{
        perPage: 1,
        autoplay: true,
        speed: 1000,
        rewind: true,
        rewindByDrag: true,
        gap: "1.5rem",
        arrows: false,
        pagination: true,
      }}
    >
      {benefits.map((benefit) => (
        <SplideSlide key={benefit.id}>
          <Box
            elevation={3}
            sx={{
              padding: "1.5rem",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
             <Box sx={{ color: '#FF8226' }}>
              {React.cloneElement(benefit.icon, { sx: { fontSize: '60px', color: 'inherit' } })}
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "600", marginTop: "1rem", color: theme.palette.primary.main, textAlign: 'left' }}>
              {benefit.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: "0.5rem",
                fontSize: "1rem",
                fontWeight: "400",
                textAlign: 'left'
              }}
            >
              {benefit.description}
            </Typography>
          </Box>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default BenefitsSlider;