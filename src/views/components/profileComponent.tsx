import { useState, useEffect } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import {
  Box,
  Button,
  Grid,
  CircularProgress,
  Alert,
  MenuItem,
} from '@mui/material' // Añadido Select, etc.
import { StyledTextFieldInput } from './inputs/styledTextFieldInput'
import { Gender } from '../../utils/enums'

export type UserProfileData = {
  name: string
  lastName: string
  birthDate: string
  dni: string
  gender: string
  mail: string
  address: string
}
const initialMockData: UserProfileData = {
  name: 'Ana',
  lastName: 'García López',
  birthDate: '20-08-1990',
  dni: '12345678Z',
  gender: 'Femenino',
  mail: 'ana.garcia@email.com',
  address: 'Madrid, España',
}

const ProfileComponent = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [profileData, setProfileData] = useState<UserProfileData>(
    /* cargamos mock, recordar cambiar!! */ initialMockData,
  )

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm<UserProfileData>({
    defaultValues: profileData,
  })

  const genreOptions = Object.values(Gender)

  //momentaneo, refactorizar a un hook o algoque lo maneje mejor
  // Combinar con use o useQuery para cargar datos de perfil talvez?
  useEffect(() => {
    if(!isEditing) {
      reset(profileData)
    }
  }, [profileData, reset, isEditing])

  const handleModifyClick = () => {
    setIsEditing(true)
    reset(profileData)
  }

  const handleCancelClick = () => {
    setIsEditing(false)
    setError(null)
    reset(profileData)
  }

  const onSubmit: SubmitHandler<UserProfileData> = async (formData) => {
    setIsLoading(true)
    setError(null)

    const dataToSave: UserProfileData = {
      ...profileData, // Comienza con todos los datos actuales (incluye no editables!)
      // Sobrescribe solo los campos que *son* editables, de momento solo email, residence y genre
      gender: formData.gender, // Agregar mas generos?
      mail: formData.mail, // Por si lo pierde?
      address: formData.address, // se mudo?
    }

    console.log('Datos a guardar:', dataToSave)

    //Simulación de guardado de datos, poner animacion? toastify o una sweetalert?
    setTimeout(() => {
      setIsLoading(false)
      setIsEditing(false)
      setProfileData(dataToSave)
    }, 2000)
  }

  const renderField = (
    name: keyof UserProfileData,
    label: string,
    isEditableThisField: boolean,
    isRequired: boolean = false,
  ) => {
    const isDisabled = !isEditing || !isEditableThisField
    const fieldRules: {
      required?: string
      pattern?: { value: RegExp; message: string }
    } =
      isEditableThisField && isRequired
        ? { required: `${label} es requerido.` }
        : {}

    if (name === 'mail' && isEditableThisField) {
      fieldRules.pattern = {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Dirección de correo inválida',
      }
    }

    if (name === 'gender' && isEditableThisField) {
      return (
        <Controller
          name={name}
          control={control}
          rules={fieldRules}
          render={({ field, fieldState: { error } }) => (
            <StyledTextFieldInput
              {...field}
              select
              label={label}
              variant="outlined"
              fullWidth
              disabled={isDisabled}
              error={!!error}
              helperText={error ? error.message : undefined}
            >
              {genreOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </StyledTextFieldInput>
          )}
        />
      )
    }

    return (
      <Controller
        name={name}
        control={control}
        rules={fieldRules}
        render={({ field, fieldState: { error } }) => (
          <StyledTextFieldInput
            {...field}
            label={label}
            variant="outlined"
            fullWidth
            disabled={isDisabled}
            error={isEditableThisField && !!error}
            helperText={
              isEditableThisField && error ? error.message : undefined
            }
            value={isDisabled ? (profileData[name] ?? '') : (field.value ?? '')}
            type={name === 'birthDate' && isEditableThisField ? 'date' : 'text'}
            slotProps={{
              inputLabel: name === 'birthDate' ? { shrink: true } : {},
            }}
          />
        )}
      />
    )
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        height: 'auto',
        maxWidth: '93vw',
        padding: 3,
        borderTop: '1px solid black',
      }}
    >
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        {renderField('name', 'Nombre', false, true)}
        {renderField('lastName', 'Apellidos', false, true)}
        {renderField('birthDate', 'Fecha de Nacimiento', false)}
        {renderField('dni', 'DNI', false)}
        {renderField('gender', 'Género', true, true)}
        {renderField('mail', 'Correo Electrónico', true, true)}
        {renderField('address', 'Domicilio', true, true)}
      </Grid>

      <Box
        sx={{
          mt: 3,
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 2,
          position: 'sticky',
          bottom: '9vh',
        }}
      >
        {isEditing ? (
          <>
            <Button
              variant="contained"
              onClick={handleCancelClick}
              disabled={isLoading}
              sx={{ borderRadius: '30px', backgroundColor: '#3B56B0' }}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ borderRadius: '30px', backgroundColor: '#3B56B0' }}
              disabled={!isDirty || isLoading}
            >
              {isLoading ? <CircularProgress size={24} /> : 'Guardar Cambios'}
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            onClick={handleModifyClick}
            sx={{ borderRadius: '30px', backgroundColor: '#3B56B0' }}
          >
            Modificar Perfil
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default ProfileComponent
