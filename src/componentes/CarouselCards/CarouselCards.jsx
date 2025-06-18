import React from 'react'

// Estilos
import './CarouselCards.css'

// Import Swiper React components
import { Virtual, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const DatosCard = [
    {
        id: 1,
        titulo: 'Excellent Smart Formula Perro Adulto x 20 Kg',
        descripcion: 'Excellent Formula Smart es un alimento con ingredientes de alta calidad que proporciona los nutrientes fundamentales para satisfacer todas las necesidades nutricionales de tu mascota. Para adultos desde los 12 meses de edad en adelante, ayuda a mantener los músculos fuertes. Los ácidos grasos Omega 3 y 6 aportan elasticidad a la piel y favorecen a un pelo sano y brillante.',
        imagen: 'imagenes/productos/comidas/ExcellentCard.png',
        precio: 76.984,
    },
    {
        id: 2,
        titulo: 'Old Prince Perro Adulto Equilibrium Mediano Y Grande X 20 Kg',
        descripcion: 'Old Prince Equilibrium adulto es un alimento balanceado para perros adultos de 1 a 7 años. Gracias a su composición esta comida le proporciona a su organismo una buena digestión y, a su vez, contribuye con la salud de la piel y el pelo.',
        imagen: 'imagenes/productos/comidas/OldPrinceCard.png',
        precio: 56650,
    },
    {
        id: 3,
        titulo: 'Pro Plan Perro Adulto Raza Mediana x 15+3 Kg',
        descripcion: 'Pro Plan incorporó a su fórmula de alimentos balanceados la espirulina, componente que ayuda a proteger los sistemas inmune y digestivo de tu perro. Está hecho a base de carne de pollo, que proporciona un alto contenido de proteínas de alto valor biológico, esenciales para su buena alimentación. Procura un balance óptimo de minerales para mantener sus huesos y dientes sanos y fuertes.',
        imagen: 'imagenes/productos/comidas/ProplanCard.png',
        precio: 98630,

    },
    {
        id: 4,
        titulo: 'Eukanuba Senior Large 15Kg',
        descripcion: 'Eukanuba Adult Senior Large Breed está recomendado para perros de razas de raza grande o gigante desde los 5 años de edad que pesan más de 25 kg. Su composición ayuda a quemar grasas y mantener un peso saludable y aporta el calcio necesario para promover huesos fuertes.',
        imagen: 'imagenes/productos/comidas/EukanubaCard.png',
        precio: 63670,

    }
];

export default function App() {

    return (
        <div id='ContenedorGeneralCarouselCards'>
            <Swiper
                modules={[Virtual, Navigation]}
                slidesPerView={1}
                centeredSlides={false}
                spaceBetween={0}
                navigation={false}
                virtual
                id='SwiperCards'
                breakpoints={{
                    // Cuando el ancho de la ventana es >= 1024px (laptops/desktops)
                    1024: {
                        slidesPerView: 3, // <-- Aquí defines que muestre 3 cards
                        spaceBetween: 2,
                    },
                }}
            >
                {DatosCard.map((slide) => (
                    <SwiperSlide id='SwiperContenedor' key={slide.id} style={{ backgroundImage: `url(${slide.imagen})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                        <div className='ContenedorTextoCard'>
                            <img id='ImagenCard' src={slide.imagen} alt="" />
                                <h2 className='TituloCard'>{slide.titulo}</h2>
                                <p className='DescripcionCard'>{slide.descripcion}</p>
                                <p className='PrecioCard'>${slide.precio.toLocaleString('es-CL')}</p>
                                <button className='BotonCard'>Comprar</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

