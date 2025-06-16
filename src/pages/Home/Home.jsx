import React from 'react'

//Componentes
import Navbar from '../../componentes/Navbar/Navbar'
import Carousel from '../../componentes/Carousel/Carousel'
import BannerPagos from '../../componentes/BannerPagos/BannerPagos'


export default function Home() {
  return (
    <div>
        <Navbar/>
        <Carousel />
        <BannerPagos />
    </div>
  )
}
