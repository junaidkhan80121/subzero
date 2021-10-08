import './services.css';
import {Divider, Box, Grid, Typography, Card} from '@mui/material';
import 'hover.css/css/hover.css'
import AOS from "aos";
import 'aos/dist/aos.css';
import Typed from 'react-typed';

function services() {
    AOS.init()
    return (
        <Box mt={5}>
            <Box className="title-box" data-aos="zoom-in-up" data-aos-duration="2000">
                <Typography className="title-heading" style={{fontSize:"40px",fontFamily: "'Lato', sans-serif",paddingBottom:"3vh"}}>Services</Typography>
                <Typography className="title-desc" sx={{fontFamily: "'Hind', sans-serif",fontSize:"20px "}}><Typed loop strings={['Design Your Success around our talent.<br/> We Bring Promising Ideas to Life Online.']} typeSpeed={50}></Typed></Typography>
            </Box>
             <Grid container className="gap">
             <Grid item lg={6} md={6} xl={6} sm={12} xs={12}>
                    <Box data-aos="fade-right" data-aos-duration="3000" className="img-align"><img src="web.svg" alt="web image" className="icons" /></Box>
                </Grid>
                <Grid item lg={6} md={6} xl={6} sm={12} xs={12}>
                    <Box ml={12} data-aos="fade-left" data-aos-duration="3000">
                        <Box mt={3}><Typography style={{fontSize:"30px",marginBottom:"4vh",fontFamily: "'Lato', sans-serif"}}>Web Development</Typography></Box>
                        <Box mr={10} className="desc"><Typography style={{color:"gray",fontFamily: "'Hind', sans-serif"}} variant="p">Custom web design is so much more than colors, designs, and images. Moreover, it’s a process of allowing your audience to access the most out of your website and navigate smoothly. It lets your visitors learn and understand more about your business and enhance by enhancing the user experience. Our custom web design services believe it’s an essential aspect in presenting a digital asset and extensively improves the online presence of a business.</Typography></Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container className="gap">
                <Grid item lg={6} md={6} xl={6} sm={12} xs={12}>
                    <Box ml={12} data-aos="fade-left" data-aos-duration="3000">
                        <Box mt={3}><Typography style={{fontSize:"30px",marginBottom:"4vh",fontFamily: "'Lato', sans-serif"}}>Android App Development</Typography></Box>
                        <Box mr={10} className="desc"><Typography style={{color:"gray",fontFamily: "'Hind', sans-serif"}} variant="p">Android is an open-source mobile operating system. In today’s world, most of the businesses are looking forward to getting themselves a customizable android application to expand their businesses. With more than 80% share, android OS aggressively dominates the industry of mobile app development. It is very much likely to surge even further in the coming years.  Our Android Application Development Services provide tremendous strategic advantages along with operational advantages. In order to grab the attention of a passionate audience, entrepreneurs need to compete with creativity. The ultimate goal for any business is only to generate more and more revenue.</Typography></Box>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} xl={6} sm={12} xs={12}>
                    <Box data-aos="fade-right" data-aos-duration="3000" className="img-align"><img src="android.svg" alt="android image" className="icons" /></Box>
                </Grid>
            </Grid>

            <Grid container className="gap">
             <Grid item lg={6} md={6} xl={6} sm={12} xs={12}>
                    <Box data-aos="fade-right" data-aos-duration="3000" className="img-align"><img src="ios.svg" alt="ios image" className="icons" /></Box>
                </Grid>
                <Grid item lg={6} md={6} xl={6} sm={12} xs={12}>
                    <Box ml={12} data-aos="fade-left" data-aos-duration="3000">
                        <Box mt={3}><Typography style={{fontSize:"30px",marginBottom:"4vh",fontFamily: "'Lato', sans-serif"}}>iOS Application Development</Typography></Box>
                        <Box mr={10} className="desc"><Typography style={{color:"gray",fontFamily: "'Hind', sans-serif"}} variant="p">Most of the people might not know this, but Apple has a tradition; after every year, it discloses the statistics to prove how good their App Store and IOS applications performed so far in a year. The announcement of this year indicates that it has extensively received staggering popularity. If you explore the App Store, you will come across more than 2.2 million applications. Around 2,500 applications get uploaded on the App store each day. Talking about how well it has been earning so far, the revenue of the App Store in Q2 in 2019 was around $25.5B. All of these factors indicate that there is a lot of potential in the App Store as well. In order to attain the most out of these benefits, you need to rely on the best iPhone Application Development Services providers. Building an IOS app is not that easy; it takes a lot of exposure and effort. The closest rival of Android, which is Android, has plenty of things to offer and a significant number to show. It has been researched that around 18% of the people have observed the advantages of having an IOS based phone moved onto the same. Both small scale businesses and large scale businesses have started investing in IOS applications to meet their business requirements.</Typography></Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container className="gap">
                <Grid item lg={6} md={6} xl={6} sm={12} xs={12}>
                    <Box ml={12} data-aos="fade-left" data-aos-duration="3000">
                        <Box mt={3}><Typography style={{fontSize:"30px",marginBottom:"4vh",fontFamily: "'Lato', sans-serif"}}>Computer App Development</Typography></Box>
                        <Box mr={10} className="desc"><Typography style={{color:"gray",fontFamily: "'Hind', sans-serif"}} variant="p">The mobile platform of the windows is the robust version of the Microsoft Windows. Windows is very much underrated as compared to Android and IOS. Microsoft Windows has a lot of potential, and most people fail to realize it. It is the operating system built by Microsoft in mobile devices that have gained plenty of popularity all across the globe. The main reason behind that is, it proffers features like PC. We get to access those features on a daily basis, which makes things easier. It is exceedingly smooth and comes with several benefits. The topmost benefit of windows devices is user-familiarity and making our activities more straightforward.</Typography></Box>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} xl={6} sm={12} xs={12}>
                <Box data-aos="fade-right" data-aos-duration="3000" className="img-align"><img src="pc.svg" alt="pc image" className="icons" /></Box>
                </Grid>
            </Grid>

        </Box>
    )
}

export default services;