import { Box, ButtonBase, InputAdornment, OutlinedInput } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ConstructionIcon from '@mui/icons-material/Construction'
import BuildIcon from '@mui/icons-material/Build'
import PlumbingIcon from '@mui/icons-material/Plumbing'
import CarpenterIcon from '@mui/icons-material/Carpenter'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import FormatPaintIcon from '@mui/icons-material/FormatPaint'
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices'
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt'

export default function CustomerHome() {
  const iconList = [
    { icon: <ConstructionIcon sx={styles.icon} />, label: 'Albañil' },
    { icon: <BuildIcon sx={styles.icon} />, label: 'Mecanico' },
    { icon: <PlumbingIcon sx={styles.icon} />, label: 'Plomero' },
    { icon: <CarpenterIcon sx={styles.icon} />, label: 'Carpintero' },
    { icon: <DesignServicesIcon sx={styles.icon} />, label: 'Arquitecto' },
    { icon: <FormatPaintIcon sx={styles.icon} />, label: 'Pintor' },
    {
      icon: <ElectricalServicesIcon sx={styles.icon} />,
      label: 'Electricista',
    },
    { icon: <PsychologyAltIcon sx={styles.icon} />, label: 'Otro' },
  ]
  return (
    <Box>
      <Box sx={styles.searchBar}>
        <OutlinedInput
          sx={{
            ...styles.input,
          }}
          placeholder="buscar servicios..."
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </Box>
      <Box sx={styles.professionContainers}>
        {iconList.map((item, index) => (
          <Box sx={styles.iconLabel}>
            <ButtonBase sx={styles.iconButton} key={index}>
              {item.icon}
            </ButtonBase>
            <Box>{item.label}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

const styles = {
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0px 20px 0',
  },

  input: {
    borderRadius: '10px',
    width: '80%',
    height: '50px',
  },

  professionContainers: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '80px',
    margin: '0 20px 0 20px',
  },

  iconLabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  iconButton: {
    width: '80px',
    height: '80px',
  },

  icon: {
    width: '50px',
    height: '50px',
  },
}
