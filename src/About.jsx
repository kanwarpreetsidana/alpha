import React from 'react';
import abt from "../src/images/abt_img.jpg"
import { NavLink } from 'react-router-dom';
import Common from './Common';


const About=() =>{
  return(
  <>

<Common name="Welcome to About Page" imgsrc={abt} visit='/contact' btname="Contact Now"/>
</>
  );
};

export default About;
