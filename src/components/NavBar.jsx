import React, { useState } from "react";
import logo from "../assets/prueba.svg";
import { Link } from "react-scroll";
import "../index.css";

function NavBar() {

    const [navbar, setNavbar] = useState(false)
    const changeBgNav = () => {

        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        };
    }
    window.addEventListener('scroll', changeBgNav)

    return <nav class={navbar ? "navbar activeCustIn sticky-top navbar-expand-md" : "navbar activeCustOut sticky-top navbar-expand-md"}>
        <div class="container-fluid">
            <a class=" navbar-brand h1" href="#">
                <img src={logo} alt={"Logo"} width="30" height="24" class="d-inline-block align-text-top" />
                BPAutomation
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse h6" id="navbarNavDropdown">
                <ul class="navbar-nav nav-fill w-25">
                    {/* HOME */}
                    <li class="nav-item text-start">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    {/* TECNOLOGÍAS */}
                    <li class="nav-item text-start">
                        <li className="nav-item">
                            <Link
                                href="#tecno"
                                to="tecno"
                                activeClass="active"
                                className="nav-link text-start"
                                spy={true}
                                smooth={true}
                                offset={10}
                                duration={500}
                            >
                                Tecnologías
                            </Link>
                        </li>
                    </li>

                    {/* SECTORES */}
                    <li class="nav-item text-start">
                        <li className="nav-item">
                            <Link
                                href="#home"
                                to="sect"
                                activeClass="active"
                                className="nav-link text-start"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Sectores
                            </Link>
                        </li>
                    </li>
                    {/* INDICADORES */}
                    <li class="nav-item text-start">
                        <li className="nav-item">
                            <Link
                                href="#home"
                                to="indicadores"
                                activeClass="active"
                                className="nav-link text-start"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Indicadores
                            </Link>
                        </li>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
}

export default NavBar;