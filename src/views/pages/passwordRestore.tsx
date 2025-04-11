import { Box, Button, Typography } from '@mui/material'
import { FormContainer } from '../components/containers/formContainer'
import { Controller, useForm } from 'react-hook-form'
import { StyledTextFieldInput } from '../components/inputs/styledTextFieldInput'
import { useNavigate } from 'react-router'

export default function PasswordRestore() {
  type FormData = {
    mail: string
    confirmMail: string
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
      mail: '',
      confirmMail: '',
    },
  })

  const mail = watch('mail')
  const confirmMail = watch('confirmMail')
  const emailsMatch = mail === confirmMail

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
            name="confirmMail"
            control={control}
            rules={{
              required: 'confirmar mail requerido',
              validate: (value) =>
                value === watch('mail') || 'Los mails no coinciden',
            }}
            render={({ field }) => (
              <StyledTextFieldInput
                {...field}
                type="confirmMail"
                label="Confirmar mail"
                variant="outlined"
                error={!!errors.confirmMail}
                helperText={errors.confirmMail?.message}
                autoComplete="mail"
              />
            )}
          />
          <Button
            variant="contained"
            disabled={!emailsMatch || mail === ''}
            type="submit"
          >
            Enviar mail de recuperación
          </Button>
        </form>
      </FormContainer>
    </Box>
  )
}
