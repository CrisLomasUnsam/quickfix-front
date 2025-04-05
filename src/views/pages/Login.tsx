import { FormContainer } from '../components/containers/FormContainer'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import { Link as MuiLink } from '@mui/material'
import { Link as RouterLink } from 'react-router'
import { Controller, useForm } from 'react-hook-form'
import { StyledTextFieldInput } from '../components/inputs/StyledTextFieldInput'

export default function Login() {
  type FormData = {
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
          <Typography>Soy cliente | Soy profesional</Typography>

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
        <MuiLink>¿Olvidaste tu constraseña?</MuiLink>
        <MuiLink component={RouterLink} to="/userSelect">
          Registarse
        </MuiLink>
      </FormContainer>
    </Box>
  )
}
