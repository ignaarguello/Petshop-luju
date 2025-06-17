import React from 'react'

// Estilos
import './CarouselCards.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, History } from 'swiper/modules';

const DatosCard = [
    {
        id: 1,
        titulo: 'Card 1',
        descripcion: 'Descripción de la Card 1',
        imagen: '/imagenes/carousel/card1.png'
    },
    {
        id: 2,
        titulo: 'Card 2',
        descripcion: 'Descripción de la Card 2',
        imagen: '/imagenes/carousel/card2.png'
    },
    {
        id: 3,
        titulo: 'Card 3',
        descripcion: 'Descripción de la Card 3',
        imagen: '/imagenes/carousel/card3.png'
    }
];
const ImagenesCarousel = DatosCard.map((card) => card.imagen);

export default function CarouselCards() {
    return (
        <div id='ContenedorGeneralCarouselCards'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={true}
                history={{
                    key: 'slide',
                }}
                modules={[Navigation, Pagination, History]}
                className="mySwiper"
            >
                {ImagenesCarousel.map((slide) => (
                    <SwiperSlide key={slide.id} style={{ backgroundImage: `url(${slide})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
