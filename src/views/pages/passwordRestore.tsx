import { Box, Button, Typography } from '@mui/material'
import { FormContainer } from '../components/containers/formContainer'
import { Controller, useForm } from 'react-hook-form'
import { StyledTextFieldInput } from '../components/inputs/styledTextFieldInput'
import { useNavigate } from 'react-router'

export default function PasswordRestore() {
  type FormData = {
    email: string
    confirmEmail: string
  }

  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      confirmEmail: '',
    },
  })

  const email = watch('email')
  const confirmEmail = watch('confirmEmail')
  const emailsMatch = email === confirmEmail

  const onSubmit = (data: FormData) => {
    console.log(data)
    reset()
    navigate('/')
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <FormContainer>
        <Typography variant="h5" fontWeight={'bold'}>
          Recuperar Contraseña
        </Typography>
        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          onSubmit={handleSubmit(onSubmit)}
        >
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
            name="confirmEmail"
            control={control}
            rules={{
              required: 'confirmar email requerido',
              validate: (value) =>
                value === watch('email') || 'Los emails no coinciden',
            }}
            render={({ field }) => (
              <StyledTextFieldInput
                {...field}
                type="confirmEmail"
                label="Confirmar email"
                variant="outlined"
                error={!!errors.confirmEmail}
                helperText={errors.confirmEmail?.message}
                autoComplete="confirmEmail"
              />
            )}
          />
          <Button
            variant="contained"
            disabled={!emailsMatch || email === ''}
            type="submit"
          >
            Enviar mail de recuperación
          </Button>
        </form>
      </FormContainer>
    </Box>
  )
}
