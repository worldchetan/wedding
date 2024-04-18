import axios from "../utils/axios";

const getWedd = async () => {
  return await axios.get("/importData.json");
};

export default getWedd;
