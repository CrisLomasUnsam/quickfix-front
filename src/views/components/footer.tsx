import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'
import { PageNames } from '../pages/Frame'

const footerContainer = {
  display: 'flex',
  backgroundColor: 'var(--primary-color)',
  height: '9vh',
  justifyContent: 'space-around',
  alignItems: 'center',
}

const iconStyle = {
  fontSize: '40px',
  color: 'white',
}

interface FooterProps {
  isClient: boolean
  setCurrentPage: (pageName: PageNames) => void
}

export default function Footer({ isClient, setCurrentPage }: FooterProps) {
  return (
    <Box sx={footerContainer}>
      <IconButton aria-label="home" onClick={() => setCurrentPage('home')}>
        <HomeOutlinedIcon sx={iconStyle} />
      </IconButton>
      <IconButton
        aria-label="service"
        onClick={() => setCurrentPage('service')}
      >
        <Inventory2OutlinedIcon sx={{ ...iconStyle, fontSize: '35px' }} />
      </IconButton>
      {!isClient && (
        <IconButton
          aria-label="balance"
          onClick={() => setCurrentPage('balance')}
        >
          <AttachMoneyOutlinedIcon sx={iconStyle} />
        </IconButton>
      )}
      <IconButton
        aria-label="profile"
        onClick={() => setCurrentPage('profile')}
      >
        <PersonOutlineIcon sx={iconStyle} />
      </IconButton>
    </Box>
  )
}
