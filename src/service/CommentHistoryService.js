import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_HISTORY_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getCommentHistory(id) {
    return apiClient.get("/comHistory/" + id);
  },
};
