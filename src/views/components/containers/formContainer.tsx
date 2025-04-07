import { Container, styled } from '@mui/material'

export const FormContainer = styled(Container)(() => ({
    display: 'flex',
    border: '1px solid #000',
    borderRadius: '20px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '100%',
    width: '93vw',
    backgroundColor: 'var(--background-color)',
    gap: '1rem',
    padding: '1rem',
    overflowY: 'auto',
    overflowX: 'hidden',
  }))
