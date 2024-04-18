// import two from "../Assets/two.jpg";
// import three from "../Assets/three.jpg";
// import one from "../Assets/one.jpg";
// import four from "../Assets/four.jpg";
// import five from "../Assets/five.webp";
// import six from "../Assets/six.webp";
// import seven from "../Assets/seven.jpg";
import { Link } from "react-router-dom";
// import sli2 from "../Assets/sli2.webp";
import getWarper from "../service/getWarper";
import { useState, useEffect } from "react";
export const Wraper = () => {
  const [head, setHead] = useState({});
  const [img, setImg] = useState([]);

  const getWarperr = async () => {
    try {
      const result = await getWarper();
      // console.log("getWarper", result);
      setHead(result?.data?.wraper);
      setImg(result?.data?.wraper?.warp_img);
    } catch (error) {
      console.log("getWarperr error", error);
    }
  };
  useEffect(() => {
    getWarperr();
  }, []);
  return (
    <div className="wraper">
      <span className="wrp">{head.heading}</span>
      {img.map((detl, index) => {
        return (
          <div className="card" key={index}>
            <img src={`/src/Assets/${detl.warp_img_url}`} alt="wraperImg" />
          </div>
        );
      })}

      {/* <div className="card">
        <img src={two} alt="" />
      </div>
      <div className="card">
        <img src={three} alt="" />
      </div>
      <div className="card">
        <img src={four} alt="" />
      </div>
      <div className="card">
        <img src={five} alt="" />
      </div>
      <div className="card">
        <img src={six} alt="" />
      </div>
      <div className="card">
        <img src={seven} alt="" />
      </div> */}
      <span>
        <Link className="check" to="./wedding">
          check our porfolio...{" "}
        </Link>
      </span>
      <hr />
    </div>
  );
};
