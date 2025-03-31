import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'
import { useNavigate } from 'react-router'

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

export default function Footer({ isClient }: { isClient: boolean }) {
  const navigate = useNavigate()

  return (
    <Box sx={footerContainer}>
      <IconButton aria-label="home" onClick={() => navigate('/home')}>
        <HomeOutlinedIcon sx={iconStyle} />
      </IconButton>
      <IconButton aria-label="service" onClick={() => navigate('/service')}>
        <Inventory2OutlinedIcon sx={{ ...iconStyle, fontSize: '35px' }} />
      </IconButton>
      {!isClient ? (
        <IconButton aria-label="balance" onClick={() => navigate('/balance')}>
          <AttachMoneyOutlinedIcon sx={iconStyle} />
        </IconButton>
      ) : (
        ''
      )}
      <IconButton aria-label="profile" onClick={() => navigate('/profile')}>
        <PersonOutlineIcon sx={iconStyle} />
      </IconButton>
    </Box>
  )
}
