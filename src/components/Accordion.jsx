import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';

export default function AccordionComponent() {
  const theme = useTheme();

  return (
    <div>
      <Accordion
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.default,
        }}
        square
        defaultExpanded
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#FF5200' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            typography: theme.typography,
            fontSize: '1.2rem',
          }}
        >
          Soy administrador, ¿cómo puedo empezar a usar EntrePisos en mi edificio?
        </AccordionSummary>
        <AccordionDetails
          sx={{
            typography: theme.typography,
            fontSize: '1rem',
            textAlign: 'left',
          }}
        >
          EntrePisos ofrece sus servicios a edificios o PHs completos, con el pago gestionado a través de las expensas. Como administrador, podés implementar la plataforma para mejorar la comunicación y administración de tu edificio. Contáctanos para obtener más información y comenzar a usar EntrePisos en tu comunidad.
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.default,
        }}
        square
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#FF5200' }} />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            typography: theme.typography,
            fontSize: '1.2rem',
          }}
        >
          Soy vecino, ¿cómo puedo empezar a usar EntrePisos en mi edificio?
        </AccordionSummary>
        <AccordionDetails
          sx={{
            typography: theme.typography,
            fontSize: '1rem',
            textAlign: 'left',
          }}
        >
          Para comenzar a usar EntrePisos, tu administrador debe implementar el servicio en el edificio. Te invitamos a comunicarte con nosotros para más información y compartir esta propuesta con tu administrador.
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.default,
        }}
        square
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#FF5200' }} />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            typography: theme.typography,
            fontSize: '1.2rem',
          }}
        >
          ¿Qué pasa si tengo un problema o necesito soporte?
        </AccordionSummary>
        <AccordionDetails
          sx={{
            typography: theme.typography,
            fontSize: '1rem',
            textAlign: 'left',
          }}
        >
          En EntrePisos estamos comprometidos con brindar un servicio confiable y seguro. Contamos con un equipo de soporte disponible para ayudarte ante cualquier inconveniente. Podés comunicarte con nosotros en cualquier momento y resolveremos tu consulta de manera rápida y efectiva.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}