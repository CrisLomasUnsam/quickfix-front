import { Box, Button, OutlinedInput, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'

export default function RequestServicePage() {
  const { label } = useParams()
  const navigate = useNavigate()

  type FormData = {
    description: string
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormData>({
    defaultValues: {
      description: '',
    },
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    reset()
    navigate('/client/home')
  }

  return (
    <Box sx={styles.container}>
      <Typography variant="h6" fontWeight={'bold'}>
        Servicio:
      </Typography>
      <Typography sx={styles.service_container}>
        {label ? label : 'Service'}
      </Typography>
      <Typography>Detalle su necesidad:</Typography>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100vw',
          padding: '0 1rem 0 1rem',
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="description"
          control={control}
          rules={{
            required: 'descripcion requerida',
          }}
          render={({ field }) => (
            <OutlinedInput
              sx={styles.input_container}
              {...field}
              multiline
              minRows={8}
              maxRows={8}
              type="description"
              placeholder="Ayude a los profesionales a entender mejor su problema"
              autoComplete="description"
            />
          )}
        />
        <Button variant="contained" type="submit" disabled={!isValid}>
          Buscar profesionales
        </Button>
      </form>
    </Box>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    width: '100vw',
  },

  service_container: {
    display: 'flex',
    height: '60px',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'var(--background-color)',
    border: '1px solid var(--primary-color)',
    borderRadius: '15px',
    marginBottom: '20px',
  },

  input_container: {
    display: 'flex',
    height: '200px',
    width: '100%',
  },
}
