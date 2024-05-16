import im1 from "./Assets/imge1.webp";
import im3 from "./Assets/imge3.webp";
import im4 from "./Assets/imge4.webp";
import im5 from "./Assets/imge5.webp";
import im6 from "./Assets/image6.webp";
import im7 from "./Assets/image7.webp";
import im8 from "./Assets/image8.webp";
import { useState } from "react";

export default function Pro() {
  const [color, Setcolor] = useState("white");

  const handelclick = () => {
    Setcolor("red");
  };

  return (
    <div
      className="parent-img"
      style={{ color: `${color === false ? "red" : "rgb(0 0 0 / 45%)"}` }}
      onClick={handelclick}
    >
      <div className="child-img" style={{ display: "flex", zIndex: "2" }}>
        <img src={im1} alt="1" />
        <i
          id="heart"
          className="fa-solid fa-heart "
          style={{ color: "rgb(0 0 0 / 45%)" }}
        ></i>
        <h3 className="book-now">Book now</h3>

        <h3 className="titel-pro">Canda</h3>
        <h4 className="night">
          <span>$300</span> Night{" "}
        </h4>
      </div>

      <div className="child-img" style={{ display: "flex", zIndex: "2" }}>
        <img src={im3} alt="1" />
        <i
          id="heart"
          className="fa-solid fa-heart"
          style={{ color: "rgb(0 0 0 / 45%)" }}
        ></i>
        <h3 className="book-now">Book now</h3>

        <h3 className="titel-pro">Brazil</h3>
        <h4 className="night">
          <span>$300</span> Night{" "}
        </h4>
      </div>

      <div className="child-img" style={{ display: "flex", zIndex: "2" }}>
        <img src={im4} alt="1" />
        <i
          id="heart"
          className="fa-solid fa-heart"
          style={{ color: "rgb(0 0 0 / 45%)" }}
        ></i>
        <h3 className="book-now">Book now</h3>

        <h3 className="titel-pro">Texes</h3>
        <h4 className="night">
          <span>$300</span> Night{" "}
        </h4>
      </div>

      <div className="child-img" style={{ display: "flex", zIndex: "2" }}>
        <img src={im5} alt="1" />
        <i
          id="heart"
          className="fa-solid fa-heart"
          style={{ color: "rgb(0 0 0 / 45%)" }}
        ></i>
        <h3 className="book-now">Book now</h3>

        <h3 className="titel-pro">Lond</h3>
        <h4 className="night">
          <span>$300</span> Night{" "}
        </h4>
      </div>

      <div className="child-img" style={{ display: "flex", zIndex: "2" }}>
        <img src={im6} alt="1" />
        <i
          id="heart"
          className="fa-solid fa-heart"
          style={{ color: "rgb(0 0 0 / 45%)" }}
        ></i>
        <h3 className="book-now">Book now</h3>

        <h3 className="titel-pro">Parise</h3>
        <h4 className="night">
          <span>$300</span> Night{" "}
        </h4>
      </div>

      <div className="child-img" style={{ display: "flex", zIndex: "2" }}>
        <img src={im7} alt="1" />
        <i
          id="heart"
          className="fa-solid fa-heart"
          style={{ color: "rgb(0 0 0 / 45%)" }}
        ></i>
        <h3 className="book-now">Book now</h3>

        <h3 className="titel-pro">Italian</h3>
        <h4 className="night">
          <span>$300</span> Night{" "}
        </h4>
      </div>

      <div className="child-img" style={{ display: "flex", zIndex: "2" }}>
        <img src={im8} alt="1" />
        <i
          id="heart"
          className="fa-solid fa-heart"
          style={{ color: "rgb(0 0 0 / 45%)" }}
        ></i>
        <h3 className="book-now">Book now</h3>

        <h3 className="titel-pro">Germ</h3>
        <h4 className="night">
          <span>$300</span> Night{" "}
        </h4>
      </div>
    </div>
  );
}
