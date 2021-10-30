import React, { useEffect } from 'react'
import { Card, Carousel,  Image } from 'react-bootstrap'
import image1 from '../img/HawkMan-05.jpg'
import image2 from '../img/Green Lantern-06.jpg'
import image3 from '../img/Shazam-01.jpg'
import image4 from '../img/Superman-02.jpg'
import classes from './Slider.module.css'
import Aos  from 'aos'
import "aos/dist/aos.css"


const Slider = () => {

    useEffect(() => {
        Aos.init({duration:3000});
       }, [])

    return (

<Card id="superhero" data-aos='fade-up' className={classes.slider} bg="warning"  style={{  backgroundColor: 'golden'}} 
>
<Card.Title style={{ color: 'Black'}}>
    My Favorite superheroes
    </Card.Title> 
 <Carousel>
  <Carousel.Item> 
  <Card.Title style={{ color: 'darkgreen'}}>
  HawkMan
    </Card.Title> 
    <Image
      className="d-block w-100 "
      src={image1}
      thumbnail  
      alt="First slide"
    />
    <Card.Text style={{color: 'darkblack',borderBlock:'2px solid black'}}>
    Hawkman is the name of several fictional superheroes appearing in American comic books published by DC Comics. Created by writer Gardner Fox and artist Dennis Neville,
     the original Hawkman first appeared in Flash Comics #1, published by All-American Publications in 1940
    </Card.Text>
  </Carousel.Item>
  <Carousel.Item>
  <Card.Title style={{ color: 'darkgreen'}}>
Green Lantern
    </Card.Title> 
    <Image
      className="d-block w-100 center"
      src={image2}
      thumbnail  
      alt="Second slide"
    />

    <Card.Text style={{color: 'black', borderBlock:'2px solid black'}}>
    Green Lantern is the name of several superheroes appearing in American comic books published by DC Comics.
     They fight evil with the aid of rings
     that grant them a variety of extraordinary powers, all of which come from imagination and/or emotions
    </Card.Text>
  </Carousel.Item>
  <Carousel.Item>
  <Card.Title style={{ color: 'darkgreen'}}>
    Shazam
    </Card.Title> 
    <Image
      className="d-block w-100"
      src={image3}
      alt="Third slide"
      thumbnail  
    />

    <Card.Text style={{color: 'darkblack', borderBlock:'2px solid black'}} >
        <h4>After being abandoned at a fair, Billy constantly searches for his mother. His life,
             however, takes a huge turn when he inherits the superpowers of a powerful wizard.</h4>
    </Card.Text>
  </Carousel.Item>
  <Carousel.Item>
  <Card.Title style={{ color: 'darkgreen'}}>
  Superman
    </Card.Title> 
    <Image
      className="d-block w-100"
      src={image4}
      alt="Third slide"
      thumbnail  
    />

    <Card.Text style={{color: 'darkblack', borderBlock:'2px solid black'}} >
        <h4>Clark Joseph Kent, also known by his birth name Kal-El or superhero persona Superman, is a fictional character
             and a superhero in the DC Extended Universe
             series of films, based on the character of the same name created by Jerry Siegel and Joe Shuster.</h4>
    </Card.Text>
  </Carousel.Item>
</Carousel>
        </Card>

    )
}

export default Slider
