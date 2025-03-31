import { Box } from '@mui/material'
import Footer from '../components/footer'
import Header from '../components/header'
import { useState } from 'react'

export type PageNames = 'home' | 'service' | 'balance' | 'profile'

export default function Frame() {
  const [currentPage, setCurrentPage] = useState<PageNames>('home')
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <div>home</div>
      case 'service':
        return <div>service</div>
      case 'balance':
        return <div>balance</div>
      case 'profile':
        return <div>profile</div>
    }
  }

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
      {renderPage()}
      <Footer isClient={true} setCurrentPage={setCurrentPage} />
    </Box>
  )
}
