import { Box, ButtonBase, Typography } from '@mui/material'
import { useState } from 'react'
import SearchBarCard from '../components/searchBarCard'
import Professions from '../../models/professions'

export default function CustomerHome() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredIconList = Professions().filter((item) =>
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
}
