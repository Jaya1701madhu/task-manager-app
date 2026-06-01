import axios from "axios";

const API = axios.create({
  baseURL: "https://task-manager-app-chl9.onrender.com/",
});

export default API;
