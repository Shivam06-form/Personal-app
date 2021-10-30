import React from 'react'
import { Button, Card} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import classes from './Footer.module.css'
import {BiSlideshow} from 'react-icons/bi';
import {FcSportsMode} from 'react-icons/fc';
import {TiSocialGithubCircular} from 'react-icons/ti';

const Scrolling = () => {
    return (
     <Card className={classes.scroll}>
     <Card.Link >
     <Button variant="primary"><a href="#sport"><FcSportsMode/> Sports</a></Button>
    <Button variant="success" ><a href='#shows'><BiSlideshow/> Shows</a></Button>
    <Button variant="warning" ><a href="#superhero"><TiSocialGithubCircular/> Superhero</a></Button>
 </Card.Link>
    </Card>
      );
    }
    
export default Scrolling
