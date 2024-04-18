// import { RiHeartFill } from "@remixicon/react";
import insta from "../Assets/insta.png";
import fb from "../Assets/fb.png";
export const Foll = () => {
  return (
    <div className="foll p-2">
      <h2 className="text-center text m-3">Follow us</h2>
      <div className="follw justify-content-center align-items-center mb-4">
        <a
          href="https://www.facebook.com/profile.php?id=100009447008329&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fb} alt="" />
        </a>
        <a
          href="https://www.instagram.com/nilesh_cinematographer_jalgaon?igsh=MTJxeGhvMzBzN2tmbg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={insta} alt="" />
        </a>
      </div>
    </div>
  );
};
