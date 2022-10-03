import React from "react";

function Footer() {
    return (
    <div className="Footer">
       
        <section>
        <h3 class="contactanos">Contactanos</h3>
        <div id="contacto">
            <div class="imagen-contacto"><i class="fas fa-address-card"></i></div>
            <div>
                <ul class="lista-contactos">
                    <li class="det-contacto">Direccion: Mendoza 100, CABA</li>
                    <li class="det-contacto">Teléfono: 0800-222-ORACLE</li>
                    <li class="det-contacto">Mail: <a href="mailto:contacto@oraclewines.com.ar">contacto@oraclewines.com.ar</a></li>
                </ul>
            </div>
        </div>

        <div id="redes">
            <div class="icono-redes"><i class="fab fa-facebook"></i></div>
            <div class="icono-redes"><i class="fab fa-instagram"></i></div>
            <div class="icono-redes"><i class="fab fa-twitter"></i></div>
        </div>
            
    </section>
    <div>
        <p id="copy">Copyright © 1999-2022 OracleWines S.R.L.</p>
    </div>

    </div>
    )
}

export default Footer;