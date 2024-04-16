import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5173/",
  // baseURL: "http://35.172.204.227:8080/",

  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
