import { FormContainer } from '../components/containers/formContainer'
import Typography from '@mui/material/Typography'
import { Box, Button, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { Link as MuiLink } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router'
import { Controller, useForm } from 'react-hook-form'
import { StyledTextFieldInput } from '../components/inputs/styledTextFieldInput'
import { useAuth } from '../../hooks/useAuth'
import { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  type FormData = {
    userType: string
    mail: string
    password: string
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      userType: '',
      mail: '',
      password: '',
    },
  })

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  const onSubmit = (data: FormData) => {
    // Mock login
    const isClientLogin = data.userType === 'customer'
    const mockUserId = isClientLogin ? 1 : 2
    login(mockUserId, isClientLogin)

    console.log(data)

    if (isClientLogin) {
      navigate('/client/home') // Ruta para clientes
    } else {
      navigate('/pro/dashboard') // Ruta para profesionales
    }

    reset()
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <FormContainer>
        <Typography variant="h5" fontWeight={'bold'}>
          Iniciar sesión
        </Typography>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
          }}
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
                  sx={styles.toggleContainer}
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
            name="mail"
            control={control}
            rules={{
              required: 'mail requerido',
            }}
            render={({ field }) => (
              <StyledTextFieldInput
                {...field}
                type="mail"
                label="Mail"
                variant="outlined"
                error={!!errors.mail}
                helperText={errors.mail?.message}
                autoComplete="mail"
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
                type={showPassword ? 'text' : 'password'}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
                label="Contraseña"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />
          <Button
            sx={{
              flex: 1,
              alignSelf: 'center',
            }}
            variant="contained"
            disabled={!isValid}
            type="submit"
          >
            Ingresar
          </Button>
        </form>
        <MuiLink sx={styles.link} component={RouterLink} to="/passwordRestore">
          ¿Olvidaste tu contraseña?
        </MuiLink>
        <MuiLink sx={styles.link} component={RouterLink} to="/userSelect">
          Registarse
        </MuiLink>
      </FormContainer>
    </Box>
  )
}

const styles = {
  toggleContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  toggleButton: {
    width: '150px',
    textTransform: 'none',
  },

  link: {
    color: 'black',
    textDecorationColor: 'black',
  },
}
