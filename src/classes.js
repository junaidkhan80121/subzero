import React from 'react'
import {Box, Grid, Typography} from "@mui/material";
import Typed from "react-typed";
import AndroidIcon from '@mui/icons-material/Android';
import CodeIcon from '@mui/icons-material/Code';
import PublicIcon from '@mui/icons-material/Public';
import BookIcon from '@mui/icons-material/Book';
import AppleIcon from '@mui/icons-material/Apple';
import ComputerIcon from '@mui/icons-material/Computer';
import './classes.css';
import AOS from 'aos/dist/aos';
import "aos/dist/aos.css";
import 'hover.css/css/hover.css'

export default function classes() {
    AOS.init();
    return (
        <Box mt={5}>
            <Box style={{paddingTop:"10vh",backgroundColor:"#00abf4",paddingBottom:"10vh",height:"20vh"}} data-aos="zoom-in-up" data-aos-duration="2000">
                <Typography className="title-heading" style={{fontSize:"40px",fontFamily: "'Lato', sans-serif",paddingBottom:"3vh"}}>Coding Classes</Typography>
                <Typography className="title-desc" sx={{fontFamily: "'Hind', sans-serif",fontSize:"20px"}}><Typed loop strings={['Design Your Success around our talent.<br/> We Bring Promising Ideas to Life Online.']} typeSpeed={50}></Typed></Typography>
            </Box>
            <Grid container mt={5}>
                <Grid item lg={4} md={6} sm={12} xs={12} className="align-c" data-aos="zoom-in-right" data-aos-duration="2000">
                    <Box className="box-space">
                        <Box className="align-c"><CodeIcon className="icons-c" style={{fontSize:"40px"}}/></Box>
                        <Typography mb={2} sx={{fontSize:"18px",fontFamily: "'Hind', sans-serif"}}>Programming Languages</Typography>
                        <Box className="listings">
                        <ul>
                            <li>C Programming</li>
                            <li>C++ Programming</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>UNIX Shell Programming</li>
                        </ul>
                        </Box>
                    </Box>
                </Grid>
                
                <Grid item lg={4} md={6} sm={12} xs={12} className="align-c" data-aos="zoom-in-up" data-aos-duration="2000">
                    <Box className="box-space">
                        <Box className="align-c"><PublicIcon className="icons-c" style={{fontSize:"40px"}}/></Box>
                        <Typography sx={{fontSize:"18px",fontFamily: "'Hind', sans-serif"}}>Web Development</Typography>
                        <Box className="listings">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>SQL</li>
                            <li>Bootstrap</li>
                            <li>MERN Stack</li>
                        </ul>
                        </Box>
                    </Box>
                </Grid>

                <Grid item lg={4} md={6} sm={12} xs={12} className="align-c" data-aos="zoom-in-left" data-aos-duration="2000">
                    <Box className="box-space">
                        <Box className="align-c"><AndroidIcon className="icons-c" style={{fontSize:"40px"}}/></Box>
                        <Typography sx={{fontSize:"18px",fontFamily: "'Hind', sans-serif"}}>Android App Development</Typography>
                        <Box className="listings">
                        <ul>
                            <li>Android SDK</li>
                            <li >Flutter</li>
                            <li>React Native</li>
                        </ul>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container mt={5}>
                <Grid item lg={4} md={6} sm={12} xs={12} className="align-c" data-aos="zoom-in-left" data-aos-duration="2000">
                <Box className="box-space">
                <Box className="align-c"><AppleIcon className="icons-c" style={{fontSize:"40px"}}/></Box>
                    <Typography sx={{fontSize:"18px",fontFamily: "'Hind', sans-serif"}}>iOS APP Development</Typography>
                    <Box className="listings">
                        <ul>
                        <li>Flutter</li>
                        <li>React Native</li>
                        </ul>
                    </Box>
                    </Box>
                </Grid>

                <Grid item lg={4} md={6} sm={12} xs={12} className="align-c" data-aos="zoom-in-up" data-aos-duration="2000">
                <Box className="box-space">
                    <Box className="align-c"><ComputerIcon className="icons-c" style={{fontSize:"40px"}}/></Box>
                    <Typography sx={{fontSize:"18px",fontFamily: "'Hind', sans-serif"}}>Computer Application Development</Typography>
                    <Box className="listings">
                    <ul>
                        <li>Qt</li>
                        <li>Qt Designer</li>
                        <li>Python</li>
                    </ul>
                    </Box>
                    </Box>
                </Grid>

                <Grid item lg={4} md={6} sm={12} xs={12} className="align-c" data-aos="zoom-in-right" data-aos-duration="2000">
                <Box className="box-space">
                <Box className="align-c"><BookIcon className="icons-c" style={{fontSize:"40px"}}/></Box>
                    <Typography sx={{fontSize:"18px",fontFamily: "'Hind', sans-serif"}}>Theoretical Subjects</Typography>
                    <Box className="listings">
                    <ul>
                        <li>Data Structures</li>
                        <li>Algorithms</li>
                    </ul>
                    </Box>
                    </Box>
                </Grid>

            </Grid>

        </Box>
    )
}
