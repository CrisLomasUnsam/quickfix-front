import { Box, ButtonBase, Typography } from '@mui/material'
import { useState } from 'react'
import ConstructionIcon from '@mui/icons-material/Construction'
import BuildIcon from '@mui/icons-material/Build'
import PlumbingIcon from '@mui/icons-material/Plumbing'
import CarpenterIcon from '@mui/icons-material/Carpenter'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import FormatPaintIcon from '@mui/icons-material/FormatPaint'
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices'
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt'
import SearchBarCard from '../components/containers/searchBarCard'

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

  const [searchTerm, setSearchTerm] = useState('')

  const filteredIconList = iconList.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Box sx={styles.container}>
      <SearchBarCard
        placeholder="Buscar servicio..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Box sx={styles.professionContainers}>
        {filteredIconList.map((item, index) => (
          <Box sx={styles.iconLabel}>
            <ButtonBase sx={styles.button} key={index}>
              {item.icon}
              <Typography>{item.label}</Typography>
            </ButtonBase>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

const styles = {
  container: {
    margin: '30px 0px 30px 0',
  },

  professionContainers: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '60px',
    margin: '30px 20px 20px 30px',
  },

  iconLabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid var(--primary-color)',
    borderRadius: '15px',
  },

  button: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '16px',
    fontFamily: 'Roboto',
    width: '100px',
    height: '100px',
    padding: '10px',
  },

  icon: {
    width: '50px',
    height: '60px',
  },
}
