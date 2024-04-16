import { AboutUs } from "./AboutUs";
import { Carousal } from "./Carousal";

import { Instagram } from "./Instagram";
import { Testo } from "./Testo";
import { Wraper } from "./Wraper";

export const Home = () => {
  return (
    <div>
      <Carousal />
      <Wraper />
      <AboutUs />
      <Instagram />
      <Testo />
    </div>
  );
};
