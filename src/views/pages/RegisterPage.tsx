import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import dayjs from 'dayjs'
import { FormContainer } from '../components/containers/FormContainer'
import { StyledTextFieldInput } from '../components/inputs/StyledTextFieldInput'

function RegisterPage() {
  type FormData = {
    email: string
    password: string
    confirmPassword: string
    name: string
    lastName: string
    birthDate: string | null
    dni: string
    genre: string
    domicilio: string
  }

  enum Genero {
    Masculino = 'Masculino',
    Femenino = 'Femenino',
    Otro = 'Otro',
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      lastName: '',
      birthDate: null,
      dni: '',
      genre: '',
      domicilio: '',
    },
  })

  const password = watch('password')

  const onSubmit = (data: FormData) => {
    const formattedData = {
      ...data,
      birthDate: dayjs(data.birthDate).format('DD/MM/YYYY'),
    }
    console.log(formattedData)
    reset()
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormContainer>
            <Typography variant="h5" gutterBottom align="center">
              Registro
            </Typography>
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'El email es requerido.',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'El formato del email no es correcto.',
                },
              }}
              defaultValue=""
              render={({ field }) => (
                <StyledTextFieldInput
                  {...field}
                  type="email"
                  label="Email"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  fullWidth
                  autoComplete="email"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{
                required: 'La contraseña es requerida.',
                minLength: {
                  value: 6,
                  message: 'La contraseña debe tener al menos 6 caracteres.',
                },
              }}
              defaultValue=""
              render={({ field }) => (
                <StyledTextFieldInput
                  {...field}
                  type="password"
                  label="Contraseña"
                  variant="outlined"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  fullWidth
                  autoComplete="new-password"
                />
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: 'Se debe confirmar la contraseña.',
                validate: (value) =>
                  value === password || 'El password no coincide.',
              }}
              defaultValue=""
              render={({ field }) => (
                <StyledTextFieldInput
                  {...field}
                  type="password"
                  label="Confirmar contraseña"
                  variant="outlined"
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                  fullWidth
                  autoComplete="new-password"
                />
              )}
            />

            <Controller
              name="name"
              control={control}
              rules={{
                required: 'El nombre es requerido.',
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: 'El nombre solo puede contener letras.',
                },
              }}
              render={({ field }) => (
                <StyledTextFieldInput
                  {...field}
                  label="Nombre"
                  variant="outlined"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  fullWidth
                />
              )}
            />

            <Controller
              name="lastName"
              control={control}
              rules={{
                required: 'El apellido es requerido.',
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: 'El apellido solo puede contener letras.',
                },
              }}
              render={({ field }) => (
                <StyledTextFieldInput
                  {...field}
                  label="Apellido"
                  variant="outlined"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  fullWidth
                />
              )}
            />

            <Controller
              name="birthDate"
              control={control}
              rules={{
                required: 'La fecha de nacimiento es requerida',
                validate: (value) => {
                  const today = dayjs()
                  const birthDate = dayjs(value)
                  const age = today.diff(birthDate, 'year')
                  if (birthDate.isAfter(today)) {
                    return 'No puedes nacer en el futuro.'
                  }
                  if (age < 18) {
                    return 'Debe ser mayor de 18 años.'
                  }
                  return true
                },
              }}
              render={({ field }) => (
                <MobileDatePicker
                  {...field}
                  label="Fecha de nacimiento"
                  format="DD/MM/YYYY"
                  slotProps={{
                    textField: {
                      error: !!errors.birthDate,
                      helperText: errors.birthDate?.message,
                      sx: {
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#fff',
                          borderRadius: '10px',
                        },
                        '& .MuiFormHelperText-root.Mui-error': {
                          backgroundColor: 'transparent',
                        },
                      },
                      fullWidth: true,
                    },
                  }}
                />
              )}
            />

            <Controller
              name="dni"
              control={control}
              rules={{
                required: 'El DNI es requerido.',
                pattern: {
                  value: /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/,
                  message: 'El formato del DNI no es correcto.',
                },
              }}
              render={({ field }) => (
                <StyledTextFieldInput
                  {...field}
                  label="DNI"
                  type="number"
                  variant="outlined"
                  error={!!errors.dni}
                  helperText={errors.dni?.message}
                  fullWidth
                />
              )}
            />

            <FormControl fullWidth error={!!errors.genre}>
              <InputLabel id="genre-label">Genero</InputLabel>
              <Controller
                name="genre"
                control={control}
                rules={{
                  required: 'El género es requerido.',
                }}
                render={({ field }) => (
                  <Select
                    {...field}
                    labelId="genre-label"
                    label="Genero"
                    sx={{ backgroundColor: '#fff', borderRadius: '10px' }}
                  >
                    {Object.values(Genero).map((value) => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <FormHelperText>{errors.genre?.message}</FormHelperText>
            </FormControl>

            <Controller
              name="domicilio"
              control={control}
              rules={{
                required: 'El domicilio es requerido.',
              }}
              render={({ field }) => (
                <StyledTextFieldInput
                  {...field}
                  label="Domicilio"
                  variant="outlined"
                  error={!!errors.domicilio}
                  helperText={errors.domicilio?.message}
                  fullWidth
                />
              )}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ borderRadius: '30px', backgroundColor: '#3B56B0' }}
            >
              Register
            </Button>
          </FormContainer>
        </form>
      </LocalizationProvider>
    </>
  )
}

export default RegisterPage
