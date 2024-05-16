import { Link, NavLink } from "react-router-dom";
import Pro from "./Product";
import IndividualIntervalsExample from "./Sliderimg";
import IndividualIntervalsExample2 from "./Sliderbigimg";
import Example from "./Lunch";
import cover from "./Assets/image13.webp";

import "./Home.css";
import Footer from "./Components/Footer";
import im33 from "../src/Assets/image33.jpg";
import im37 from "../src/Assets/image37.jpg";
import im38 from "../src/Assets/image38.jpg";
import im39 from "../src/Assets/image39.jpg";
import im40 from "../src/Assets/image40.jpg";
import im42 from "../src/Assets/image422.jpg";
import im41 from "../src/Assets/image41.jpg";
import p1 from "../src/Assets/p1.jpg";
import p8 from "../src/Assets/p8.jpg";
import p9 from "../src/Assets/p9.jpg";
import p10 from "../src/Assets/p10.jpg";
import p11 from "../src/Assets/p11.jpg";
import p12 from "../src/Assets/p12.jpg";




import Search from "./Components/Serach";
export default function Home() {
  return (
    <div>
      <nav
        className="navhom"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          color: "white",
          height: "50px",
          backgroundColor: "#00000087",
        }}
      >
        {" "}
        <h1 className="logo">
          <i
            className="fa-solid fa-square-h fa-lg "
            style={{ color: "white" }}
          ></i>
          ome
        </h1>
        <div
          className="pbook"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Link to="./Book" className="h1 book">
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
        <Link to="/Dashbord" className="h1">
          {" "}
          <i className="fa-regular fa-user"></i> Admin{" "}
        </Link>
        <Link to="/Login" className="h1">
          <i className="fa-solid fa-arrow-right-from-bracket"></i> LOG OUT{" "}
        </Link>
      </nav>

      <div>
        {" "}
        <img src={cover} className="cover" />
      </div>

      <div>
        <IndividualIntervalsExample />
      </div>

      <div className="bs">
        <button className="b1" type="submit">
          <Link
            to="/Book"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "larger",
            }}
          >
            Book your place
          </Link>
        </button>
        <button className="b2" type="submit">
          <Link
            to="/Hotel"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "larger",
            }}
          >
            Type Hotel
          </Link>
        </button>
      </div>



<div className="parentcontener">

      <div className="contener">
<div className="box">

  <div className="face front">
  <img src={p1}alt="im"/>

  </div>


  <div className="face back">
  <img src={p8}alt="im"/>

  </div>

</div>
      </div>




      <div className="contener">
<div className="box">

  <div className="face front">
  <img src={p9}alt="im"/>

  </div>


  <div className="face back">
  <img src={p10}alt="im"/>

  </div>

</div>
      </div>





      <div className="contener">
<div className="box">

  <div className="face front">
  <img src={p11}alt="im"/>

  </div>


  <div className="face back">
  <img src={p12}alt="im"/>

  </div>

</div>
      </div>

      </div>








      

      <div>
        <Pro />
      </div>

      <div className="parent-servse">
        <img src={im41} alt="im" className="cover-servse"></img>
        <div className="mother-img">
          <div className="imgs">
            <img src={im33} alt="im"></img>
            <h4>WE CLEAN EVERYDAY</h4>
            Morbi leo risus, porta ac consectetur ac, vesti bulum at eros. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum.{" "}
          </div>

          <div className="imgs">
            <img src={im37} alt="im"></img>
            <h4>FREE BREAKFAST</h4>
            Morbi leo risus, porta ac consectetur ac, vesti bulum at eros. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum.
          </div>

          <div className="imgs">
            <img src={im38} alt="im"></img>
            <h4>ENJOY NIGHTLIFE</h4>
            Morbi leo risus, porta ac consectetur ac, vesti bulum at eros. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum.
          </div>

          <div className="imgs">
            <img src={im42} alt="im"></img>
            <h4>FREE BREAKFAST</h4>
            Morbi leo risus, porta ac consectetur ac, vesti bulum at eros. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum.
          </div>

          <div className="imgs">
            <img src={im40} alt="im"></img>
            <h4>MIDDLE OF DOWNTOWN</h4>
            Morbi leo risus, porta ac consectetur ac, vesti bulum at eros. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum.
          </div>

          <div className="imgs">
            <img src={im39} alt="im"></img>
            <h4>MEET NEW PEOPLE</h4>
            Morbi leo risus, porta ac consectetur ac, vesti bulum at eros. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum.
          </div>
        </div>
      </div>

      <IndividualIntervalsExample2 />

      <Search />

      <Footer />
    </div>
  );
}
