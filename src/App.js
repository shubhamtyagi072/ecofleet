import React from 'react';
import Header from './Component/Header/Header'
import Carousal from './Component/Carousal/Carousal'
import AboutUS from './Component/AboutUs/index'
import OurService from './Component/OurService/Index'
import Whyus from './Component/Whyus/index'
import Availabilty from './Component/Availability/index'
import Difference from './Component/Difeerence/Difference'
import PanIndia from './Component/PanIndia/index'
import ContactUs from './Component/ContactUs/Index'
import './App.css';

function App() {
  return (
    <>
    <Header />
    <Carousal />
    <AboutUS />
    <Whyus />
    <Difference />
    <OurService />
    <Availabilty />
    <PanIndia />
  <ContactUs />
      </>
  );
}

export default App;
