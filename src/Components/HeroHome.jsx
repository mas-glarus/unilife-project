import React from 'react';
import "../styles/HeroHome.css?v=2";

const HeroHome = () => {
  return (
    <div className='hero-section'>
      <img src="../src/assets/hero-img.jpg" alt="hero" />
      <div className='title'>
        <h1>Find student homes with bills included</h1>
        <p>A simple and faster way to research for student accomodation</p>
      </div>
    </div>
  );

}
export default HeroHome;

