import React from "react";
import Hamburger from "./Hamburger";
import "./Nav.scss";
import menu from '../../menu.png'
import user from '../../user.png'


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

        
       
       <img src={ user } alt="" className="prof"></img>

       <span className="sell">Start selling</span>
    </nav>
    <Hamburger />
    

</>
  );
}

export default Navbar;
