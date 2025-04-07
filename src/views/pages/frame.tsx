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
    <Box sx={styles.container}>
      <Header />
      <Box sx={styles.outletContainer}>
        <Outlet />
      </Box>
      <Footer isClient={isClient} />
    </Box>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    position: 'relative',
  },

  outletContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10vh 0 10vh 0',
    flex: '1',
  },
}
