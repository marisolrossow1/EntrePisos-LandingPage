import React from "react"
import { Container, Grid2, Typography, Box, Paper } from "@mui/material"
import { useTheme } from '@mui/material/styles'
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp';
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import DownloadSharpIcon from '@mui/icons-material/DownloadSharp';
import WarningAmberSharpIcon from '@mui/icons-material/WarningAmberSharp';

const Benefits = () => {
    const theme = useTheme();

    return (
        <Container sx={{ paddingTop: "5rem", marginBottom: "5rem" }} id="beneficios">
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
                        Preocupate menos y disfrutá más de la tranquilidad
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
                        EntrePisos te da las herramientas para que la convivencia en tu edificio
                        sea simple, organizada y sin complicaciones.
                    </Typography>
                </Grid2>
            </Grid2>

            {/* Grilla de características */}
            <Container sx={{ marginTop: '3.5rem' }} disableGutters>
                <Grid2 container columnSpacing={{ xs: 2, sm: 3, md: 4, lg: 5 }} rowSpacing={13}>
                    {/* Ítem 1 */}
                    <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
                        <Paper elevation={3} sx={{ padding: "1rem", height: "100%" }} square>
                            <EventAvailableSharpIcon sx={{ fontSize: '60px', marginBottom: '1rem', display: 'flex' }} />
                            <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: 'left' }}>
                                Reservá los amenities en segundos
                            </Typography>
                            <Typography variant="body2" sx={{ marginTop: "1rem", textAlign: 'left', fontSize: '1rem' }}>
                                Desde EntrePisos, podés reservar el SUM, parrillas o cualquier
                                otro espacio compartido de manera rápida y sin conflictos.
                            </Typography>
                        </Paper>
                    </Grid2>

                    {/* Ítem 2 */}
                    <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
                        <Paper elevation={3} sx={{ padding: "1rem", height: "100%" }} square>
                        <ChatBubbleOutlineSharpIcon sx={{ fontSize: '60px', marginBottom: '1rem', display: 'flex' }} />
                            <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: 'left' }}>
                                Comunicá todo desde la app
                            </Typography>
                            <Typography variant="body2" sx={{ marginTop: "1rem", textAlign: 'left', fontSize: '1rem' }}>
                                ¿Se rompió algo o hay un tema urgente? Avisale al administrador
                                directamente desde la app. ¡Rápido, práctico y sin mails sin
                                responder!
                            </Typography>
                        </Paper>
                    </Grid2>

                    {/* Ítem 3 */}
                    <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
                        <Paper elevation={3} sx={{ padding: "1rem", height: "100%" }} square>
                            <InsertChartOutlinedSharpIcon sx={{ fontSize: '60px', marginBottom: '1rem', display: 'flex' }} />
                            <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: 'left' }}>
                                Tomá decisiones con encuestas simples
                            </Typography>
                            <Typography variant="body2" sx={{ marginTop: "1rem", textAlign: 'left', fontSize: '1rem' }}>
                                Decile chau a las discusiones interminables. Ahora podés
                                participar en decisiones importantes con encuestas accesibles para
                                todos los vecinos.
                            </Typography>
                        </Paper>
                    </Grid2>

                    {/* Segunda fila */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Paper elevation={3} sx={{ padding: "1rem", height: "100%" }} square>
                            <DownloadSharpIcon sx={{ fontSize: '60px', marginBottom: '1rem', display: 'flex' }} />
                            <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: 'left' }}>
                                Descargá tus expensas al instante
                            </Typography>
                            <Typography variant="body2" sx={{ marginTop: "1rem", textAlign: 'left', fontSize: '1rem' }}>
                                Tené siempre a mano tus expensas con todos los detalles que
                                necesitás. Desde facturas hasta las formas de pago, todo accesible
                                desde la app.
                            </Typography>
                        </Paper>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Paper elevation={3} sx={{ padding: "1rem", height: "100%" }} square>
                            <WarningAmberSharpIcon sx={{ fontSize: '60px', marginBottom: '1rem', display: 'flex' }} />
                            <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: 'left' }}>
                                Notificaciones directas entre vecinos
                            </Typography>
                            <Typography variant="body2" sx={{ marginTop: "1rem", textAlign: 'left', fontSize: '1rem' }}>
                                ¿Un vecino dejó la puerta abierta o hay un auto mal estacionado?
                                Enviá notificaciones específicas a quien lo necesite, sin molestar
                                al resto del edificio.
                            </Typography>
                        </Paper>
                    </Grid2>
                </Grid2>
            </Container>
        </Container>
    );
};

export default Benefits;