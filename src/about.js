import React from 'react'
import {Grid, Typography, Box} from '@mui/material';
import './about.css';
import AOS from "aos";
import 'aos/dist/aos.css';
import Typed from 'react-typed';

function about() {
    AOS.init()
    return (
        <Box mt={5}>
            <Box style={{paddingTop:"10vh",backgroundColor:"#00abf4",paddingBottom:"10vh",height:"20vh"}} data-aos="zoom-in-up" data-aos-duration="2000">
                <Typography className="title-heading" style={{fontSize:"40px",fontFamily: "'Lato', sans-serif",paddingBottom:"3vh"}}>About Us</Typography>
                <Typography className="title-desc" sx={{fontFamily: "'Hind', sans-serif",fontSize:"20px"}}><Typed strings={['Design Your Success around our talent.<br/> We Bring Promising Ideas to Life Online.']} typeSpeed={50}></Typed></Typography>
            </Box>
        <Grid container style={{display:"flex",alignItems:"center",marginTop:"20vh"}}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box data-aos="zoom-in" data-aos-duration="2000" m={5}><img className="img" src="/personal.jpg"/>
                </Box>
            </Grid>
            
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box data-aos="zoom-in" data-aos-duration="2000" mx={7}>
                    <Box><Typography variant="h4" style={{color:"black",}}>Junaid Khan</Typography></Box>
                    <Box><Typography sx={{lineHeight:"35px",fontFamily: "'Hind', sans-serif"}}><br/><br/>Sub-Zero is a young and new Website designing and development firm. With a mission to serve our clients with perfection and excellence, we started the Sub-Zero Way in year 2020. We are proud to say that in this short span of time we have built a great reputation in the Information Technology market. We have achieved a wonderful clientele by satisfying them with our high quality work. Since our startup in the market with 1 employees, we have been growing continuously and very rapidly and currently we are having a team of more than 4 experts. We are dedicated to our quality and service</Typography></Box>
            </Box></Grid>
        </Grid>
        </Box>
    );
}

export default about;