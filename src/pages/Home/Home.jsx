import React from 'react'

//Componentes
import Navbar from '../../componentes/Navbar/Navbar'
import Carousel from '../../componentes/Carousel/Carousel'
import BannerPagos from '../../componentes/BannerPagos/BannerPagos'
import CarouselCards from '../../componentes/CarouselCards/CarouselCards'


export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <CarouselCards />
      <BannerPagos />
    </div>
  )
}
