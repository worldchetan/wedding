import two from "../Assets/two.jpg";
import three from "../Assets/three.jpg";
// import one from "../Assets/one.jpg";
import four from "../Assets/four.jpg";
import five from "../Assets/five.webp";
import six from "../Assets/six.webp";
import seven from "../Assets/seven.jpg";
import sli2 from "../Assets/sli2.webp";

export const Wraper = () => {
  return (
    <div>
      <h2>Love Stories</h2>

      <div className="card">
        <img src={sli2} alt="" />
      </div>
      <div className="card">
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
      </div>
      <h5 className="check">check our porfolio</h5>
      <hr />
    </div>
  );
};
