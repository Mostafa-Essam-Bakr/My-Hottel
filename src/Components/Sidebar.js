import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="parent-side">
      <NavLink activeclassname="active" to="Users" className="side-bar">
        <i className="fa-solid fa-users"></i>Users
      </NavLink>
      <NavLink activeclassname="active" to="Create" className="side-bar">
        <i className="fa-solid fa-user-plus"></i> New Users
      </NavLink>
      <NavLink activeclassname="active" to="Setings" className="side-bar">
        <i className="fa-solid fa-gears"></i> Setings
      </NavLink>
      <NavLink activeclassname="active" to="Productadmin" className="side-bar">
        <i className="fa-solid fa-hotel"></i> Pruducts
      </NavLink>
      <NavLink activeclassname="active" to="Newproduct" className="side-bar">
        <i className="fa-solid fa-archway"></i> Newproduct
      </NavLink>
    </div>
  );
}
