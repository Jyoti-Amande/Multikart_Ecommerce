import React from 'react'
import CarouselComponent from '../Carousel'
import Poster from '../Poster'
import { slide } from './data_HomePage'
import { poster } from './data_HomePage'
import Service1 from '../Services/Service1';
import FashionInsta from '../Instagram/FashionInsta'
import { instagram, logoImage } from '../data_InstaPage'
import LogoBlock from '../logo-block';



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