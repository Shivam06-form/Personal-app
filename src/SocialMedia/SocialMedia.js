import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import classes from './SocialMedia.module.css'
import { AiFillFacebook ,AiFillYoutube,AiFillInstagram} from 'react-icons/ai';
import Aos  from 'aos'
import "aos/dist/aos.css"



const SocialMedia = () => {
    useEffect(() => {
        Aos.init({duration:2000});
       }, [])
       
    return (
        <div data-aos='fade-up' id="social">
        <Card className={classes.social}  style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title><AiFillFacebook/>
            <a href="https://www.facebook.com/shivam.bhagwat.3/">
          FaceBook
            </a>
           </Card.Title>
          </Card.Body>
      </Card>       
        <Card className={classes.social}  style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title><AiFillYoutube/><a href="https://www.youtube.com/channel/UCRyrRcrQfnQy2t8S-3aOdew">
            Soulking
            </a>
            </Card.Title>
          </Card.Body>
      </Card>       
        <Card className={classes.social}  style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title><AiFillInstagram/>  
          <a href="https://www.instagram.com/shivamking06/">
            shivamking06
            </a>
          </Card.Title>
          </Card.Body>
      </Card>       
        </div>
    )
}

export default SocialMedia
