import React, { useState } from "react";
import logo from "../assets/prueba.svg";
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
                Mecasoft
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse h6" id="navbarNavDropdown">
                <ul class="navbar-nav nav-fill w-25">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="Home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
}

export default NavBar;