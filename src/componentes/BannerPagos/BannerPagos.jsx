import React from 'react'

//Estilos
import './BannerPagos.css'

//Imagenes
import Mercadopago from '/imagenes/mercadopago.png'


export default function BannerPagos() {
    return (
        <div id='ContenedorGeneralBannerPagos'>
            <div id='ContenedorTextoBannerPagos'>
                <h1 style={{ marginTop: '1.5rem' }}>¡Paga con Mercadopago!</h1>
                <p style={{ marginTop: '1.5rem' }}>Tu experiencia de pago es más simple y eficiente. Con Mercado Pago, podés realizar tus compras de forma rápida y segura, aprovechando la comodidad de la plataforma líder para todas tus transacciones..</p>
            </div>
            <div id='ContenedorImagenBannerPagos'>
                <img style={{ marginTop: '1.5rem' }} src={Mercadopago} alt="Imagen de pago con tarjeta" id='ImagenMercadoPago' />
            </div>

        </div>
    )
}
