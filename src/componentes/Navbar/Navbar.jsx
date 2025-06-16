import React from "react";

//Estilos
import "./Navbar.css";
// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Import Bootstrap Bundle with Popper
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Import Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";
// Import Bootstrap JS
import "bootstrap/dist/js/bootstrap.min.js";
// Import Bootstrap Icons CSS       

export default function Navbar() {
  return (
    <nav id="ContenedorNavbar" className="navbar navbar-expand-lg">
      {/* 1 */}
      <div id="ContenedorBrand">
        <img id="LogoPrincipal" src="./imagenes/petshop_logo.png" alt="" />
      </div>
      {/* 2 */}
      <div id="ContenedorBarraBusqueda_LinksNavegacion">
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Buscando?" aria-label="Buscar..." />
          <button class="btn bg-warning" type="submit">Buscar</button>
        </form>
      </div>
      {/* 3 */}
        <div id="ContenedorLinksNavegacion">
          <span>Perros</span>
          <span>Gatos</span>
          <span>Ubicación</span>
          <span>Accesorios</span>
        </div>
      {/* 4 */}
      <div id="ContenedorLoggin_Contactos">
       {/*  <div id="ContenedorLoggin">
          <span id='BotonIniciarSesión'>Iniciar Sesión</span>
          <span id='BotonCarrito'>Carrito</span>
        </div> */}
        {/* <div id="ContenedorContactos">
          <a href="#facebook" className="bi bi-facebook"></a>
          <a href="#twitter" className="bi bi-twitter"></a>
          <a href="#instagram" className="bi bi-instagram"></a>
        </div> */}
      </div>
    </nav>
  );
}
