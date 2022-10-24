import "./footer.css";

function Footer() {
    return <div>


        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item text">
                            <h3>Encuentranos</h3>
                            <p>C&M Consultants SAS</p>
                            <p>CL 64N 4 90 AP 205 TO A</p>
                            <p>Santiago de Cali, VA 76001 - Colombia</p>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Enlaces</h3>
                            <ul>
                                <li><a href="#">Descarga 1</a></li>
                                <li><a href="#">Descarga 2</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>Mecasoft</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                        </div>
                        <div class="col item social">
                            <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                            <a href="https://wa.me/573007467030"><ion-icon name="logo-whatsapp"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                        </div>
                    </div>
                    <p class="copyright">Mecasoft © 2023</p>
                </div>
            </footer>
        </div>


    </div>;
}

export default Footer;

