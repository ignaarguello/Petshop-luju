import React from 'react'

// Estilos
import './CarouselCards.css'

// Import Swiper React components
import { Virtual, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Iconos
import { IoIosAdd } from "react-icons/io";

const DatosCard = [
    {
        id: 1,
        titulo: 'Excellent Smart Formula Perro Adulto x 20 Kg',
        descripcion: 'Excellent Formula Smart es un alimento con ingredientes de alta calidad que proporciona los nutrientes fundamentales para satisfacer todas las necesidades nutricionales de tu mascota.',
        imagen: 'imagenes/productos/comidas/ExcellentCard.png',
        precio: 76.984,
    },
    {
        id: 2,
        titulo: 'Old Prince Perro Adulto Equilibrium Mediano Y Grande X 20 Kg',
        descripcion: 'Old Prince Equilibrium adulto es un alimento balanceado para perros adultos de 1 a 7 años.',
        imagen: 'imagenes/productos/comidas/OldPrinceCard.png',
        precio: 56650,
    },
    {
        id: 3,
        titulo: 'Pro Plan Perro Adulto Raza Mediana x 15+3 Kg',
        descripcion: 'Pro Plan incorporó a su fórmula de alimentos balanceados la espirulina, componente que ayuda a proteger los sistemas inmune y digestivo de tu perro.',
        imagen: 'imagenes/productos/comidas/ProplanCard.png',
        precio: 98630,

    },
    {
        id: 4,
        titulo: 'Eukanuba Senior Large 15Kg',
        descripcion: 'Eukanuba Adult Senior Large Breed está recomendado para perros de razas de raza grande o gigante desde los 5 años de edad.',
        imagen: 'imagenes/productos/comidas/EukanubaCard.png',
        precio: 63670,

    },
    {
        id: 5,
        titulo: 'Excellent Gato adulto 3 Kg + Pouch Fancy Feast',
        descripcion: 'Excellent Cat Adult Smart es un alimento completo y balanceado a base de proteínas de alta calidad provenientes del pollo y el arroz como principales ingredientes.',
        imagen: 'imagenes/productos/comidas/ExcellentGato.png',
        precio: 24170,
    },

    {
        id: 6,
        titulo: 'Pro Plan Cat Adult 7+ 3 Kg',
        descripcion: 'Alimento super premium para gatos mayores de 7 años.',
        imagen: 'imagenes/productos/comidas/ProPlanGato.png',
        precio: 43170,
    },
    {
        id: 7,
        titulo: 'Old Prince Equilibrium Gato Adulto Complete Care 7.5 Kg',
        descripcion: 'Su aporte de aceites esenciales Omega 3 y 6 fortalece el sistema inmune y estimula la salud de la piel y el pelaje de tu gato.',
        imagen: 'imagenes/productos/comidas/OldPrinceGato.png',
        precio: 40700,
    },
];

export default function App() {

    return (
        <div id='ContenedorGeneralCarouselCards'>
            <Swiper
                modules={[Virtual, Navigation, Autoplay]}
                slidesPerView={2}
                centeredSlides={false}
                spaceBetween={0}
                navigation={false}
                virtual
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
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
                        <img id='ImagenCard' src={slide.imagen} alt="" />
                        <section id='ContenedorCuerpoCard'>
                            <h2 className='TituloCard'>{slide.titulo}</h2>
                            <p className='DescripcionCard'>{slide.descripcion}</p>
                            <p className='PrecioCard'>${slide.precio.toLocaleString('es-CL')}</p>
                            <div id='ContenedorBotonCard'>
                                <IoIosAdd id='IconoAdd' style={{color:'white',}} />
                                <span>Comprar</span>
                            </div>
                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

