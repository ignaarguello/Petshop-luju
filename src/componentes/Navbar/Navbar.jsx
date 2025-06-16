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


//Iconos
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav id="ContenedorNavbar" className="navbar navbar-expand-lg">
      {/* 1 */}
      <div id="ContenedorBrand">
        <img id="LogoPrincipal" src="./imagenes/petshop_logo.png" alt="" />
      </div>
      {/* 2 */}
      <div id="ContenedorBarraBusqueda_LinksNavegacion">
        <form class="d-flex"  id="BarraNavegacion" >
          <input class="form-control me-2" type="search" placeholder="Buscando..." aria-label="Buscar..." />
          <button class="btn bg-warning" type="submit">Buscar</button>
        </form>
      </div>
      {/* 3 */}
        <div id="ContenedorLinksNavegacion">
          <span>Alimentos</span>
          <span>Accesorios</span>
          <span>Ubicación</span>
          <span>Nosotros</span>
        </div>
      {/* 4 */}
      <div id="ContenedorLoggin_Contactos">
          <span id='BotonIniciarSesión'><FaShoppingCart /></span>
          <span id='BotonCarrito'><FaUser /></span>
      </div>
    </nav>
  );
}
