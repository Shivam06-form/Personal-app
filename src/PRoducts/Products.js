import classes from './Products.module.css'
import { BsFillAwardFill,BsFillCalendarEventFill,BsFillFileEarmarkPlayFill} from "react-icons/bs";
import React, {useState } from 'react';
// import Info from '../Information/info';
import { Card,  Carousel, Image } from 'react-bootstrap';



const Products =(props)=>{
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex )   ;
  }
  

  



  return (

	<Card className={classes.product}   style={{backgroundColor: 'golden'}} 
>
 <Carousel activeIndex={index} onSelect={handleSelect}>
  <Carousel.Item> 
  <Card.Title style={{ color: 'darkgreen'}}>
  {props.Name}
    </Card.Title> 
    <Image
      className="d-block w-100 "
      src={props.thumbnail}
      thumbnail  
      alt="First slide"
    />
 
  </Carousel.Item>
  <Carousel.Item > 
  <Image 
      className="d-block w-100 "
      src={props.thumbnail2}
      thumbnail  
      alt="First slide"
    />
  <Card.Title   style={{ color: 'darkgreen'}}>
 <BsFillAwardFill/> {props.Rating}
    </Card.Title> 
  <Card.Title style={{ color: 'darkgreen'}}>
     <BsFillCalendarEventFill/> {props.airdate}
    </Card.Title> 
  <Card.Title style={{ color: 'darkgreen'}}>
   <BsFillFileEarmarkPlayFill/>    { props.genres[0] }   {props.genres[1]}  {props.genres[2]}
    </Card.Title> 
  </Carousel.Item>
</Carousel>
        </Card>


    )
};

export default Products;