import axios from "../utils/axios";

const getWarper = async () => {
  return await axios.get("/importData.json");
};

export default getWarper;
