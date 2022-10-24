import React from "react";
import Robot from "./Robot";
import "../index.css";
/*import robot2 from "../assets/robot.webm";*/

function Jumbo(props) {
    return <container class="container text-center ">

        <div class="jumbotron custdims jumbotron-fluid ">
            <div class="container-fluid">
                {/*Dos elementos con igual tamano
                Se puede cambiar a 8 y 4*/}
                <div class="row align-items-center">
                    {/* Elemento IZQ*/}
                    <div class="col-sm-6">
                        <div class="robot">
                            <Robot />
                        </div>
                    </div>
                    {/* Elemento DER*/}
                    <div class="col-sm-6">
                        <h1 class="fonts cstm-oswald text-nowrap">+ BENEFICIO</h1>
                        <h1 class="fonts cstm-oswald text-nowrap">- COSTO</h1>
                        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam faucibus purus in massa. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et.</p>
                    </div>
                </div>
            </div>
        </div>

    </container>
}

export default Jumbo;