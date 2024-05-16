import SignUp from "./Components/Sign up";
import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Components/Home.css";
import "./all.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Routes, Route } from "react-router-dom";
import Dashbord from "./Dashbord";
import Home from "./Home";
import Users from "./Components/Users";
import Updateuser from "./Updateuser";
import Create from "./Create";
import Setings from "./Setings";
import Book from "./Components/Book";
import Hotel from "./Hotel";
import Room from "./Room";
import Place from "./Place";
import Productadmin from "./Components/Products/Productadmin";
import Newproduct from "./Components/Products/Newproduct";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<SignUp />} />

        <Route path="/Login" element={<Login />} />

        <Route path="/Dashbord" element={<Dashbord />}>
          <Route path="Users" element={<Users />} />
          <Route path="Create" element={<Create />} />
          <Route path="Setings" element={<Setings />} />
          <Route path="Productadmin" element={<Productadmin />} />
          <Route path="Newproduct" element={<Newproduct />} />

          <Route path="Users/:id" element={<Updateuser />} />
        </Route>

        <Route path="Hotel" element={<Hotel />} />
        <Route path="Room" element={<Room />} />
        <Route path="Place" element={<Place />} />

        <Route path="Book" element={<Book />} />
      </Routes>
    </div>
  );
}

/*                                        صفحه جديد بأسم Alldata               
export function Data(props){
  return <div><h1>{props.name}</h1></div>
}
*/

/*                                              صفحه تابعه ل Alldata 
                            تستخدم هذه الصفح ل جلب بيانات من خلال الباك اند داخل الموقع

import  { useEffect, useState } from "react";
import { Data } from "./Components/Alldata";

export default function App(){

  const[data,setData]=useState([])

const dataShow= data.map((e,index)=> <Data name={e} key={index} />)


useEffect(()=>{
  fetch("https://www.balldontlie.io/api/v1/teams")
  .then((res)=> res.json())
  .then((data) =>setData(data.data.map((e)=> e.name)))
},[])



return(<div>{dataShow}</div> )

}
*/
