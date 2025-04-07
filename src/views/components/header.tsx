import Box from '@mui/material/Box'

export default function Header() {
  return (
    <Box sx={styles.headerContainer}>
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

const styles = {
  headerContainer: {
    display: 'flex',
    backgroundColor: 'var(--primary-color)',
    height: '9vh',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    zIndex: '2',
  },
}
