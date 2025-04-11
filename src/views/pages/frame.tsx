import { Box, Grid } from '@mui/material'
import Footer from '../components/footer'
import Header from '../components/header'
import { Outlet } from 'react-router'

type FrameProps = {
  isClient: boolean
  children?: React.ReactNode
}

export default function Frame({ isClient }: FrameProps) {
  return (
    <>
      <Header />
      <Grid container spacing={3} sx={styles.container}>
        <Box sx={styles.outletContainer}>
          <Outlet />
        </Box>
        <Footer isClient={isClient} />
      </Grid>
    </>
  )
}

const styles = {
  container: {
    flexDirection: 'column',
    height: '100vh',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },

  outletContainer: {
    alingSelf: 'center',
    margin: '10vh 0 10vh 0',
    pading: '1rem',
    overflowY: 'auto',
  },
}
