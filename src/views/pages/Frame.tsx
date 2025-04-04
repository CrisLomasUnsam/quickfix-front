import { Box } from '@mui/material'
import Footer from '../components/footer'
import Header from '../components/header'
import { Outlet } from 'react-router'

type FrameProps = {
  isClient: boolean
  children?: React.ReactNode
}

export default function Frame({ isClient }: FrameProps) {
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
      <Box sx={{ flexGrow: 1, padding: '1rem 0 1rem 0', overflowY: 'auto' }}>
        <Outlet />
      </Box>
      <Footer isClient={isClient} />
    </Box>
  )
}
