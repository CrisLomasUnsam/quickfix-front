import { Box, InputAdornment, OutlinedInput } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

type props = {
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchBarCard({ placeholder, onChange }: props) {
  return (
    <Box sx={styles.searchBar}>
      <OutlinedInput
        sx={styles.input}
        placeholder={placeholder ? placeholder : 'buscar...'}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </Box>
  )
}

const styles = {
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    backgroundColor: 'white',
    zIndex: '10',
    width: '100%',
    height: '60px',
    top: '10vh',
  },

  input: {
    borderRadius: '10px',
    width: '80%',
    height: '50px',
  },
}
