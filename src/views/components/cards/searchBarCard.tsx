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
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
    zIndex: '10',
    padding: '20px 0 20px 0',
  },

  input: {
    borderRadius: '10px',
    width: '80%',
    height: '50px',
  },
}
