import { Link } from "react-router-dom";
import Example from "./Lunch";
import "./Components/Book.css"
import cover from "./Assets/image52.jpg"
import IndividualIntervalsExample2 from "./Sliderbigimg";
import Carousel from 'react-bootstrap/Carousel';


import im43 from "../src/Assets/image43.jpg"
import im57 from "../src/Assets/image57.jpg"
import im58 from "../src/Assets/image58.jpg"



import Footer from "./Components/Footer";
import im25 from "../src/Assets/image25.webp"

import im50 from "../src/Assets/image50.jpg"
import im51 from "../src/Assets/image51.jpg"
import im53 from "../src/Assets/image53.jpg"
import im54 from "../src/Assets/image54.jpg"
import im55 from "../src/Assets/image55.jpg"
import im56 from "../src/Assets/image56.jpg"
import im47 from "../src/Assets/image47.jpg"
import im48 from "../src/Assets/image48.jpg"
import im49 from "../src/Assets/image49.jpg"
import im44 from "../src/Assets/image44.jpg"


import Search from "./Components/Serach";



export default function Room(){
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
<Carousel className='slidimg slidroom'>
<Carousel.Item interval={3000}>
      < img src={im43} style={{width:"100%" , height:"600px"}}/>
        <Carousel.Caption>
          <h3 className="h3room" >Suite Collection</h3>
          <p style={{
            fontSize:"larger"
          }}>At our airport hotel,
             we understand that travelers have unique preferences and needs.
             That's why we offer a variety of thoughtfully designed airport room types.
</p>
        </Carousel.Caption>
      </Carousel.Item>  

      <Carousel.Item interval={3000}>
        < img src={im57} style={{width:"100%" , height:"600px"}}/>
        <Carousel.Caption>
          <h3 className="h3room" >Culinary Excellence</h3>
          <p  style={{
            fontSize:"larger"
          }}>Our talented chefs meticulously prepare each dish,
             using the finest locally sourced ingredients to create culinary 
             masterpieces that delight the palate.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      < img src={im58} style={{width:"100%" , height:"600px"}}/>
        <Carousel.Caption>
          <h3 className="h3room" >A Variety of Treatments</h3>
          <p  style={{
            fontSize:"larger"
          }}>
         Our highly skilled and experienced therapists are dedicated to providing
          you with a personalized and transformative spa 
          experience.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
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