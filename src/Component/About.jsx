import about from "../Assets/about.jpg";
import { AbouutText } from "./AbouutText";
import { Instagram } from "./Instagram";
export const About = () => {
  return (
    <div>
      <div className="card mt-4">
        <img src={about} alt="" />
      </div>
      <AbouutText />
      <Instagram />
    </div>
  );
};
