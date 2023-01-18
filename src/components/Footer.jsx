import "./footer.css";

function Footer() {
    return <div>


        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item text">
                            <h3>Encuentranos</h3>
                            <p>BPAutomation SAS</p>
                            <p>CL 64N 4 90 AP 205 TO A</p>
                            <p>Santiago de Cali, VA 76001<br></br>Colombia</p>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Enlaces</h3>
                            <ul>
                                <li><a href="#">Descarga 1</a></li>
                                <li><a href="#">Descarga 2</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>PacificDev</h3>
                            <p>Estamos comprometidos a mejorar constantemente y a encontrar nuevas formas de aumentar la eficacia. Si usted es una empresa en busca de un socio que puede ayudarle a su empresa a optimizar las operaciones y aumentar la productividad somos la opción adecuada.</p>
                        </div>
                        <div class="col item social">
                            <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                            <a href="https://wa.me/573007467030"><ion-icon name="logo-whatsapp"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                        </div>
                    </div>
                    <p class="copyright">PACIFICDEV © 2023</p>
                </div>
            </footer>
        </div>


    </div>;
}

export default Footer;

