// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//Estilos
import './Carousel.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

//Imagenes
import Petshop1 from '/imagenes/carousel/petshop1.png';
import Petshop2 from '/imagenes/carousel/petshop2.png';
import Petshop3 from '/imagenes/carousel/petshop3.png';
import Petshop4 from '/imagenes/carousel/petshop4.png';

// Array de imagenes para carousel
const ImagenesCarousel = [Petshop1, Petshop2, Petshop3,Petshop4];

export default function Carousel() {
    return (
        <div id='ContenedorGeneralCarousel'>
            <Swiper
                navigation={true}
                modules={[Pagination, Autoplay]}
                className="Swiper"
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {ImagenesCarousel.map((slide) => (
                    <SwiperSlide key={slide.id} style={{ backgroundImage: `url(${slide})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                          
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
