import React from 'react'
import styled from 'styled-components'
import Logo from './Logo.jpeg'


const Div = styled.div(props => ({
    background: 'white',
    display: "flex",
    height: "70px",
    width: "80vw"
}))
const Div1 = styled.div(props => ({
   textAlign:"right"
}))
const H4 = styled.h4((props) => ({
    color:"black",
    fontWeight:"700",
    alignText:'center'
}))

const Header = () => {
    // Used to toggle the menu on small screens when clicking on the menu button
    var mySidebar = document.getElementById("mySidebar");
      
      const w3_open = () => {
        if (mySidebar.style.display === 'block') {
          mySidebar.style.display = 'none';
        } else {
          mySidebar.style.display = 'block';
        }
      }
      
      // Close the sidebar with the close button
      const w3_close = () => {
          mySidebar.style.display = "none";
      }

    return (
<>
<div class="w3-top">
        <div class="w3-bar w3-white w3-card" id="myNavbar">
          <img  src={Logo} class="w3-bar-item w3-button w3-wide" />
          {/* <!-- Right-sided navbar links --> */}
          <div class="w3-right w3-hide-small">
            <a href="#about" class="w3-bar-item w3-button">About Us</a>
            <a href="#team" class="w3-bar-item w3-button">Why Us</a>
            <a href="#work" class="w3-bar-item w3-button"> Our Services</a>
            <a href="#pricing" class="w3-bar-item w3-button"> Available For</a>
            <a href="#pricing" class="w3-bar-item w3-button"> Our Presence</a>
            <a href="#contact" class="w3-bar-item w3-button">Contact Us</a>
          </div>
          {/* <!-- Hide right-floated links on small screens and replace them with a menu icon --> */}
      
          <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick={w3_open}>
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </div>
      
      {/* <!-- Sidebar on small screens when clicking the menu icon --> */}
      <nav class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style={{display:"none"}} id="mySidebar">
        <a href="javascript:void(0)" onclick={w3_close} class="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
        <a href="#about" onclick={w3_close} class="w3-bar-item w3-button">ABOUT</a>
        <a href="#team" onclick={w3_close} class="w3-bar-item w3-button">TEAM</a>
        <a href="#work" onclick={w3_close} class="w3-bar-item w3-button">WORK</a>
        <a href="#pricing" onclick={w3_close} class="w3-bar-item w3-button">PRICING</a>
        <a href="#contact" onclick={w3_close} class="w3-bar-item w3-button">CONTACT</a>
      </nav>

</>
    )
}

export default Header