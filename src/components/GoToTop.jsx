import React, { useState } from "react";
import { Link } from "react-scroll";
import "../index.css"
import "./goToTop.css"

function GoToTop() {

    const [gtt, setGTT] = useState(false)
    const showGTT = () => {

        if (window.scrollY <= 600) {
            console.log(window.scrollY);
            setGTT(true);
        } else {
            setGTT(false);
        };
    }
    window.addEventListener('scroll', showGTT)

    return (
        <div class="btn-gtt">
            <button type="button" class={gtt ? "btn trans border-0 btn-light btn-circle btn-circle-lg m-1 float-end" : "btn act border-0 btn-light btn-circle btn-circle-lg m-1 float-end"}>
                <Link
                    to="top"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    <ion-icon name="arrow-up"></ion-icon>
                </Link>
            </button>
        </div>

    );
}

export default GoToTop;


