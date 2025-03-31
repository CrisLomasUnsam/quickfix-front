import Box from '@mui/material/Box'

const headerContainer = {
  display: 'flex',
  backgroundColor: 'var(--primary-color)',
  height: '9vh',
  alignItems: 'center',
}

export default function Header() {
  return (
    <Box sx={headerContainer}>
      <img
        src="/img/Logo.png"
        style={{
          width: '110px',
          height: '55px',
        }}
      />
    </Box>
  )
}
