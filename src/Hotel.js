import { Link } from "react-router-dom";
import Example from "./Lunch";
import "./Components/Book.css";
import cover from "./Assets/image41.jpg";
import IndividualIntervalsExample2 from "./Sliderbigimg";

import Footer from "./Components/Footer";
import im25 from "../src/Assets/image25.webp";

import im19 from "../src/Assets/image19.webp";
import im18 from "../src/Assets/image18.webp";
import im17 from "../src/Assets/image17.webp";
import im16 from "../src/Assets/image16.webp";
import im15 from "../src/Assets/image15.webp";
import im26 from "../src/Assets/image26.webp";
import im34 from "../src/Assets/image34.jpg";
import im35 from "../src/Assets/image35.jpg";
import im36 from "../src/Assets/image36.jpg";
import im42 from "../src/Assets/image42.jpg";

import Search from "./Components/Serach";

export default function Hotel() {
  return (
    <div>
      <nav
        className="navhom"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          color: "white",
          height: "50px",
          backgroundColor: " #283949",
        }}
      >
        {" "}
        <h1 className="logo" style={{ color: "white" }}>
          <i
            className="fa-solid fa-square-h fa-lg "
            style={{ color: "white" }}
          ></i>
          ome
        </h1>
        <div
          className="pbook"
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#283949",
          }}
        >
          <Link to="/Book" className="h1 book s">
            Book <i className="fa-solid fa-square-caret-down"></i>
          </Link>
          <ul className="bkslide">
            <Link id="RouterLink" to="/Hotel">
              {" "}
              <li>Hotel</li>
            </Link>
            <Link id="RouterLink" to="/Room">
              {" "}
              <li>Room</li>
            </Link>
            <Link id="RouterLink" to="/Place">
              {" "}
              <li>place</li>
            </Link>
          </ul>
        </div>
        <Example />
        <Link to="/" className="h1 s">
          <i className="fa-solid fa-arrow-right-from-bracket"></i> Go Home{" "}
        </Link>
      </nav>

      <img src={cover} className="cover c2" />

      <div
        className="imhed"
        style={{
          width: "100%",
          position: "relative",
          position: "relative",
          top: "-110px",
        }}
      >
        <h1 className="hhed">
          MAKE<br></br> YOUR SELF
          <br /> AT HOME
        </h1>{" "}
        <img
          className="imhed1"
          src={im34}
          alt="im "
          style={{ width: "100%" }}
        />{" "}
      </div>

      <div>
        <div></div>

        <div className="bs bhot">
          <button className="b1 bhot1" type="submit">
            Book your place
          </button>
          <button className="b2 bhot2" type="submit">
            Type Hotel
          </button>
        </div>

        <div></div>

        <h1 className="discoverh1">DISCOVER EXPERIENCE</h1>

        <div className="discover">
          <div>
            <img src={im35} alt="im" /> <h4>Nice welcom</h4>{" "}
          </div>
          <div>
            <img src={im36} alt="im" /> <h4> Art Break</h4>{" "}
          </div>
          <div>
            <img src={im42} alt="im" /> <h4>Day Spa</h4>{" "}
          </div>
        </div>

        <div className="parent-servse">
          <img src={im25} alt="im" className="cover-servse"></img>

          <div className="mother-img">
            <div className="imgs">
              <img src={im18} alt="im"></img>
              <h4>WE CLEAN EVERYDAY</h4>
              Morbi leo risus, porta ac consectetur ac, vesti bulum at eros.
              Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum.{" "}
            </div>

            <div className="imgs">
              <img src={im19} alt="im"></img>
              <h4>FREE BREAKFAST</h4>
              Morbi leo risus, porta ac consectetur ac, vesti bulum at eros.
              Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum.
            </div>

            <div className="imgs">
              <img src={im17} alt="im"></img>
              <h4>ENJOY NIGHTLIFE</h4>
              Morbi leo risus, porta ac consectetur ac, vesti bulum at eros.
              Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum.
            </div>

            <div className="imgs">
              <img src={im16} alt="im"></img>
              <h4>FREE BREAKFAST</h4>
              Morbi leo risus, porta ac consectetur ac, vesti bulum at eros.
              Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum.
            </div>

            <div className="imgs">
              <img src={im15} alt="im"></img>
              <h4>MIDDLE OF DOWNTOWN</h4>
              Morbi leo risus, porta ac consectetur ac, vesti bulum at eros.
              Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum.
            </div>

            <div className="imgs">
              <img src={im26} alt="im"></img>
              <h4>MEET NEW PEOPLE</h4>
              Morbi leo risus, porta ac consectetur ac, vesti bulum at eros.
              Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum.
            </div>
          </div>
        </div>

        <IndividualIntervalsExample2 />

        <Search />

        <Footer />
      </div>
    </div>
  );
}
