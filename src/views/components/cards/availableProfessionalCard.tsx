import { Avatar, Box, Card, CardActionArea, SxProps, Theme, Typography } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified'
import StarIcon from '@mui/icons-material/Star'
import { AvailableProfessionalDto } from '../../../dto/professionalDtos/availableProfessionalDto'

type AvilableProfessionalCardProps = {
    professional : AvailableProfessionalDto
    selectProfessional: (professionalId : Number) => void
  }
  
  export default function AvailableProfessionalCard({ professional, selectProfessional }: AvilableProfessionalCardProps) {

    const { id, name, lastName, avatar, verified, price, averageRating, distance, estimatedInitTime, availability, hasVehicle } = professional
    
    const getFullName = () => name + " " + lastName

    const isAvailableNow = () => availability == 0

    const getAvailability = () => isAvailableNow()? "AHORA" : `En ${availability} minutos`

    const getAvailabilityStyle = () => isAvailableNow()? styles.availableNow : styles.availableLater


    return (
      <Card sx={{boxShadow: "none"}}>
        <CardActionArea sx={styles.cardContainer} onClick={()=> selectProfessional(id)}>

            {/* Imagen de perfil */}
            <Avatar variant="circular" sx={styles.avatar} src={avatar} alt={getFullName()}/>

            {/* Cuerpo de la card */}
            <Box sx={styles.infoContainer}>

                {/* Nombre, verificación y rating */}
                <Box sx={styles.headerInfo}>

                    {/* Nombre e ícono de verificación */}
                    <Box sx={styles.nameContainer}>
                        <Typography sx={styles.fullName}>{getFullName()}</Typography>
                        { verified && <VerifiedIcon sx={{color: "var(--primary-color)"}}/> }
                    </Box>

                    {/* Rating */}
                    <Box sx={styles.ratingContainer}>
                        <StarIcon/>
                        <Typography>{averageRating}</Typography>
                    </Box>
                
                </Box>

                {/* Precio */}
                <Typography sx={ styles.price }>${ price }</Typography>

                {/* Información de distancia */}
                <Box sx={ styles.distanceContainer }>
                    <Typography>A { distance }km</Typography>
                    <Typography>|</Typography>
                    <Typography>{ hasVehicle ? "En vehículo" : "A pie" }</Typography>
                    <Typography>|</Typography>
                    <Typography>{ estimatedInitTime }mins</Typography>
                </Box>

                {/* Información de disponibilidad horaria*/}
                <Box sx={ styles.availabilityContainer }>
                    <Typography>Disponible: </Typography>
                    <Typography sx={ getAvailabilityStyle() }> { getAvailability() } </Typography>
                </Box>

            </Box>
        </CardActionArea>
      </Card>
    )
  }

const styles : Record<string, SxProps<Theme>> = {

    cardContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: '#eee',
      width: "99%",
      height: "200px",
      padding: "15px 0",
      borderRadius: "10px",
      border: "solid 1px rgba(0,0,0,0.5)",
      alignSelf: "center",
      justifySelf: "center",
      gap: "15px"
    },
    avatar: {
        width: 60,
        height: 60,
        padding:"10px"
    },
    infoContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        gap: "10px",
        alignItems: "start",
        justifyContent: "space-between"
    },
    headerInfo: {
        display: "flex",
        flexDirection: "row",
        width: "100%"
    },
    nameContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        gap: "10px"
    },
    fullName: {
        fontSize: "1.2em"
    },
    ratingContainer: {
        display: "flex",
        alignItems: "center",
        padding: "10px"
    },
    price: {
        fontSize: "1.5em",
        fontWeight: "bold"
    },
    distanceContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "15px"
    },
    availabilityContainer: {
        width: "100%",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "flex-start",
        fontSize: "1.1em"
    },
    availableNow: {
        fontWeight: "bold",
        color: "#20A539"
    },
    availableLater: {
        fontWeight: "bold",
        color: "#FA1F1F"
    }
  }
  