import React from 'react'
import { Button, Card,Badge ,Dropdown} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import classes from './Scrolling.module.css'
import {BiSlideshow} from 'react-icons/bi';
import {FcSportsMode} from 'react-icons/fc';
import {TiSocialGithubCircular} from 'react-icons/ti';
import { useMediaQuery } from 'react-responsive';


const Scrolling = () => {

  if ( useMediaQuery ({ query: '(max-width: 650px)' })) {
  return( 
  <Card className={classes.scroll}>
     <h1 style={{float:'left'}}> 
     <Badge bg="secondary">My Self</Badge>
    </h1>
<Dropdown style={{float:'right'}}>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  Know More
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item >
    <Button variant="primary"><a href="#sport"><FcSportsMode/> Sports</a></Button>
    </Dropdown.Item>
    <Dropdown.Item >
    <Button variant="success" ><a href ='#shows'><BiSlideshow/> Shows</a></Button>
      </Dropdown.Item>
    <Dropdown.Item >
    <Button variant="warning" ><a href ="#social"><TiSocialGithubCircular/> SocialMedia</a></Button>
   </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

</Card>
)
  }


    return (
     <Card className={classes.scroll}>
     <Card.Link >
     <Button variant="primary"style={{float:'right'} }><a href="#sport"><FcSportsMode/> Sports</a></Button>
    <Button variant="success" style={{float:'right'}}><a href='#shows'><BiSlideshow/> Shows</a></Button>
    <Button variant="warning" style={{float:'right'}}><a href="#social"><TiSocialGithubCircular/> SocialMedia</a></Button>
    <h1 style={{float:'left'}}> 
     <Badge bg="secondary">My Self</Badge>
    </h1>
 </Card.Link>
    </Card>
      );
    }
    
export default Scrolling
