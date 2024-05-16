import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     


      <Button variant="primary" onClick={handleShow} className='h1 h.2 s' style={{height: "25px",
    display:" flex",
    justifyContent:" center",
    alignItems:" center",
    border:" none",
}}>
        
        <i className="fa-solid fa-bars"></i>
      </Button>












      <Offcanvas className="mo" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton style={{backgroundColor:"rgb(6 133 203)",borderRadius:"17px 17px 0 0 "}}>
          <Offcanvas.Title style={{color:"white", fontSize:"xx-large",display:"flex",alignItems:"center",gap:"60px"}}> <i className="fa-solid fa-person-through-window"></i> My Acount</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div className="lunch">
        <i className="fa-solid fa-plane"><p>Airplane mode</p></i>   

        <i className="fa-solid fa-person-walking-luggage"><p> Travel dates</p></i>

        <i className="fa-solid fa-house-fire"><p> Place of reservation</p></i>
        <i className="fa-solid fa-umbrella-beach"><p>  Beach offers</p></i>
        <i className="fa-solid fa-earth-asia"><p> The world of tourism</p> </i>
        <i className="fa-solid fa-phone-volume"><p> the number</p> </i>
        <i className="fa-solid fa-gear"><p> Settings</p> </i>

</div>


        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;