import insta from "../Assets/insta.png";
// import two from "../Assets/two.jpg";
// import three from "../Assets/three.jpg";
// import one from "../Assets/one.jpg";
// import four from "../Assets/four.jpg";
// import five from "../Assets/five.webp";
// import six from "../Assets/six.webp";
// import seven from "../Assets/seven.jpg";
import fb from "../Assets/fb.png";
import { Link } from "react-router-dom";
import getInsta from "../service/getInsta";
import { useEffect, useState } from "react";
export const Instagram = () => {
  const [insta, setInsta] = useState({});
  const [data, setData] = useState([]);

  const getInstaa = async () => {
    try {
      const result = await getInsta();
      console.log("getInsta", result);
      console.log(result?.data?.intsa_details?.insta_imges);
      setInsta(result?.data?.intsa_details);
      setData(result?.data?.intsa_details?.insta_imges);
    } catch (error) {
      console.log("getInsta error ", error);
    }
  };
  useEffect(() => {
    getInstaa();
  }, []);
  return (
    <div>
      <h1 className="text-center textfive">{insta.heading}</h1>
      <h2 className="text-center">See us on Instagram</h2>
      <div className="ins">
        <img src={insta} alt="" className="text-center" />
        <h5 className="text-center abo">Wedding Photography </h5>
      </div>

      <div>
        {data.map((detl, index) => {
          return (
            <div className="card" key={index}>
              <img src={detl.img_insta_url} alt="insta images" />
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
      </div>
      <div className="insta">
        <span className="fb">
          <img src={fb} alt="" />
          Facebook
        </span>
        <span className="io">
          <img src={insta} alt="" />
          Instagram
        </span>
      </div>

      <br />
      <div className="ins">
        <img src={insta} alt="" className="text-center" />
        <h5 className="text-center abo">Wedding Photography </h5>
      </div>

      <Link className="btn" to="/contact">
        lets book
      </Link>
      <hr />
    </div>
  );
};
