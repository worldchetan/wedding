import { useEffect, useState } from "react";
import getLevelTwo from "./../service/getTesto";

export const Testo = () => {
  const [test, setData] = useState({});
  const [info, setInfo] = useState([]);

  const getLevel2 = async () => {
    try {
      const result = await getLevelTwo();
      // console.log("getLevelTwo", result);
      // console.log(result.data?.testimonials);
      setData(result.data?.testimonials);
      setInfo(result?.data?.testimonials?.info);
    } catch (error) {
      console.log("getLevelTwo error :-", error);
    }
  };
  useEffect(() => {
    getLevel2();
  }, []);
  return (
    <div>
      <h2 className="text-center test">{test.heading}</h2>
      <div className="Carousel4e">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {info.map((detl, index) => {
              return (
                <>
                  <div className="carousel-item active" key={index}>
                    <div className="carousel-caption">
                      <p>{detl.client_review}</p>
                      <img className="img-fluid" src={detl.imgName} />
                      {/* <img src="../Assets/logo.png" /> */}
                      <div id="image-caption">{detl.client_name}</div>
                    </div>
                  </div>
                </>
              );
            })}

            {/* <div className="carousel-item">
              <div className="carousel-caption">
                <p>
                  If Shai Rezniks TDD videos dont convince you to add automated
                  testing your code, I dont know what will.This was the very
                  best explanation of frameworks for brginners that Ive ever
                  seen.
                </p>
                <img
                  src="https://i.imgur.com/QptVdsp.jpg"
                  className="img-fluid"
                />
                <div id="image-caption">Cromption Greves</div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-caption">
                <p>
                  If Shai Rezniks TDD videos dont convince you to add automated
                  testing your code, I dont know what will.This was the very
                  best explanation of frameworks for brginners that Ive ever
                  seen.
                </p>
                <img
                  src="https://i.imgur.com/jQWThIn.jpg"
                  className="img-fluid"
                />
                <div id="image-caption">Harry Mon</div>
              </div>
            </div> */}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};
