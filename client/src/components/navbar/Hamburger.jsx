import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Hamburger.scss'
import menu from '../../menu.png'



var styles = {
    bmBurgerButton: {
      position: 'relative',
      width: '39px',
      height: '37px',
    //   left: 'initial',
    //   right: '119px',
    //   top: '21px',
    float: 'right',
    marginTop: '-38px',
      color: '#C4D0D9 !important',
      backgroundColor: 'transparent'
      
    },
    bmBurgerBars: {
      background: '#C4D0D9',
     
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
      
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      top: '0px',
      
      
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      height: '100vh',
    
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      zIndex: '1000',
      width: '100%',
      height: '100%',
      top: '0',
     
    }
  }

class Hamburger extends Component {
  showSettings (event) {
    event.preventDefault();
   
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <>
    

      <Menu className="menu" styles= { styles } customBurgerIcon={ <img src= {menu} /> } right >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
      </>
    );
  }
}

export default Hamburger;