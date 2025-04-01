import { styled, TextField } from "@mui/material";

export const StyledTextFieldInput  = styled(TextField)(({ theme }) => ({
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
    }
  }));