import React from 'react';
import './home.css';
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";
import {NavLink} from "react-router-dom";
import {Grid, Box, Typography, Button} from '@mui/material'
import Typed from 'react-typed';

function Home() {
   AOS.init();
  return (
    <Box data-aos="zoom-in" data-aos-duration="1500" py={5} mt={5}>
    <Grid container>
      <Grid mb={10} item lg={6} md={6} sm={12} xs={12}>
      <Box mt={7} mx={8} ml={7}><Typography class="left-text-heading" style={{fontFamily:"'Montserrat', sans-serif"}}>Get Started With<br/><span style={{color:"#00abf4"}}>Us Today</span></Typography></Box>
      <Box mt={3} mx={8} ml={7} pb={5} style={{minHeight:"7vh"}}><Typed loop className="typewriter" strings={['Build all kinds of Web, mobile and Computer applications with us.']} loop backSpeed={40} typeSpeed={70}></Typed></Box>
      <Box ml={8} mx={8} mt={2} sx={{display:"flex"}}><Box ml={5} mr={3}><NavLink exact to="/services" className="hov">Get Started</NavLink></Box><Box><NavLink exact to="/about" className="hov1">Learn More</NavLink></Box></Box>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}><Box mx={5}><img className="float" src="landing.svg" alt="float-img"></img></Box></Grid>
    </Grid>
    </Box>
  );
}

export default Home;
