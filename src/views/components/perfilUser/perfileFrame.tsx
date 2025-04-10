//import React from 'react';
import { Box, Avatar, Button, ButtonGroup } from '@mui/material'
import { useNavigate, useLocation, Outlet } from 'react-router'

export default function PerfilTop() {
  const navigate = useNavigate()
  const location = useLocation()

  const botones = [
    { label: 'Datos', path: '/perfil/datos' },
    { label: 'Servicios', path: '/perfil/servicios' },
    { label: 'Calificaciones', path: '/perfil/calificaciones' },
  ]

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Avatar
          alt="Foto de perfil"
          src="/aca-va-la-ruta-de-la-foto-pendejoooooooooooooooo.jpg"
          sx={{ width: 80, height: 80, mb: 1 }}
        />

        <ButtonGroup
          variant="text"
          color="primary"
          sx={{ maxWidth: 300, width: '100%' }}
        >
          {botones.map(({ label, path }) => {
            const activo = location.pathname === path
            return (
              <Button
                key={label}
                onClick={() => navigate(path)}
                sx={{
                  flex: 1,
                  textTransform: 'none',
                  fontWeight: activo ? 'bold' : 'normal',
                  textDecoration: activo ? 'underline' : 'none',
                  color: activo ? 'primary.main' : 'inherit',
                }}
              >
                {label}
              </Button>
            )
          })}
        </ButtonGroup>
        <Outlet />
      </Box>
    </>
  )
}
