import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import { Outlet } from "react-router-dom";
import "./Components/Dashbord.css";
import cover from "./Assets/image44.jpg";

export default function Dashbord() {
  return (
    <div>
      <div>
        <img className="cover-log" src={cover} alt="im" />
      </div>

      <Topbar />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
