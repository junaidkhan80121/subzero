import React, {useState} from 'react';
import './App.css';
import FooterBar from './footer';
import Home from './home.js';
import services from './services';
import about from './about';
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import contact from './contact';
import { styled } from '@mui/material/styles';
//import { green } from '@mui/material/colors';
import pagenotfound from './pagenotfound';
import {Typography, AppBar, Toolbar, Button, Menu, MenuItem, Divider} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';
import classes from "./classes"

const MenuItems = styled('div')(({theme})=>({
  [theme.breakpoints.down('md')]:{
    display:"flex",
    marginLeft:"auto"
  },
  [theme.breakpoints.up('md')]:{
    display:"none",
  },  
  [theme.breakpoints.up('lg')]:{
    display:"none"
  },
  [theme.breakpoints.down('sm')]:{
    display:"flex",
    marginLeft:"auto"
  }
}));


const Responsive = styled('div')(({theme})=>({
  [theme.breakpoints.down('md')]:{
    display:'none'
  },
  [theme.breakpoints.up('lg')]:{
    display:"flex",
    marginLeft:'auto'
  }
}));


function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    
  return (
    <>
    <Router>
    <AppBar class="navbar-color">
        <Toolbar>
        <Link class="logo hvr-grow" to="/"><Typography class="logo">Sub-Zero</Typography></Link>
          <Responsive>
            <NavLink className="fade hvr-underline-center " activeClassName="active" exact to="/"><Typography style={{fontFamily:"'Montserrat', sans-serif"}}>Home</Typography></NavLink>
            <NavLink className="fade hvr-underline-center" activeClassName="active" exact to="services"><Typography style={{fontFamily:"'Montserrat', sans-serif"}}>Services</Typography></NavLink>
            <NavLink className="fade hvr-underline-center" activeClassName="active" exact to="classes"><Typography style={{fontFamily:"'Montserrat', sans-serif"}}>Coding Classes</Typography></NavLink>
            <NavLink className="fade hvr-underline-center" activeClassName="active" exact to="contact"><Typography style={{fontFamily:"'Montserrat', sans-serif"}}>Contact</Typography></NavLink>
            <NavLink className="fade hvr-underline-center" activeClassName="active" exact to="about"><Typography style={{fontFamily:"'Montserrat', sans-serif"}}>About</Typography></NavLink>
          </Responsive>
          <MenuItems>
      <Button
        onClick={handleClick}><MoreVertIcon style={{color:"#00abf4",fontSize:"30px"}}/></Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose} anchorOrigin={{vertical:'top',horizontal: 'right',}}transformOrigin={{vertical: 'top',horizontal: 'right',}}>
        <MenuItem onClick={handleClose}><Link style={{padding:"0vh 5vw 0vh 0vw",textDecoration:"none",color:"black"}} to="/"><HomeIcon style={{fontSize:"15px"}}/>&emsp;Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{padding:"0vh 5vw 0vh 0vw",textDecoration:"none",color:"black"}} to="Services"><DesignServicesIcon style={{fontSize:"15px"}}/>&emsp;Services</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{padding:"0vh 5vw 0vh 0vw",textDecoration:"none",color:"black"}} to="classes"><CodeIcon style={{fontSize:"15px"}}/>&emsp;Coding Classes</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{padding:"0vh 5vw 0vh 0vw",textDecoration:"none",color:"black"}} to="contact"><ContactsIcon style={{fontSize:"15px"}}/>&emsp;Contact Us</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{display:"flex",alignItems:"center",padding:"0vh 5vw 0vh 0vw",textDecoration:"none",color:"black"}} to="about"><InfoIcon style={{fontSize:"15px"}}/>&emsp;About Us</Link></MenuItem>
      </Menu>
          <Menu anchorEl={{anchorEl}}>
            <MenuItem style={{color:"white"}}>Services</MenuItem> 
          </Menu>
          </MenuItems>
        </Toolbar>
        </AppBar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/services" component={services}></Route>
        <Route exact path="/classes" component={classes}></Route>
        <Route exact path="/contact" component={contact}></Route>
        <Route exact path="/about" component={about}></Route>
        <Route path="*" component={pagenotfound}></Route>
      </Switch>
    </Router>
    <FooterBar/>
    </>
  );
}

export default App;