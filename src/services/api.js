import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-wealth-wise.onrender.com",
});

export default api;
