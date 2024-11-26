import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { reviews } from './reviews';
import { useTheme } from '@mui/material/styles';
import { Box, Grid2, Typography } from '@mui/material';
import '../index.css'

const Slider = () => {
  const theme = useTheme();

  return (
    <section className="testimonial-container">
      <div className="slider-container">
        <Splide
          options={{
            perPage: 2,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
            pagination: false,
            arrows: true,
            breakpoints: {
                900: {
                    perPage: 1,
                    arrows: false,
                    pagination: true
                },
            }
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              {/* Usamos Grid2 para definir el tamaño del slide */}
              <Grid2 container justifyContent="center" alignItems="center" spacing={1}>
                <Grid2>
                  {/* Paper con elevation: 3, sin border-radius */}
                  <Box
                    sx={{
                      padding: 2,
                      maxWidth: '480px'
                    }}
                  >
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                      {review.opinion}
                    </Typography>
                    <div className="info">
                      <Typography variant="body1" color="text.secondary">
                        {review.author}
                      </Typography>
                    </div>
                  </Box>
                </Grid2>
              </Grid2>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Slider;