import React from 'react'
import CarouselComponent from '../Carousel'
import Poster from '../Poster'
import { slide } from './data_HomePage'
import { poster } from './data_HomePage'
import FashionInsta from './App/Page/HomePage/Instagram/FashionInsta';
import Service1 from './App/Page/HomePage/Services/Service1';
import LogoBlock from './App/Page/HomePage/logo-block';
import {  instagram,   logoImage } from './App/Page/HomePage/dada_InstaPage';


function HomePage() {
   
  return (
    <div> 
        <div className="App">
          <CarouselComponent slide={slide} />
          <Poster poster={poster} />
          <Service1/> 
    <FashionInsta instagram={instagram}/>
    <LogoBlock logoImage={logoImage}/> 
        </div>
      </div>
  )
}

export default HomePage