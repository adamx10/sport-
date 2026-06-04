import axios from "axios";

const api = axios.create({
  baseURL: "https://6a1eeb33b79eec0d6cf046ed.mockapi.io/X10/sports",
});

export default api;

