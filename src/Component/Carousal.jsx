import sli4 from "../Assets/sli4.webp";
import sli5 from "../Assets/sli5.webp";
import sli6 from "../Assets/sli6.webp";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg"

export const Carousal = () => {
  return (
    <div>
      <div className="Carousel4e">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* <div className="carousel-item active">
              <img src={sli4} alt="Slide 1" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={sli5} alt="Slide 2" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={sli6} alt="Slide 3" className="d-block w-100" />
            </div> */}
            <div className="carousel-item active" >
              <img src={img2} alt="Slide 3" className="d-block w-100" />
            </div>
            <div className="carousel-item " >
              <img src={img3} alt="Slide 3" className="d-block w-100" />
            </div>
            
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
      <a className="btn" href="">
        Get in Touch
      </a>
    </div>
  );
};
