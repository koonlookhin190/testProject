import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_PATIENT_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPatients(page, perPage) {
    return apiClient.get('/people?_page=' + page + '&_limit=' + perPage)
  },
  getPatient(id) {
    return apiClient.get('/people/' + id)
  }
}
