import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'
import ArrowBackIcon from '@mui/icons-material/ArrowBack' // Import Back Arrow icon
import { Link } from 'react-router'
import useLocationPublic from '../../hooks/useLocationPublic'

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
  isClient?: boolean
}

export default function Footer({ isClient }: FooterProps) {
  const { isPublicRoute } = useLocationPublic()
  return (
    <Box sx={footerContainer}>
      {isPublicRoute ? (
        <IconButton aria-label="back to login" component={Link} to="/">
          <ArrowBackIcon sx={iconStyle} />
        </IconButton>
      ) : (
        <>
          <IconButton
            aria-label="home"
            component={Link}
            to={isClient ? '/client/home' : '/pro/dashboard'}
          >
            <HomeOutlinedIcon sx={iconStyle} />
          </IconButton>
          <IconButton
            aria-label="service"
            component={Link}
            to={isClient ? '/client/service' : '/pro/service'}
          >
            <Inventory2OutlinedIcon sx={{ ...iconStyle, fontSize: '35px' }} />
          </IconButton>
          {!isClient && (
            <IconButton aria-label="balance" component={Link} to="/pro/balance">
              <AttachMoneyOutlinedIcon sx={iconStyle} />
            </IconButton>
          )}
          <IconButton
            aria-label="profile"
            component={Link}
            to={isClient ? '/client/profile' : '/pro/profile'}
          >
            <PersonOutlineIcon sx={iconStyle} />
          </IconButton>
        </>
      )}
    </Box>
  )
}
