import Carousel from 'react-bootstrap/Carousel';

import img20 from "./Assets/image20.webp"
import img21 from "./Assets/image21.webp"
import img22 from "./Assets/image22.webp"
import img23 from "./Assets/image23.webp"
import img24 from "./Assets/image24.webp"
import img26 from "./Assets/image26.webp"
import img27 from "./Assets/image27.webp"
import img28 from "./Assets/image28.jpg"
import img29 from "./Assets/image29.jpg"





function IndividualIntervalsExample2() {
  return (
    <div className='slids2'>        <h1 style={{position:"relative",color:"white",
top:"20px",
textAlign:"center"}}
    
    
    
    
    
    >DORMS & PRIVATE ROOMS</h1>

    <div className='patrent-slids'>
    <Carousel className='slidimg1'>
      
<Carousel.Item interval={3000} className='borderslid'>
      < img src={img20} style={{width:"300px" , height:"200px"}}/>
        <Carousel.Caption>
          <h3></h3>
          <p>E</p>
        </Carousel.Caption>
      </Carousel.Item>  

      <Carousel.Item interval={3000}>
        < img src={img21} style={{width:"300px" , height:"200px"}}/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>



    <Carousel className='slidimg1'>
<Carousel.Item interval={3000}>
      < img src={img22} style={{width:"300px" , height:"200px"}}/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>  

      <Carousel.Item interval={3000}>
        < img src={img23} style={{width:"300px" , height:"200px"}}/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>



    <Carousel className='slidimg1'>
<Carousel.Item interval={3000}>
      < img src={img29} style={{width:"300px" , height:"200px"}}/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>  

      <Carousel.Item interval={3000}>
        < img src={img24} style={{width:"300px" , height:"200px"}}/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>






    <Carousel className='slidimg1'>
<Carousel.Item interval={3000}>
      < img src={img27} style={{width:"300px" , height:"200px"}}/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>  

      <Carousel.Item interval={3000}>
        < img src={img28} style={{width:"300px" , height:"200px"}}/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
    </div>
    );
}

export default IndividualIntervalsExample2;