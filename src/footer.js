import React from 'react';
import {IconButton, Box, Grid, Typography} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {NavLink} from 'react-router-dom';
import './foot.css';
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";
import 'hover.css/css/hover.css';

function FooterBar(){
    AOS.init();
    return (
        <Box data-aos="zoom-in" data-aos-duration="1000" mt={15} pb={5} sx={{backgroundColor:"#00abf4"}}> 
        <Grid container>
                <Grid item lg={4} md={12} sm={12} xs={12} mt={8}>
                    <Box mx={5}>
                    <Box><Typography sx={{fontFamily:"'Ephesis', cursive",color:"white",fontSize:"40px",fontWeight:"bolder"}}>Sub-Zero</Typography></Box>
                    <Box><Typography sx={{color:"white",fontFamily: "'Hind', sans-serif"}}>We are a young and energetic team of enthusiastic professionals who believe in innovative strategies and out-of-the-box solution</Typography></Box>
                    <Box><Typography sx={{color:"white",fontFamily: "'Hind', sans-serif",fontWeight:"bolder"}}><br/>Our Team</Typography></Box>
                    </Box>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12} mt={8} sx={{display:"flex",justifyContent:"center"}}>
                    <Box>
                        <Box mb={3} sx={{fontFamily:"poppins",fontSize:"30px",color:"white",display:"flex",justifyContent:"center"}}>Contact Us</Box>
                        <Box sx={{display:"flex"}}><LocationOnIcon sx={{color:"white",fontSize:"20px"}}/>&ensp;<Typography sx={{color:"white",fontSize:"15px",fontFamily:"poppins"}}>Address - Buchpora, Srinagar, 190020.</Typography></Box>
                        <Box py={3} sx={{display:"flex"}}><PhoneIcon sx={{color:"white",fontSize:"20px"}}/>&ensp;<Typography sx={{color:"white",fontSize:"15px",fontFamily:"poppins"}}>Call Us - 9796209086</Typography></Box>
                        <Box sx={{display:"flex"}}><EmailIcon sx={{color:"white",fontSize:"20px"}}/>&ensp;<Typography sx={{color:"white",fontSize:"15px",fontFamily:"poppins"}}>Mail Us - KhanJunaid80121@gmail.com</Typography></Box>
                    </Box>
                </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12} mt={8} >
                <Box>
                <Box mb={3} sx={{display:"flex",justifyContent:"center",fontFamily:"poppins",fontSize:"30px",color:"white"}}>Follow Us</Box>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Box mx={2} className="hvr-float"><a href="http://www.facebook.com/junaidkhan80121" target="_blank"><IconButton><FacebookIcon sx={{fontSize:"40px",color:"white"}}/></IconButton></a></Box>
                    <Box mx={2} className="hvr-float"><a href="http://www.instagram.com/junaidkhan80121" target="_blank"><IconButton><InstagramIcon sx={{fontSize:"40px",color:"white"}}/></IconButton></a></Box>
                    <Box mx={2} className="hvr-float"><a href="http://www.twitter.com/junaidkhan80121" target="_blank"><IconButton><TwitterIcon sx={{fontSize:"40px",color:"white"}}/></IconButton></a></Box>
                </Box>
                <Box sx={{display:"flex",justifyContent:"center"}}>
                    <Box mx={2} mt={2} className="hvr-float"><a href="https://www.linkedin.com/in/junaid-khan-a7a169122/" target="_blank"><IconButton><LinkedInIcon sx={{fontSize:"40px",color:"white"}}/></IconButton></a></Box>                    
                    <Box mx={2} mt={2} className="hvr-float"><a href="tel:9796209086"><IconButton><PhoneIcon sx={{fontSize:"40px",color:"white"}}/></IconButton></a></Box>                    
                </Box>
                </Box>
                
            </Grid>
        </Grid>
        </Box>
    );
}

export default FooterBar;