import React from "react";
import Hamburger from "./Hamburger";
import "./Nav.scss";
import menu from '../../menu.png'


// var spanStyles = {
//     display: 'inline',
//     float: 'right'
// }

// var buyStyles = {
//     paddingLeft: '200px',

// }

// var sellStyles = {
//     marginLeft: '75px'
// }

function Navbar() {
  return (
    
    <>
    <nav className="outerNav">
      
     
          
          <div className="circle"></div>
          
          <span className="title">PARTSMART</span>
     

        {/* <img src={menu} alt=""></img> */}
       
    </nav>
    <Hamburger />

</>
  );
}

export default Navbar;
