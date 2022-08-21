import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_PATIENT_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getPatients(page, perPage) {
    return apiClient.get("/people?_page=" + page + "&_limit=" + perPage);
  },
  getPatient(id) {
    return apiClient.get("/people/" + id);
  },
  getVaccine(id) {
    return apiClient.get("/vaccine/" + id);
  },
};
