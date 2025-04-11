import { useState } from 'react'
import { FormContainer } from '../components/containers/formContainer'
import { Button, Typography, Checkbox, FormControlLabel } from '@mui/material'
import { Link as MuiLink } from '@mui/material'
import { Link as RouterLink } from 'react-router'
import Swal from 'sweetalert2'

const UserSelectionPage = () => {
  const [termsAccepted, setTermsAccepted] = useState(false)

  const terminos = () => {
    Swal.fire({
      title: 'Terminos y condiciones',
      text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'info',
    })
  }

  return (
    <FormContainer>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        Bienvenido a QuickFix
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
        }
        label={
          <Typography>
            Acepto los{' '}
            <MuiLink onClick={terminos}>Terminos y Condiciones </MuiLink>
          </Typography>
        }
      />

      <Button
        variant="contained"
        color="success"
        disabled={!termsAccepted}
        component={!termsAccepted ? 'button' : RouterLink}
        to="/register"
        sx={{ flex: 1, minWidth: '9rem', maxWidth: '12rem' }}
      >
        Continuar
      </Button>
    </FormContainer>
  )
}

export default UserSelectionPage
