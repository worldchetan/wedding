import axios from "../utils/axios";

const getLevelTwo = async () => {
  //   return await axios.get(`./../../importData.json`);
  return await axios.get("/importData.json");
};

export default getLevelTwo;

