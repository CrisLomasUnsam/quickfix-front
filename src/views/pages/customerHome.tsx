import { Box, ButtonBase, Typography } from '@mui/material'
import { useState } from 'react'
import SearchBarCard from '../components/cards/searchBarCard'
import { Professions } from '../../models/profession'
import { Link as RouterLink } from 'react-router'

export default function CustomerHome() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredIconList = Professions.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <>
      <SearchBarCard
        placeholder="Buscar servicio..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Box sx={styles.professionContainers}>
        {filteredIconList.map((item, index) => (
          <Box sx={styles.iconLabel}>
            <ButtonBase
              sx={styles.button}
              key={index}
              component={RouterLink}
              to={`/client/requestService/${item.label}`}
            >
              {item.icon}
              <Typography>{item.label}</Typography>
            </ButtonBase>
          </Box>
        ))}
      </Box>
    </>
  )
}

const styles = {
  professionContainers: {
    display: 'flex',
    marginTop: '60px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '40px',
    paddingTop: '10px',
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
    width: '100px',
    height: '100px',
  },
}
