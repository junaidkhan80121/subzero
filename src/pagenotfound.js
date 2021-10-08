import React from 'react'
import {Box, Grid, Typography} from '@mui/material';
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";
import './pagenotfound.css';

export default function pagenotfound() {
    AOS.init();
    return (
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box mt={8} style={{display:"flex",justifyContent:"center",height:"50vh"}}><img style={{width:"100%",height:"auto"}} src="404.svg" alt="page not found"/></Box>
                <Box mt={8} style={{display:"flex",justifyContent:"center"}}><Typography className="txt"><span style={{fontSize:"40px"}}>OOPS!</span><br/>Looks like the page you are trying to access does not exist</Typography></Box>
            </Grid>
        </Grid>
    )
}
