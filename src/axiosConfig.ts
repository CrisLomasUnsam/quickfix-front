import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'PEGAR_URL_BASE_AQUI',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Implementar interceptores para adicionar una firman a las solicitudes
// Ejemplo:
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = sessionStorage.getItem('token')
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

export default axiosInstance
