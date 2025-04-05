import { FormContainer } from '../components/containers/FormContainer'
import Typography from '@mui/material/Typography'
import { Box, Button, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { Link as MuiLink } from '@mui/material'
import { Link as RouterLink } from 'react-router'
import { Controller, useForm } from 'react-hook-form'
import { StyledTextFieldInput } from '../components/inputs/StyledTextFieldInput'
import React from 'react'

export default function Login() {
  type FormData = {
    email: string
    password: string
  }

  const [userType, setUserType] = React.useState('null')

  const handleUserType = (
    event: React.MouseEvent<HTMLElement>,
    newUserType: string | null,
  ) => {
    if (newUserType !== null) {
      setUserType(newUserType)
    }
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    reset()
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <FormContainer>
        <Typography variant="h5" fontWeight={'bold'}>
          Iniciar sesión
        </Typography>
        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <ToggleButtonGroup
            value={userType}
            exclusive
            onChange={handleUserType}
            aria-label="text alignment"
          >
            <ToggleButton
              sx={styles.toggleButton}
              value="customer"
              aria-label="Cliente"
            >
              <Typography>Soy cliente</Typography>
            </ToggleButton>
            <ToggleButton
              sx={styles.toggleButton}
              value="profesional"
              aria-label="Professional"
            >
              <Typography>Soy profesional</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'email requerido',
            }}
            render={({ field }) => (
              <StyledTextFieldInput
                {...field}
                type="email"
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email?.message}
                autoComplete="email"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'contraseña requerido',
            }}
            render={({ field }) => (
              <StyledTextFieldInput
                {...field}
                type="password"
                label="Contraseña"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />
          <Button variant="contained" type="submit">
            Ingresar
          </Button>
        </form>
        <MuiLink sx={styles.link}>¿Olvidaste tu constraseña?</MuiLink>
        <MuiLink sx={styles.link} component={RouterLink} to="/userSelect">
          Registarse
        </MuiLink>
      </FormContainer>
    </Box>
  )
}

const styles = {
  toggleButton: {
    width: '150px',
    textTransform: 'none',
  },

  link: {
    color: 'black',
    textDecorationColor: 'black',
  },
}
