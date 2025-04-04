import axios from 'axios'
import { API_URL } from './constants'

const axiosClient = axios.create({
  baseURL: API_URL,
  headers:{
    "Content-Type": "application/json"
  }
})

export default axiosClient