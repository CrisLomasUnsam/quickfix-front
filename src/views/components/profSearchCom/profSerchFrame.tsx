import { Box, Typography, Button, CircularProgress } from '@mui/material';
import MapSearch from './mapSearch';
import { useState } from 'react';
//import SearchIcon from '@mui/icons-material/Search';

export default function SerchProfessionalFrame() {

    const [buscando, setBuscando] = useState(true); //Es un estado para cancelar la animacion por ahora, se podria usar para cancelar la busqueda 

    return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 2,
            gap: 2,
            width: '100%',
            maxWidth: 500,
            margin: '0 auto',
          }}
        >
          {/* Título con ícono girando */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="subtitle1" textAlign="center">
              {buscando ? 'Buscando profesionales . . .' : 'Búsqueda cancelada'}
            </Typography>
            {buscando && <CircularProgress size={18} />}
          </Box>
    
          {/* Mapa Interactivo */}
          <Box
            sx={{
              width: '100%',
              height: 250,
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <MapSearch />
          </Box>
    
          {/* Botón */}
          <Button
            variant="contained"
            sx={{ borderRadius: 8, px: 4 }}
            onClick={() => setBuscando(false)} 
          >
            Cancelar búsqueda
          </Button>
    
          {/* Ofertas encontradas */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              alignSelf: 'flex-start',
            }}
          >
            <Typography variant="body1" fontWeight="bold">
              Ofertas encontradas:
            </Typography>
          </Box>
        </Box>
      );
    }