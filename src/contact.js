import React from 'react'
import {Grid, Box, Typography, IconButton} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import 'hover.css/css/hover.css'
import AOS from "aos/dist/aos";
import './contact.css';
import Typed from 'react-typed';

export default function contact() {
    AOS.init();
    return (
        <Box mt={5}>
            <Box className="title-box" data-aos="zoom-in-up" data-aos-duration="2000">
                <Typography className="title-heading" style={{fontSize:"40px",fontFamily: "'Lato', sans-serif",paddingBottom:"3vh"}}>Contact Us</Typography>
                <Typography className="title-desc" sx={{fontFamily: "'Hind', sans-serif",fontSize:"20px"}}><Typed strings={['Design Your Success around our talent.<br/> We Bring Promising Ideas to Life Online.']} typeSpeed={50}></Typed></Typography>
            </Box>
            <Box p={10}>
                <Grid container sx={{display:"flex",justifyContent:"center",color:"gray"}}>
                    <Grid item lg={2} md={2} sm={6} xs={6} p={5} className="align-center-icon" data-aos="fade-right" data-aos-duration="2000">
                        <Box className="hvr-float">
                        <a href="mailto:khanjunaid80121@gmail.com" target="_blank">
                        <Typography sx={{textAlign:"center",fontFamily: "'Hind', sans-serif",fontSize:"20px"}}>E-Mail</Typography>
                        <IconButton><EmailIcon sx={{fontSize:"50px"}} variant="outlined"/></IconButton>
                        </a>
                        </Box>
                    </Grid>
                    <Grid item lg={2} md={2} sm={6} xs={6} p={5} className="align-center-icon" data-aos="fade-down" data-aos-duration="2000">
                    <Box className="hvr-float">
                    <a href="http://www.facebook.com/junaidkhan80121" target="_blank">
                    <Typography sx={{textAlign:"center",fontFamily: "'Hind', sans-serif",fontSize:"20px"}}>Facebook</Typography>
                        <IconButton><FacebookIcon sx={{fontSize:"50px"}}/></IconButton>
                        </a></Box>
                    </Grid>
                    <Grid item lg={2} md={2} sm={6} xs={6} p={5} className="align-center-icon" data-aos="fade-up" data-aos-duration="2000">
                    <Box className="hvr-float">
                        <a href="http://www.instagram.com/junaidkhan80121" target="_blank">
                        <Typography sx={{textAlign:"center",fontFamily: "'Hind', sans-serif",fontSize:"20px"}}>Instagram</Typography>
                        <IconButton><InstagramIcon sx={{fontSize:"50px"}}/></IconButton>
                        </a>
                    </Box>
                    </Grid>
                    <Grid item lg={2} md={2} sm={6} xs={6} p={5} className="align-center-icon" data-aos="fade-down" data-aos-duration="2000">
                    <Box className="hvr-float">
                        <a href="http://www.twitter.com/junaidkhan80121" target="_blank">
                        <Typography sx={{textAlign:"center",fontFamily: "'Hind', sans-serif",fontSize:"20px"}}>Twitter</Typography>
                        <IconButton><TwitterIcon sx={{fontSize:"50px"}}/></IconButton>
                        </a>
                        </Box>
                    </Grid>
                    <Grid item lg={2} md={2} sm={6} xs={6} p={5} className="align-center-icon" data-aos="fade-left" data-aos-duration="2000">
                    <Box className="hvr-float">
                        <a href="https://www.linkedin.com/in/junaid-khan-a7a169122/" target="_blank">
                        <Typography sx={{textAlign:"center",fontFamily: "'Hind', sans-serif",fontSize:"20px"}}>LinkedIn</Typography>
                        <IconButton><LinkedInIcon sx={{fontSize:"50px"}}/></IconButton>
                        </a>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
