import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5173/",
  baseURL:
    "https://6620149cbabda82b9a90f79d--marvelous-kulfi-a15ea3.netlify.app/",
});

export default instance;
