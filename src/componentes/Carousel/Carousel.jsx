// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//Estilos
import './Carousel.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

//Imagenes
import Petshop1 from '/imagenes/carousel/petshop1.png';
import Correas from '/imagenes/carousel/correas.png';
import OldPrince from '/imagenes/carousel/old_prince.png';
import Eukanuba from '/imagenes/carousel/eukanuba_banner.png';

// Array de imagenes para carousel
const ImagenesCarousel = [Petshop1, Eukanuba, Correas, OldPrince];

export default function Carousel() {
    return (
        <div id='ContenedorGeneralCarousel'>
            <Swiper
                navigation={true}
                modules={[Pagination, Autoplay, EffectFade]}
                className="Swiper"
                direction={'horizontal'}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                effect={'fade'}
            >
                {ImagenesCarousel.map((slide) => (
                    <SwiperSlide key={slide.id} style={{ backgroundImage: `url(${slide})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
