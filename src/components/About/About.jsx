import React from 'react'
import { Button } from "../index"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div id='about'>
    <h1 className='pt-20' style={{fontSize: "2rem", fontWeight: "500"}}>About</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore consequatur optio ut?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore consequatur optio ut?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore consequatur optio ut?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore consequatur optio ut?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore consequatur optio ut?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore consequatur optio ut?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore consequatur optio ut?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore consequatur optio ut?</p>

      <Button 
        // onClick = {(e) => handleResume(e)}
       >
        <Link to={'resume'} >My Resum&eacute;</Link>
       </Button>
    </div>
  )
}

export default About