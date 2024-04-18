// import wedOne from "../Assets/wedOne.jpg";
// import wedTwo from "../Assets/wedTwo.jpg";
// import wedThr from "../Assets/wedThr.jpg";
// import wedFour from "../Assets/wedFour.jpg";
// import wedFive from "../Assets/wedFive.jpg";
// import wedSix from "../Assets/wedSix.jpg";
// import wedSeve from "../Assets/wedSeve.jpg";

export const WeddingCard = ({ img }) => {
  console.log(img);
  return (
    <div className="mt-4">
      {img.map((detl, index) => {
        return (
          <>
            {" "}
            <div className="" key={index}>
              <div className="card">
                <img src={`/src/Assets/${detl.wedd_img_url}`} alt="" />
              </div>
              {/* <h1 className="m-3 text-center ">{detl.title}</h1> */}
            </div>
          </>
        );
      })}

      {/* <div className="py-3">
        <div className="card">
          <img src={wedThr} alt="" />
        </div>
        <h1 className="m-3 text-center">
          The Authentic Indian Wedding at Penha Longa Of Nikita & Viren
        </h1>
      </div>
      <div className="py-3">
        <div className="card">
          <img src={wedFour} alt="" />
        </div>
        <h1 className="m-3 text-center">
          The Authentic Indian Wedding at Penha Longa Of Nikita & Viren
        </h1>
      </div>
      <div className="py-3">
        <div className="card">
          <img src={wedFive} alt="" />
        </div>
        <h1 className="m-3 text-center">
          The Authentic Indian Wedding at Penha Longa Of Nikita & Viren
        </h1>
      </div>
      <div className="py-3">
        <div className="card">
          <img src={wedSix} alt="" />
        </div>
        <h1 className="m-3 text-center">
          The Authentic Indian Wedding at Penha Longa Of Nikita & Viren
        </h1>
      </div>
      <div className="py-3">
        <div className="card">
          <img src={wedSeve} alt="" />
        </div>
        <h1 className="m-3 text-center">
          The Authentic Indian Wedding at Penha Longa Of Nikita & Viren
        </h1>
      </div> */}
    </div>
  );
};
