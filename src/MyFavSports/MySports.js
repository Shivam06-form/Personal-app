import React, { useEffect } from 'react'
import { Card}from 'react-bootstrap'
import classes from './MySports.module.css'
import image4 from '../img/Cricket.jpg'
import image5 from '../img/Taekwondo.jpg'
import image6 from '../img/Football.jpg'
import { BiFootball } from 'react-icons/bi';
import { GiCricketBat,GiHighKick } from 'react-icons/gi';
import Aos  from 'aos'
import "aos/dist/aos.css"


const MySports = () => {
  useEffect(() => {
    Aos.init({duration:3000});
   }, [])


    return (
      <div id="sport" >
        <Card data-aos='fade-up' className={classes.fav}  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image4} />
        <Card.Body>
          <Card.Title><GiCricketBat/> Cricket</Card.Title>
          <Card.Text style={{color: 'darkblack', borderBlock:'2px solid black'}}>
          Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which 
          is a 22-yard pitch with
           a wicket at each end, each comprising two bails balanced on three stumps.
          </Card.Text>
        </Card.Body>
      </Card>
        <Card 
       data-aos='fade-up' className={classes.fav}  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image5} />
        <Card.Body>
          <Card.Title><GiHighKick/> Taekwondo</Card.Title>
          <Card.Text style={{color: 'darkblack', borderBlock:'2px solid black'}}>
          Taekwondo, Tae Kwon Do or Taekwon-Do is a Korean martial art, characterized by punching
           and kicking techniques, with emphasis on head-height kicks, jumping spinning kicks,
           and fast kicking techniques. The literal translation for tae kwon do is "kicking," "punching," 
          </Card.Text>
        </Card.Body>
      </Card >
        <Card data-aos='fade-up' className={classes.fav}  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image6} />
        <Card.Body>
          <Card.Title><BiFootball/> Football</Card.Title>
          <Card.Text style={{color: 'darkblack', borderBlock:'2px solid black'}}>
          Association football, more commonly known as simply football or soccer, 
          is a team sport played with a spherical ball between two teams of 11 players. It is played by approximately
           250 million players in over 200 countries and dependencies, making it the world's most popular sport.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    )
}

export default MySports
