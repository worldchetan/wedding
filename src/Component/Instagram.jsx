import instaa from "../Assets/insta.png";
// import two from "../Assets/two.jpg";
// import three from "../Assets/three.jpg";
// import one from "../Assets/one.jpg";
// import four from "../Assets/four.jpg";
// import five from "../Assets/five.webp";
// import six from "../Assets/six.webp";
// import seven from "../Assets/seven.jpg";
import fb from "../Assets/fb.png";
import { Link } from "react-router-dom";
// import getInsta from "../service/getInsta";
import { useEffect, useState } from "react";
export const Instagram = () => {
  const [insta, setInsta] = useState({});
  const [data, setData] = useState([]);

  const getInstaa = async () => {
    try {
      // const result = await getInsta();
      const result = {
        heading: "Wedding Photography",
        insta_imges: [
          {
            img_name: "one",
            img_insta_url: "one.jpg",
          },
          {
            img_name: "one",
            img_insta_url: "two.jpg",
          },
          {
            img_name: "one",
            img_insta_url: "three.jpg",
          },
          {
            img_name: "one",
            img_insta_url: "four.jpg",
          },
          {
            img_name: "one",
            img_insta_url: "five.webp",
          },
          {
            img_name: "one",
            img_insta_url: "six.webp",
          },
          {
            img_name: "one",
            img_insta_url: "seven.jpg",
          },
        ],
      };
      // console.log("getInsta", result);
      // console.log(result?.data?.intsa_details?.insta_imges);
      setInsta(result);
      setData(result?.insta_imges);
    } catch (error) {
      console.log("getInsta error ", error);
    }
  };
  useEffect(() => {
    getInstaa();
  }, []);
  return (
    <div>
      <div className="insa">
        {/* <h1 className="text-center textfive">{insta.heading}</h1> */}
        <h2 className="text-center test">See us on Instagram</h2>
        <div className="ins">
          <img src={insta} alt="" className="text-center" />
          <h5 className="text-center abo">
            <a
              className="checkk"
              href="https://www.instagram.com/nilesh_cinematographer_jalgaon?igsh=MTJxeGhvMzBzN2tmbg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instaa} alt="" />
              {""} nilesh_cinematographer_jalgaon{" "}
            </a>
          </h5>
        </div>
        <div>
          {data.map((detl, index) => {
            return (
              <div className="card" key={index}>
                <img
                  src={`./..//src/Assets/${detl.img_insta_url}`}
                  alt="insta images"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="insta">
        <a
          className="fb"
          href="https://www.facebook.com/profile.php?id=100009447008329&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fb} alt="" />
          Facebook
        </a>
        <a
          className="io"
          href="https://www.instagram.com/nilesh_cinematographer_jalgaon?igsh=MTJxeGhvMzBzN2tmbg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instaa} alt="" />
          Instagram
        </a>
      </div>

      <br />
      <div className="ins">
        {/* <img src={insta} alt="" className="text-center"  /> */}
        <h5 className="text-center abo ">
          We’re excited to hear from you and start the journey of becoming your
          wedding photographers!{" "}
        </h5>
      </div>

      <Link className="btn cont" to="/contact">
        lets book
      </Link>
      <hr />
    </div>
  );
};
