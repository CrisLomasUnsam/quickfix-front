import { FormContainer } from '../components/containers/FormContainer'
import Typography from '@mui/material/Typography'
import { Box, Button, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { Link as MuiLink } from '@mui/material'
import { Link as RouterLink } from 'react-router'
import { Controller, useForm } from 'react-hook-form'
import { StyledTextFieldInput } from '../components/inputs/StyledTextFieldInput'

export default function Login() {
  type FormData = {
    userType: string
    email: string
    password: string
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      userType: '',
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
          <Controller
            name="userType"
            control={control}
            rules={{ required: 'Selecciona un tipo de usuario' }}
            render={({ field }) => (
              <>
                <ToggleButtonGroup
                  value={field.value}
                  exclusive
                  onChange={(_, value) => {
                    if (value !== null) field.onChange(value)
                  }}
                  aria-label="Tipo de usuario"
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
                    aria-label="Profesional"
                  >
                    <Typography>Soy profesional</Typography>
                  </ToggleButton>
                </ToggleButtonGroup>
                {errors.userType && (
                  <Typography color="error" variant="caption">
                    {errors.userType.message}
                  </Typography>
                )}
              </>
            )}
          />
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
        <MuiLink sx={styles.link}>¿Olvidaste tu contraseña?</MuiLink>
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
