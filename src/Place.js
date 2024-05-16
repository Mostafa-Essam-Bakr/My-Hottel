
import Slider from "react-slick";

import im59 from "./Assets/image59.jpg"
import im60 from "./Assets/image60.jpg"
import im61 from "./Assets/image61.jpg"
import im62 from "./Assets/image62.jpg"
import im63 from "./Assets/image63.jpg"

import { Link } from "react-router-dom";
import Example from "./Lunch";
import "./Components/Book.css"
import cover from "./Assets/image64.jpg"
import IndividualIntervalsExample2 from "./Sliderbigimg";





import Footer from "./Components/Footer";
import im25 from "../src/Assets/image25.webp"

import im50 from "../src/Assets/image50.jpg"
import im51 from "../src/Assets/image51.jpg"
import im53 from "../src/Assets/image53.jpg"
import im54 from "../src/Assets/image54.jpg"
import im55 from "../src/Assets/image55.jpg"
import im56 from "../src/Assets/image56.jpg"
import im47 from "../src/Assets/p5.jpg"
import im48 from "../src/Assets/p6.jpg"
import im49 from "../src/Assets/p7.jpg"
import im44 from "../src/Assets/image44.jpg"


import Search from "./Components/Serach";



export default function Place(){




    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3
      };




     
    return(<div> 




        
<nav className="navhom" style={{ width:"100%",display:"flex",justifyContent:"space-around",alignItems:"center",color:"white",height:"50px",
    backgroundColor: " #283949"}}> <h1 className="logo" style={{color:"white"}}><i className="fa-solid fa-square-h fa-lg " style={{color:"white"}}></i>ome</h1>
<div className="pbook" style={{display:"flex" , flexDirection:"column" ,backgroundColor:"#283949"}}><Link to="/Book" className="h1 book s" >
      Book  <i className="fa-solid fa-square-caret-down"></i>
 
                  </Link>
    <ul className="bkslide">       

<Link id="RouterLink" to="/Hotel"> <li>Hotel</li></Link> 
<Link id="RouterLink" to="/Room"> <li>Room</li></Link> 
<Link id="RouterLink" to="/Place"> <li>place</li></Link>
    </ul>
</div>

<Example />
        
         
<Link to="/" className="h1 s" ><i className="fa-solid fa-arrow-right-from-bracket"></i> Go Home </Link>
</nav>

<img src={cover} className="cover c2" />


<div>
        <Slider {...settings} className="slick1">
         
          <div>
           
          <img src={im59}alt="im"/>

          </div>
          <div>
           
          <img src={im60}alt="im"/>


          </div>
          <div>
           
          <img src={im61}alt="im"/>


          </div>
          <div>
          
          <img src={im62}alt="im"/>

          </div>
          <div>
           
          < img src={im63}alt="im"/>


          </div>
         
        </Slider>
    </div>



  

<div>


<div>

 

</div>

<div className="bs bhot brom"><button className="b1 bhot1" type="submit">Book your place</button>
<button  className="b2 bhot2" type="submit" >Type Hotel</button></div>


<div>



</div>



<h1 className="discoverh1">DISCOVER OUR SUITES
</h1>

<div className=" discoverrom">
   
    <div><img src={im47} alt="im"/> <h4>Standard Room</h4><h5>Average size: 27 sqm / 290 sqft</h5> </div>
    <div><img src={im48} alt="im"/> <h4> Deluxe Room</h4> <h5>Average size: 30 sqm / 390 sqft</h5></div>
    <div><img src={im49} alt="im"/> <h4>Superior Room</h4><h5>Average size: 40 sqm / 490 sqft</h5> </div>

    
</div>











<div className="parent-servse">

<img src={im44} alt="im" className="cover-servse">


</img>



<div className="mother-img">



<div className="imgs"><img src={im50} alt="im"></img><h4>WE CLEAN EVERYDAY</h4>
Morbi leo risus, porta ac consectetur ac,
 vesti bulum at eros. Fusce dapibus,
 tellus ac cursus commodo,
  tortor mauris condimentum. </div>




<div className="imgs"><img src={im51} alt="im"></img><h4>FREE BREAKFAST</h4>
Morbi leo risus, porta ac consectetur ac,
 vesti bulum at eros. Fusce dapibus,
  tellus ac cursus commodo, 
  tortor mauris condimentum.</div>





<div className="imgs"><img src={im53} alt="im"></img><h4>ENJOY NIGHTLIFE</h4>
Morbi leo risus, porta ac consectetur ac, 
vesti bulum at eros. Fusce dapibus, 
tellus ac cursus commodo,
 tortor mauris condimentum.</div>


<div className="imgs"><img src={im54} alt="im"></img><h4>FREE BREAKFAST</h4>
Morbi leo risus,
 porta ac consectetur ac, 
vesti bulum at eros. Fusce dapibus,
 tellus ac cursus commodo,
 tortor mauris condimentum.</div>


<div className="imgs"><img src={im55} alt="im"></img><h4>MIDDLE OF DOWNTOWN</h4>
Morbi leo risus, porta ac consectetur ac,
 vesti bulum at eros.
  Fusce dapibus,
   tellus ac cursus commodo, 
  tortor mauris condimentum.</div>





  <div className="imgs"><img src={im56} alt="im"></img><h4>MEET NEW PEOPLE</h4>
Morbi leo risus, porta ac consectetur ac,
 vesti bulum at eros.
  Fusce dapibus,
   tellus ac cursus commodo, 
  tortor mauris condimentum.</div>
  </div>




</div>


<IndividualIntervalsExample2 />

<Search />

<Footer />



    </div>



















    </div>)
}























































   
   
   
   
   
   
   
   
   