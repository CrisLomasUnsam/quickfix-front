import { styled, TextField } from '@mui/material'

export const StyledTextFieldInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#fff',
    borderRadius: '10px',
    '&.Mui-focused fieldset': {
      borderRadius: '10px',
    },
    overflow: 'hidden',
  },

  '& .MuiFormHelperText-root.Mui-error': {
    backgroundColor: 'transparent',
    color: theme.palette.error.main,
  },
  '& .MuiFormHelperText-root': {
    backgroundColor: 'transparent',
    marginRight: 0,
  },

  // Por si se quiere cambiar el color del texto del input deshabilitado
  '& .MuiOutlinedInput-root.Mui-disabled': {
    backgroundColor: '#f6f8fc', // más contraste? ajutar
    color: '#6b7280',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ccc',
    },
    '& input.Mui-disabled': {
      WebkitTextFillColor: '#6b7280',
    },
  },
}))
