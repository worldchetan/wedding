import { WeddingCard } from "./WeddingCard";
import getWedd from "../service/getWedd";
import { useEffect, useState } from "react";

export const Wedding = () => {
  const [head, setHead] = useState({});
  const [img, setImg] = useState([]);

  const getWedding = async () => {
    try {
      const result = await getWedd();
      console.log("getWeddings", result);
      console.log(result?.data?.wedding);
      setHead(result?.data?.wedding);
      setImg(result?.data?.wedding?.wedd_img);
    } catch (error) {
      console.log("getWarperr error", error);
    }
  };
  useEffect(() => {
    getWedding();
  }, []);
  return (
    <div>
      <h1 className="m-5 text">
        {head.heading}
        <hr />
      </h1>
      <WeddingCard img={img} />
      <hr />
    </div>
  );
};
