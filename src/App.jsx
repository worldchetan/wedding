import { Route, Routes } from "react-router-dom";
import { Home } from "./Component/Home";
import { About } from "./Component/About";
import { Client } from "./Component/Client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { Navbar } from "./Component/Navbar";
import { Foll } from "./Component/Foll";
import { Faq } from "./Component/Faq";
import { Contact } from "./Component/Contact";
import { Wedding } from "./Component/Wedding";
import {Engagement} from "./Component/Engagement"
import { Matenity } from "./Component/Matenity";
// import LocomotiveScroll from "locomotive-scroll";

function App() {
  // eslint-disable-next-line no-use-before-define
  // const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/client" element={<Client />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/wedding" element={<Wedding/>} />
        <Route path="/engagement" element={<Engagement/>} />
        <Route path="/matenity" element={<Matenity/>}/>
   
      </Routes>
      <Foll />
    </>
  );
}

export default App;
