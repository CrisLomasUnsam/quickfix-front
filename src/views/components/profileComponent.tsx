import { Box } from '@mui/material'
import { useForm } from 'react-hook-form'

export interface UserProfileData {
  name: string
  lastName: string
  birthDate: string
  dni: string
  genre: string
  email: string
  residence: string
}

const mockUserProfile: UserProfileData = {
  name: 'Juan',
  lastName: 'Pérez',
  birthDate: '1990-01-01',
  dni: '12345678',
  genre: 'Masculino',
  email: 'juanP@hotmail.com',
  residence: 'Calle Falsa 123',
}

function ProfileComponent() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<UserProfileData>({
    defaultValues: mockUserProfile,
    mode: 'onBlur',
  })

  const onSubmit = (data: UserProfileData) => {
    console.log('Datos actualizados:', data)
  }

  const handleModifyClick = () => {
    setIsEditing(true)
    reset(profileData) // Asegura que el form tenga los datos frescos al editar
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 2,
          position: 'relative',
          bottom: 0,
        }}
      >
        <div>HOLAAAA</div>
      </Box>
    </>
  )
}

export default ProfileComponent
