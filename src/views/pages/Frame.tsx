import { Box } from '@mui/material'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Frame() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
      }}
    >
      <Header />
      <Footer isClient={true} />
    </Box>
  )
}
