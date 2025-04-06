import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box } from '@mui/material';
import L from 'leaflet';

const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
  shadowSize: [41, 41]
});

export default function MapSearch() {
  return (
    <Box sx={{ height: 250, width: '100%', borderRadius: 2, overflow: 'hidden' }}>
      <MapContainer
        center={[-34.6037, -58.3816]} // Coordenadas de Buenos Aires
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={[-34.6037, -58.3816]} icon={icon}>
          <Popup>
            Estás acá 🚀
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
}
