import React from 'react';
import SearchBox from "./SearchBox";
import '../styles/HeroHome.css?v=21';

const HeroHome = () => {
  return (
    <>
    
    <div className='hero-section'>
      <div className='title'>
        <h1>Find student homes with bills included</h1>
        <p>A simple and faster way to research for student accomodation</p>
      </div>
    </div>
    
    <SearchBox/>
    </>
  );

}
export default HeroHome;

