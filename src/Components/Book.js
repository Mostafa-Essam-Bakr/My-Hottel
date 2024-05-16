import { useState } from "react";
import img36 from "../Assets/image36.jpg";
import { Link } from "react-router-dom";
import Example from "../Lunch";
import Form from "react-bootstrap/Form";

import Spinner from "react-bootstrap/Spinner";

export default function Book() {
  const [cong, Setcong] = useState(true);

  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [Date, SetData] = useState("");
  const [City, SetCity] = useState("");

  const [accept, SetAccept] = useState(false);
  const [EmailErr, SetEmailerr] = useState("");

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    SetAccept(true);
    if (name === "" || Date === "") {
      flag = false;
    } else if ((flag = true)) {
      Setcong(false);
    }
  }

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
      <div>
        <img className="cover-log" src={img36} alt="im" />
      </div>
      <div
        className="congra"
        style={{ display: `${cong === false ? "block" : "none"}` }}
      >
        <h1>Congratulations {name}</h1>

        <h2>the {City} city has been booked successfully</h2>
        <h2>We wish you a happy trip on {Date}</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <i
            style={{ color: " #06ff06", fontSize: "xxx-large" }}
            className="fa-solid fa-house-circle-check"
          ></i>
          <>
            <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
          </>
        </div>
      </div>
      <div
        className="pfrm1"
        style={{ display: `${cong === false ? "none" : "flex"}` }}
      >
        <form className="frm1" onSubmit={Submit}>
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            name="LastName"
            placeholder="Name"
            id="name"
            value={name}
            onChange={(e) => SetName(e.target.value)}
          />
          {name === "" && accept && (
            <p className="error">name is more than 3 char</p>
          )}

          <label htmlFor="email"> Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={email}
            required
            onChange={(e) => SetEmail(e.target.value)}
          />
          {accept && EmailErr === 422 && <p>email is allready taken</p>}

          <h4 style={{ color: "white", fontFamily: "fantasy" }}>
            Book in a country
          </h4>
          <Form.Select
            aria-label="Default select example"
            value={City}
            onChange={(e) => SetCity(e.target.value)}
          >
            <option>country</option>
            <option value="Italy">Italy</option>
            <option value="Brazil">Brazil</option>
            <option value="Canada">Canada </option>
            <option value="England">England</option>
            <option value="Germany">Germany</option>
            <option value="Dubai">Dubai</option>
            <option value="Paris">Paris</option>
            <option value="New York">New York</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Turkey">Turkey</option>
            <option value="Portugal">Portugal</option>
          </Form.Select>

          <label htmlFor="Date"> Book Date</label>
          <input
            type="Date"
            name="Date"
            placeholder="Date"
            id="Date"
            value={Date}
            required
            onChange={(e) => SetData(e.target.value)}
          />
          {Date === "" && accept && <p>Date is Emptey</p>}

          <button type="submit">Book</button>
        </form>
      </div>{" "}
    </div>
  );
}

/*import { useState } from "react";
import axios from "axios";

export default function SignUp (){


    const [name,SetName]=useState('')
    const [email,SetEmail]=useState('')
    const [password,SetPssword]=useState('')
    const [reppassword,SetReppassword]=useState('')
    const [accept,SetAccept]=useState(false)

   const [erremail,SetErremail]=useState("")

    async function Submit(e){
        let flag =true
        e.preventDefault();
        SetAccept(true)
        if (name === '' || password.length<=8 || reppassword !== password){
            flag=false
        }else flag=true;


  
try{
        if (flag){
         let res = await axios.post("http://127.0.0.1:8000/api/register",{
            name:name ,
            email: email,
            password: password,
            password_confirmtion:reppassword,
         });
         if (res.status === 204){
            window.localStorage.setItem("emaul",email)
            window.location.pathname = "/" ;
         }


        }} 
        catch (err){
            SetErremail(err.response.status );
        }
    }

    
    return (<div className="pfrm1">
        <form className="frm1" onSubmit={Submit}>

            <label htmlFor="name"> LastName </label>
            <input type="text" name="LastName" placeholder="LastName" id="name" value={name} 
                        onChange={(e) => SetName(e.target.value)}
            />
            {name === '' && accept &&  <p className="error">name is more than 3 char</p>}

            <label htmlFor="email"> Email</label>
            <input type="email" name="email" placeholder="Email" id="email"  value={email} required
                        onChange={(e) => SetEmail(e.target.value)}

            />

            {accept && erremail === 422 && <p>Email is been taken</p>}

            <label htmlFor="password">  Pass word</label>
            <input type="password" name="password" placeholder="Pass word" id="password" value={password}
                        onChange={(e) => SetPssword(e.target.value)}

            />
            {password.length<=8 &&accept && <p className="error">password motr than 8 char</p>}

            <label htmlFor="reppassword"> Repeat Pass word</label>
            <input type="password" name="password" placeholder="Repeat Pass word" id="reppassword" value={reppassword}
                        onChange={(e) => SetReppassword(e.target.value)}

            />
             {reppassword !== password && accept&& <p className="error">must similar password</p>}           

            <button type="submit">submit</button>
        </form>
    </div>)
} */
