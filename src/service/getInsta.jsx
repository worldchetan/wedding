import axios from "../utils/axios";

const getInsta = async () => {
  //   return await axios.get(`./../../importData.json`);
  return await axios.get("/importData.json");
};

export default getInsta;

