import { Link } from "react-router-dom";
// import logo from "../Assets/logo.png";
import nil from "../Assets/nil.png";
// import Logoo from "../Assets/Logoo.webp";
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark  " id="headerNav">
        <div className="container-fluid">
          <Link className="navbar-brand d-block d-lg-none " to="/">
            <img src={nil} style={{ height: "68px" }} alt="camera" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <Link
                  className="nav-link mx-2 active"
                  aria-current="page"
                  to="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link mx-2 dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PORFOLIO
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/wedding">
                      WEDDING
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/engagement">
                      ENGAGEMENT
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/matenity">
                      FAMILY & MATERNITY SESSIONS
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link mx-2" to="#">
                  BLOG
                </Link>
              </li> */}
              <li className="nav-item d-none d-lg-block">
                <Link className="nav-link mx-2" to="#">
                  {/* <img src={logo} alt="camera" /> */}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/faq">
                  FAQ
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link mx-2" to="/client">
                  CLIENTS
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
