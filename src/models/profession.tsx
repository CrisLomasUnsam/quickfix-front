import ConstructionIcon from '@mui/icons-material/Construction'
import BuildIcon from '@mui/icons-material/Build'
import PlumbingIcon from '@mui/icons-material/Plumbing'
import CarpenterIcon from '@mui/icons-material/Carpenter'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import FormatPaintIcon from '@mui/icons-material/FormatPaint'
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices'
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt'
import { JSX } from 'react'

type Profession = {
  icon: JSX.Element
  label: string
}

const styles = {
  icon: {
    width: '50px',
    height: '60px',
  },
}

export const Professions : Profession[] =
  [
    { icon: <ConstructionIcon sx={styles.icon} />, label: 'Albañil' },
    { icon: <BuildIcon sx={styles.icon} />, label: 'Mecanico' },
    { icon: <PlumbingIcon sx={styles.icon} />, label: 'Plomero' },
    { icon: <CarpenterIcon sx={styles.icon} />, label: 'Carpintero' },
    { icon: <DesignServicesIcon sx={styles.icon} />, label: 'Arquitecto' },
    { icon: <FormatPaintIcon sx={styles.icon} />, label: 'Pintor' },
    { icon: <ElectricalServicesIcon sx={styles.icon} />, label: 'Electricista' },
    { icon: <PsychologyAltIcon sx={styles.icon} />, label: 'Otro' },
  ]